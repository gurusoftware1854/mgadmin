import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main class="main-content w-full px-[var(--margin-x)] pb-8">
        <div class="flex items-center space-x-4 py-5 lg:py-6">
          <h2 class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
            Input Text
          </h2>
          <div class="hidden h-full py-1 sm:flex">
            <div class="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
          </div>
          <ul class="hidden flex-wrap items-center space-x-2 sm:flex">
            <li class="flex items-center space-x-2">
              <a
                class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                href="#"
              >
                Forms
              </a>
              <svg
                x-ignore
                xmlns="http://www.w3.org/2000/svg"
                class="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li>Input Text</li>
          </ul>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
          <div class="card px-4 pb-4 sm:px-5">
            <div class="my-3 flex h-8 items-center justify-between">
              <h2 class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
                Basic Input Text
              </h2>
              <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300">
                  Code
                </span>
                <input
                  // //@change="helpers.toggleCode"
                  class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                  type="checkbox"
                />
              </label>
            </div>

            <div class="max-w-xl">
              <p>
                The input element with a type attribute whose value is "text"
                represents a one-line plain text edit control for the input
                element’s value. Check out code for detail of usage.
              </p>
              <div class="mt-5">
                <label class="block">
                  <input
                    class="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Username"
                    type="text"
                  />
                </label>
              </div>
            </div>

            <div class="code-wrapper hidden pt-4">
              <pre
                class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                x-init="hljs.highlightElement($el)"
              >
                <code class="language-html" x-ignore>
                  &lt;label class=&quot;block&quot;&gt;&#13;&#10;
                  &lt;input&#13;&#10; class=&quot;form-input w-full rounded-lg
                  border border-slate-300 bg-transparent px-3 py-2
                  placeholder:text-slate-400/70 hover:border-slate-400
                  focus:border-primary dark:border-navy-450
                  dark:hover:border-navy-400
                  dark:focus:border-accent&quot;&#13;&#10;
                  placeholder=&quot;Username&quot;&#13;&#10;
                  type=&quot;text&quot;&#13;&#10; /&gt;&#13;&#10; &lt;/label&gt;
                </code>
              </pre>
            </div>
          </div>

          <div class="card px-4 pb-4 sm:px-5">
            <div class="my-3 flex h-8 items-center justify-between">
              <h2 class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
                Label Text
              </h2>
              <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300">
                  Code
                </span>
                <input
                  // //@change="helpers.toggleCode"
                  class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                  type="checkbox"
                />
              </label>
            </div>

            <div class="max-w-xl">
              <p>
                The label represents a caption for an item in a user interface.
                Check out code for detail of usage.
              </p>
              <div class="mt-5">
                <label class="block">
                  <span>Choose Username:</span>
                  <input
                    class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Username"
                    type="text"
                  />
                </label>
              </div>
            </div>

            <div class="code-wrapper hidden pt-4">
              <pre
                class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                x-init="hljs.highlightElement($el)"
              >
                <code class="language-html" x-ignore>
                  &lt;label class=&quot;block&quot;&gt;&#13;&#10;
                  &lt;span&gt;Choose Username:&lt;/span&gt;&#13;&#10;
                  &lt;input&#13;&#10; class=&quot;form-input mt-1.5 w-full
                  rounded-lg border border-slate-300 bg-transparent px-3 py-2
                  placeholder:text-slate-400/70 hover:border-slate-400
                  focus:border-primary dark:border-navy-450
                  dark:hover:border-navy-400
                  dark:focus:border-accent&quot;&#13;&#10;
                  placeholder=&quot;Username&quot;&#13;&#10;
                  type=&quot;text&quot;&#13;&#10; /&gt;&#13;&#10;
                  &lt;/label&gt;&#13;&#10;
                </code>
              </pre>
            </div>
          </div>

          <div class="card px-4 pb-4 sm:px-5">
            <div class="my-3 flex h-8 items-center justify-between">
              <h2 class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
                Helper Text
              </h2>
              <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300">
                  Code
                </span>
                <input
                  //@change="helpers.toggleCode"
                  class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                  type="checkbox"
                />
              </label>
            </div>

            <div class="max-w-xl">
              <p>
                Helper text conveys additional guidance about the input field,
                such as how it will be used. Check out code for detail of usage.
              </p>
              <div class="mt-5">
                <label class="block">
                  <input
                    class="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Username"
                    type="text"
                  />
                </label>
                <span class="text-tiny-plus text-slate-400 dark:text-navy-300">
                  This is a help text
                </span>
              </div>
            </div>

            <div class="code-wrapper hidden pt-4">
              <pre
                class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                x-init="hljs.highlightElement($el)"
              >
                <code class="language-html" x-ignore>
                  &lt;label class=&quot;block&quot;&gt;&#13;&#10;
                  &lt;input&#13;&#10; class=&quot;form-input w-full rounded-lg
                  border border-slate-300 bg-transparent px-3 py-2
                  placeholder:text-slate-400/70 hover:border-slate-400
                  focus:border-primary dark:border-navy-450
                  dark:hover:border-navy-400
                  dark:focus:border-accent&quot;&#13;&#10;
                  placeholder=&quot;Username&quot;&#13;&#10;
                  type=&quot;text&quot;&#13;&#10; /&gt;&#13;&#10;
                  &lt;/label&gt;&#13;&#10; &lt;span class=&quot;text-tiny-plus
                  text-slate-400 dark:text-navy-300&quot;&#13;&#10; &gt;This is
                  a help text&lt;/span&#13;&#10; &gt;
                </code>
              </pre>
            </div>
          </div>

          <div class="card px-4 pb-4 sm:px-5">
            <div class="my-3 flex h-8 items-center justify-between">
              <h2 class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
                Rounded Input
              </h2>
              <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300">
                  Code
                </span>
                <input
                  //@change="helpers.toggleCode"
                  class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                  type="checkbox"
                />
              </label>
            </div>

            <div class="max-w-xl">
              <p>
                Input text can have a rounded shape. To do this, you should use
                the
                <code class="inline-code">rounded-full</code> utility. Check out
                code for detail of usage.
              </p>
              <div class="mt-5">
                <label class="block">
                  <input
                    class="form-input w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Username"
                    type="text"
                  />
                </label>
              </div>
            </div>

            <div class="code-wrapper hidden pt-4">
              <pre
                class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                x-init="hljs.highlightElement($el)"
              >
                <code class="language-html" x-ignore>
                  &lt;label class=&quot;block&quot;&gt;&#13;&#10;
                  &lt;input&#13;&#10; class=&quot;form-input w-full rounded-full
                  border border-slate-300 bg-transparent px-4 py-2
                  placeholder:text-slate-400/70 hover:border-slate-400
                  focus:border-primary dark:border-navy-450
                  dark:hover:border-navy-400
                  dark:focus:border-accent&quot;&#13;&#10;
                  placeholder=&quot;Username&quot;&#13;&#10;
                  type=&quot;text&quot;&#13;&#10; /&gt;&#13;&#10;
                  &lt;/label&gt;&#13;&#10;
                </code>
              </pre>
            </div>
          </div>

          <div class="card px-4 pb-4 sm:px-5">
            <div class="my-3 flex h-8 items-center justify-between">
              <h2 class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
                Filled Input
              </h2>
              <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300">
                  Code
                </span>
                <input
                  //@change="helpers.toggleCode"
                  class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                  type="checkbox"
                />
              </label>
            </div>

            <div class="max-w-xl">
              <p>Inputs can be filled. Check out code for detail of usage.</p>
              <div class="mt-5">
                <label class="block">
                  <input
                    class="form-input w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring-3 dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                    placeholder="Username"
                    type="text"
                  />
                </label>
              </div>
            </div>

            <div class="code-wrapper hidden pt-4">
              <pre
                class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                x-init="hljs.highlightElement($el)"
              >
                <code class="language-html" x-ignore>
                  &lt;label class=&quot;block&quot;&gt;&#13;&#10;
                  &lt;input&#13;&#10; class=&quot;form-input w-full rounded-lg
                  bg-slate-150 px-3 py-2 ring-primary/50
                  placeholder:text-slate-400 hover:bg-slate-200 focus:ring-3
                  dark:bg-navy-900/90 dark:ring-accent/50
                  dark:placeholder:text-navy-300 dark:hover:bg-navy-900
                  dark:focus:bg-navy-900&quot;&#13;&#10;
                  placeholder=&quot;Username&quot;&#13;&#10;
                  type=&quot;text&quot;&#13;&#10; /&gt;&#13;&#10;
                  &lt;/label&gt;&#13;&#10;
                </code>
              </pre>
            </div>
          </div>

          <div class="card px-4 pb-4 sm:px-5">
            <div class="my-3 flex h-8 items-center justify-between">
              <h2 class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
                Input Size
              </h2>
              <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300">
                  Code
                </span>
                <input
                  //@change="helpers.toggleCode"
                  class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                  type="checkbox"
                />
              </label>
            </div>

            <div class="max-w-xl">
              <p>
                Input text can have various sizes. Check out code for detail of
                usage.
              </p>
              <div class="mt-5 space-y-4">
                <label class="block">
                  <input
                    class="form-input h-8 w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 text-xs-plus placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Username"
                    type="text"
                  />
                </label>
                <label class="block">
                  <input
                    class="form-input w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Username"
                    type="text"
                  />
                </label>
                <label class="block">
                  <input
                    class="form-input h-12 w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 text-base placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Username"
                    type="text"
                  />
                </label>
              </div>
            </div>

            <div class="code-wrapper hidden pt-4">
              <pre
                class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                x-init="hljs.highlightElement($el)"
              >
                <code class="language-html" x-ignore>
                  &lt;label class=&quot;block&quot;&gt;&#13;&#10;
                  &lt;input&#13;&#10; class=&quot;form-input h-8 w-full
                  rounded-full border border-slate-300 bg-transparent px-4 py-2
                  text-xs-plus placeholder:text-slate-400/70
                  hover:border-slate-400 focus:border-primary
                  dark:border-navy-450 dark:hover:border-navy-400
                  dark:focus:border-accent&quot;&#13;&#10;
                  placeholder=&quot;Username&quot;&#13;&#10;
                  type=&quot;text&quot;&#13;&#10; /&gt;&#13;&#10;
                  &lt;/label&gt;&#13;&#10; &lt;label
                  class=&quot;block&quot;&gt;&#13;&#10; &lt;input&#13;&#10;
                  class=&quot;form-input w-full rounded-full border
                  border-slate-300 bg-transparent px-4 py-2
                  placeholder:text-slate-400/70 hover:border-slate-400
                  focus:border-primary dark:border-navy-450
                  dark:hover:border-navy-400
                  dark:focus:border-accent&quot;&#13;&#10;
                  placeholder=&quot;Username&quot;&#13;&#10;
                  type=&quot;text&quot;&#13;&#10; /&gt;&#13;&#10;
                  &lt;/label&gt;&#13;&#10; &lt;label
                  class=&quot;block&quot;&gt;&#13;&#10; &lt;input&#13;&#10;
                  class=&quot;form-input h-12 w-full rounded-full border
                  border-slate-300 bg-transparent px-4 py-2 text-base
                  placeholder:text-slate-400/70 hover:border-slate-400
                  focus:border-primary dark:border-navy-450
                  dark:hover:border-navy-400
                  dark:focus:border-accent&quot;&#13;&#10;
                  placeholder=&quot;Username&quot;&#13;&#10;
                  type=&quot;text&quot;&#13;&#10; /&gt;&#13;&#10;
                  &lt;/label&gt;&#13;&#10;
                </code>
              </pre>
            </div>
          </div>

          <div class="card px-4 pb-4 sm:px-5">
            <div class="my-3 flex h-8 items-center justify-between">
              <h2 class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
                Input Dataset
              </h2>
              <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300">
                  Code
                </span>
                <input
                  //@change="helpers.toggleCode"
                  class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                  type="checkbox"
                />
              </label>
            </div>

            <div class="max-w-xl">
              <p>
                A datalist with pre-defined options (connected to an
                <code class="inline-code">&lt;input&gt;</code> element): Check
                out code for detail of usage.
              </p>
              <div class="mt-5">
                <label class="block">
                  <input
                    class="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Choose browser"
                    type="text"
                    list="browsers"
                  />
                  <datalist id="browsers">
                    <option value="Google Chrome"></option>
                    <option value="Edge"></option>
                    <option value="Firefox"></option>
                    <option value="Safari"></option>
                    <option value="Opera"></option>
                  </datalist>
                </label>
              </div>
            </div>

            <div class="code-wrapper hidden pt-4">
              <pre
                class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                x-init="hljs.highlightElement($el)"
              >
                <code class="language-html" x-ignore>
                  &lt;label class=&quot;block&quot;&gt;&#13;&#10;
                  &lt;input&#13;&#10; class=&quot;form-input w-full rounded-lg
                  border border-slate-300 bg-transparent px-3 py-2
                  placeholder:text-slate-400/70 hover:border-slate-400
                  focus:border-primary dark:border-navy-450
                  dark:hover:border-navy-400
                  dark:focus:border-accent&quot;&#13;&#10;
                  placeholder=&quot;Choose browser&quot;&#13;&#10;
                  type=&quot;text&quot;&#13;&#10;
                  list=&quot;browsers&quot;&#13;&#10; /&gt;&#13;&#10;
                  &lt;datalist id=&quot;browsers&quot;&gt;&#13;&#10; &lt;option
                  value=&quot;Google Chrome&quot;&gt;&lt;/option&gt;&#13;&#10;
                  &lt;option value=&quot;Edge&quot;&gt;&lt;/option&gt;&#13;&#10;
                  &lt;option
                  value=&quot;Firefox&quot;&gt;&lt;/option&gt;&#13;&#10;
                  &lt;option
                  value=&quot;Safari&quot;&gt;&lt;/option&gt;&#13;&#10;
                  &lt;option
                  value=&quot;Opera&quot;&gt;&lt;/option&gt;&#13;&#10;
                  &lt;/datalist&gt;&#13;&#10; &lt;/label&gt;&#13;&#10;
                </code>
              </pre>
            </div>
          </div>

          <div class="card px-4 pb-4 sm:px-5">
            <div class="my-3 flex h-8 items-center justify-between">
              <h2 class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
                Disabled Text Input
              </h2>
              <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300">
                  Code
                </span>
                <input
                  //@change="helpers.toggleCode"
                  class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                  type="checkbox"
                />
              </label>
            </div>

            <div class="max-w-xl">
              <p>
                Disabled text input have their own style when disabled. Check
                out code for detail of usage.
              </p>
              <div class="mt-5">
                <label class="block">
                  <input
                    disabled
                    class="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100 dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent dark:disabled:bg-navy-600"
                    placeholder="Disabled"
                    type="text"
                  />
                </label>
                <span class="text-tiny-plus text-slate-400 dark:text-navy-300">
                  This is a disabled input text
                </span>
              </div>
            </div>

            <div class="code-wrapper hidden pt-4">
              <pre
                class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                x-init="hljs.highlightElement($el)"
              >
                <code class="language-html" x-ignore>
                  &lt;div&gt;&#13;&#10; &lt;label
                  class=&quot;block&quot;&gt;&#13;&#10; &lt;input&#13;&#10;
                  disabled&#13;&#10; class=&quot;form-input w-full rounded-lg
                  border border-slate-300 bg-transparent px-3 py-2
                  placeholder:text-slate-400/70 hover:border-slate-400
                  focus:border-primary disabled:pointer-events-none
                  disabled:select-none disabled:border-none disabled:bg-zinc-100
                  dark:border-navy-450 dark:hover:border-navy-400
                  dark:focus:border-accent
                  dark:disabled:bg-navy-600&quot;&#13;&#10;
                  placeholder=&quot;Disabled&quot;&#13;&#10;
                  type=&quot;text&quot;&#13;&#10; /&gt;&#13;&#10;
                  &lt;/label&gt;&#13;&#10; &lt;span class=&quot;text-tiny-plus
                  text-slate-400 dark:text-navy-300&quot;&#13;&#10; &gt;This is
                  a disabled input text&lt;/span&#13;&#10; &gt;&#13;&#10;
                  &lt;/div&gt;&#13;&#10;{" "}
                </code>
              </pre>
            </div>
          </div>

          <div class="card px-4 pb-4 sm:px-5">
            <div class="my-3 flex h-8 items-center justify-between">
              <h2 class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
                Input Validation
              </h2>
              <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300">
                  Code
                </span>
                <input
                  //@change="helpers.toggleCode"
                  class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                  type="checkbox"
                />
              </label>
            </div>

            <div class="max-w-xl">
              <p>
                You can validate the input text value using any validation
                libraries. Check out code for detail of usage.
              </p>
              <div class="mt-5 space-y-4">
                <div>
                  <label class="block">
                    <input
                      class="form-input w-full rounded-lg border border-success bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                      placeholder="Username"
                      type="text"
                      value="Some Value"
                    />
                  </label>
                  <span class="text-tiny-plus text-success">
                    Username is valid
                  </span>
                </div>
                <div>
                  <label class="block">
                    <input
                      class="form-input w-full rounded-lg border border-error bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                      placeholder="Username"
                      type="text"
                      value="Some Value"
                    />
                  </label>
                  <span class="text-tiny-plus text-error">
                    Username is invalid
                  </span>
                </div>
              </div>
            </div>

            <div class="code-wrapper hidden pt-4">
              <pre
                class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                x-init="hljs.highlightElement($el)"
              >
                <code class="language-html" x-ignore>
                  &lt;div&gt;&#13;&#10; &lt;label
                  class=&quot;block&quot;&gt;&#13;&#10; &lt;input&#13;&#10;
                  class=&quot;form-input w-full rounded-lg border border-success
                  bg-transparent px-3 py-2
                  placeholder:text-slate-400/70&quot;&#13;&#10;
                  placeholder=&quot;Username&quot;&#13;&#10;
                  type=&quot;text&quot;&#13;&#10; value=&quot;Some
                  Value&quot;&#13;&#10; /&gt;&#13;&#10; &lt;/label&gt;&#13;&#10;
                  &lt;span class=&quot;text-tiny-plus
                  text-success&quot;&gt;Username is valid&lt;/span&gt;&#13;&#10;
                  &lt;/div&gt;&#13;&#10; &lt;div&gt;&#13;&#10; &lt;label
                  class=&quot;block&quot;&gt;&#13;&#10; &lt;input&#13;&#10;
                  class=&quot;form-input w-full rounded-lg border border-error
                  bg-transparent px-3 py-2
                  placeholder:text-slate-400/70&quot;&#13;&#10;
                  placeholder=&quot;Username&quot;&#13;&#10;
                  type=&quot;text&quot;&#13;&#10; value=&quot;Some
                  Value&quot;&#13;&#10; /&gt;&#13;&#10; &lt;/label&gt;&#13;&#10;
                  &lt;span class=&quot;text-tiny-plus
                  text-error&quot;&gt;Username is invalid&lt;/span&gt;&#13;&#10;
                  &lt;/div&gt;&#13;&#10;
                </code>
              </pre>
            </div>
          </div>

          <div class="card px-4 pb-4 sm:px-5">
            <div class="my-3 flex h-8 items-center justify-between">
              <h2 class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
                Debounce Support
              </h2>
              <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300">
                  Code
                </span>
                <input
                  //@change="helpers.toggleCode"
                  class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                  type="checkbox"
                />
              </label>
            </div>

            <div class="max-w-xl">
              <p>
                By adding <code class="inline-code">.debounce</code> to x-model,
                you can easily debounce the updating of bound input. Check out
                code for detail of usage.
              </p>
              <div x-data="{debounceText:''}" class="mt-5">
                <label class="block">
                  <input
                    class="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Username"
                    type="text"
                    // x-model.debounce="debounceText"
                  />
                </label>
                <p class="mt-2">
                  Value: <span x-text="debounceText"></span>
                </p>
              </div>
            </div>

            {/* <div class="code-wrapper hidden pt-4">
              <pre
                class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                x-init="hljs.highlightElement($el)"
              >
                <code class="language-html" x-ignore>
  &lt;div x-data=&quot;{debounceText:&apos;&apos;}&quot;&gt;&#13;&#10;    &lt;label class=&quot;block&quot;&gt;&#13;&#10;      &lt;input&#13;&#10;        class=&quot;form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;        placeholder=&quot;Username&quot;&#13;&#10;        type=&quot;text&quot;&#13;&#10;        x-model.debounce=&quot;debounceText&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/label&gt;&#13;&#10;    &lt;p class=&quot;mt-1&quot;&gt;Value: &lt;span x-text=&quot;debounceText&quot;&gt;&lt;/span&gt;&lt;/p&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
            </div> */}
          </div>

          <div class="card px-4 pb-4 sm:px-5">
            <div class="my-3 flex h-8 items-center justify-between">
              <h2 class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
                Lazy Support
              </h2>
              <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300">
                  Code
                </span>
                <input
                  //@change="helpers.toggleCode"
                  class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                  type="checkbox"
                />
              </label>
            </div>

            <div class="max-w-xl">
              <p>
                By adding the <code class="inline-code">.lazy</code> modifier,
                you can force an x-model input to only update the property when
                user focuses away from the input element. Check out code for
                detail of usage.
              </p>
              <div x-data="{lazyText:''}" class="mt-5">
                <label class="block">
                  <input
                    class="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Username"
                    type="text"
                    // x-model.lazy="lazyText"
                  />
                </label>
                <p class="mt-2">
                  Value: <span x-text="lazyText"></span>
                </p>
              </div>
            </div>

            <div class="code-wrapper hidden pt-4">
              <pre
                class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                x-init="hljs.highlightElement($el)"
              >
                {/* <code class="language-html" x-ignore>
  &lt;div x-data=&quot;{lazyText:&apos;&apos;}&quot;&gt;&#13;&#10;    &lt;label class=&quot;block&quot;&gt;&#13;&#10;      &lt;input&#13;&#10;        class=&quot;form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;        placeholder=&quot;Username&quot;&#13;&#10;        type=&quot;text&quot;&#13;&#10;        x-model.lazy=&quot;lazyText&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/label&gt;&#13;&#10;    &lt;p class=&quot;mt-1&quot;&gt;Value: &lt;span x-text=&quot;lazyText&quot;&gt;&lt;/span&gt;&lt;/p&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code> */}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
