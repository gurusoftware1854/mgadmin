import React, { useState, useEffect } from "react";
import SearchableDropdownComponent from "./SearchableDropdownComponent.js";
import { baseUrl } from "../const";
import apiClient from "../const";

const KanchanUserSpinner = ({ onSelect, selectedUser, setSelectedUser }) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiClient.post(
          `${baseUrl}/kanchan/get_kanchan_users.php`
        );

        if (response?.data?.users) {
          setOptions(response.data.users);
          if (selectedUser?.id) {
            const selectedOption = response.data.users.find(
              (user) => user.id == selectedUser.id
            );
            if (selectedOption) {
              setSelectedUser({
                id: selectedOption.id,
                name: selectedOption.name,
                amount: selectedOption.type,
                emi: selectedOption.emi_count,
                last_trans: selectedOption.last_trans,
                phone: selectedOption.phone,
              });
            }
          }
        }
      } catch (error) {
        console.error(
          "Error fetching users:",
          error.response?.data || error.message
        );
      }
      setLoading(false);
    };

    fetchUsers();
  }, [selectedUser?.id, setSelectedUser]);

  const handleSelect = (item) => {
    console.log(item);
    setSelectedUser({
      id: item.id,
      name: item.name,
      //   amount: item.amount,
      //   emi: item.emi,
      //   last_trans: item.last_trans,
    });
  };

  return (
    <div style={{flex:1}}>
      <div className="my-3 flex h-8 ">
        <h2 className="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
          {"Select Kanchan User"}
        </h2>
      </div>
      <SearchableDropdownComponent
        items={options.map((user) => ({
          id: user.id,
          name: `${user.id}) ${user.name}`,
          amount: user.type,
          emi: user.emi_count,
          last_trans: user.last_trans,
          phone: user.phone,
        }))}
        placeholder="Select User"
        className="col-md-3"
        onItemSelect={handleSelect}
        selectedValue={selectedUser?.name || ""}
      />
    </div>
  );
};

export default KanchanUserSpinner;
