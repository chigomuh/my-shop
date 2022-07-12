const SearchRightNav = () => {
  return (
    <div className="bg-white h-full p-8 space-y-16 hidden lg:block min-w-max">
      <div>
        <ul className="space-y-4 text-sm font-thin">
          <li className="font-bold text-lg cursor-pointer">Relevance</li>
          <li className="cursor-pointer opacity-70 hover:opacity-100">
            Trending
          </li>
          <li className="cursor-pointer opacity-70 hover:opacity-100">
            Latest arrivals
          </li>
          <li className="cursor-pointer opacity-70 hover:opacity-100">
            Price: Low to high
          </li>
          <li className="cursor-pointer opacity-70 hover:opacity-100">
            Price: High to low
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchRightNav;
