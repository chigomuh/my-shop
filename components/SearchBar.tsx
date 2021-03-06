import { useRouter } from "next/router";
import { SyntheticEvent, useRef } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchProduct = useRef<HTMLInputElement>(null);

  const submitSearch = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchProduct.current instanceof HTMLInputElement) {
      router.push(`/search/product/${searchProduct.current.value}`);
      searchProduct.current.value = "";
    }
  };

  return (
    <form
      className="items-center w-full justify-center h-9 border border-gray-300 p-2 flex"
      onSubmit={submitSearch}
    >
      <label className="hidden">searchBar</label>
      <input
        type="text"
        className="w-[95%] focus:outline-0"
        placeholder="Search for products..."
        ref={searchProduct}
      />
      <div className="flex justify-end hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </form>
  );
};

export default SearchBar;
