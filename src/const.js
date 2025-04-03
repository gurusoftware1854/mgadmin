import axios from "axios";
// import localStorage from "@react-native-async-storage/async-storage";

// const API_BASE_URL = "https://hum.ujn.mybluehostin.me/native_manglik"; // API base URL
const API_BASE_URL = "https://manglik-gold.gurusoftware.in/mgXguru"; // API base URL
const API_KEY = "mgXguru"; // Static API Key
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

// Create Axios instance
const apiClient = axios.create({
  baseURL: proxyUrl+API_BASE_URL,
  timeout: 5000, // Request timeout
});

// Set up navigation handler
let navigationRef = null;

export const setNavigationRef = (navigation) => {
  navigationRef = navigation;
};

// Request interceptor to handle token, encryption, and headers
apiClient.interceptors.request.use(
  async (config) => {
    const TOKEN = localStorage.getItem("api-token");
    const aid = localStorage.getItem("adminId");
    const aname = localStorage.getItem("adminName");
    // console.log("auth token => ", TOKEN);

    if (TOKEN) {
      config.headers["Authorization"] = `Bearer ${TOKEN}`;
    }

    const extraData = {
      aid: aid,
      aname: aname
    };

    const requestData = {
      // authorization: TOKEN ? TOKEN : "",
      authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZSI6Ijg1MTEwNjM3NTciLCJ1c2VySWQiOjEsInJvbGUiOiJDdXN0b21lciIsImV4cCI6MTc0NDA5ODQ2OH0.OQtfO0SYychu3ps7bxnYDYN1jBE-qb2OpbJtuVRLHBc",
      input:{ ...config.data,...extraData} // Include original data, default to empty object
    };

    console.log(requestData)

    const encodedData = btoa(JSON.stringify(requestData)); // Encode as Base64

    // Setting encrypted data and additional headers
    config.data = { data: encodedData }; // Encrypted data payload
    config.headers["X-API-Key"] = API_KEY;
    // console.log("outgoing", config);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses and errors
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Response Error:", {
        status: error.response.status,
        data: error.response.data,
      });
      // Redirect to Login if Authorization is missing
      if (error.response.data.message == "Authorization header missing.") {
        console.log(error.response.data.message);
        navigationRef.navigate("Auth");
      }
    } else {
      console.error("Request Failed:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;


export const truncateText = (text, wordLimit) => {
  return text.length > wordLimit
    ? text.substring(0, wordLimit)+ "..."
    : text;
};

// Constants for your application
export const baseUrl = API_BASE_URL; // Live Base URL
export const imageUrl = `${API_BASE_URL}/uploads/`; // Image uploads directory
export const appbg = "#ADD8E6"; // Background color
export const main = "#8B0000"; // Primary color
export const rupee = "₹ "; // Primary color
export const secondary = "#cc9999"; // Secondary color
export const imgurl = "https://api.manglikgold.com/API/ImagesWeb/Products/"; // Product images URL
