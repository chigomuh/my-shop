import Link from "next/link";

interface Props {
  uniqueDesigners: string[];
}

const SearchLeftNav = ({ uniqueDesigners }: Props) => {
  return (
    // <div className="bg-white lg:h-full p-8 justify-start space-x-10 lg:space-x-0 lg:space-y-16 lg:block border-b-[1px] lg:border-b-0 min-w-max flex">
    //   <div>
    //     <ul className="space-y-4 text-sm font-thin">
    //       <li className="font-bold text-lg cursor-pointer">
    //         <Link href={`/search`}>
    //           <a>All Categories</a>
    //         </Link>
    //       </li>
    //       <li className="cursor-pointer opacity-70 hover:opacity-100">
    //         <Link href={`/search/new-arrivals`}>
    //           <a>New Arrivals</a>
    //         </Link>
    //       </li>
    //       <li className="cursor-pointer opacity-70 hover:opacity-100">
    //         <Link href={`/search/featured`}>
    //           <a>Featured</a>
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div>
    //     <ul className="space-y-4 text-sm font-thin">
    //       <li className="font-bold text-lg cursor-pointer">All Designers</li>
    //       {uniqueDesigners.map((designer) => (
    //         <li
    //           key={designer}
    //           className="cursor-pointer opacity-70 hover:opacity-100"
    //         >
    //           <Link href={`/search/designers/${designer}`}>
    //             <a>{designer}</a>
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    //   <div className="lg:hidden">
    //     <ul className="space-y-4 text-sm font-thin">
    //       <li className="font-bold text-lg cursor-pointer">Relevance</li>
    //       <li className="cursor-pointer opacity-70 hover:opacity-100">
    //         Trending
    //       </li>
    //       <li className="cursor-pointer opacity-70 hover:opacity-100">
    //         Latest arrivals
    //       </li>
    //       <li className="cursor-pointer opacity-70 hover:opacity-100">
    //         Price: Low to high
    //       </li>
    //       <li className="cursor-pointer opacity-70 hover:opacity-100">
    //         Price: High to low
    //       </li>
    //     </ul>
    //   </div>
    // </div>

    <div className="bg-white lg:h-full lg:p-8 justify-start lg:space-y-16 border-b-[1px] lg:border-b-0 min-w-max space-y-4 pl-4 pr-9">
      <div className="pt-4 lg:py-0">
        <ul className="space-y-4 text-sm font-thin border lg:border-0">
          <input id="categoryCheck" type="checkbox" className="hidden peer" />
          <label htmlFor="categoryCheck">
            <li className="font-bold text-lg cursor-pointer p-2 lg:p-0 border-b-[1px] lg:border-b-0">
              <Link href={`/search`}>
                <a>All Categories</a>
              </Link>
            </li>
          </label>
          <li className="cursor-pointer opacity-70 hover:opacity-100 hidden lg:block peer-checked:block p-2 lg:p-0">
            <Link href={`/search/new-arrivals`}>
              <a>New Arrivals</a>
            </Link>
          </li>
          <li className="cursor-pointer opacity-70 hover:opacity-100 hidden lg:block peer-checked:block p-2 lg:p-0">
            <Link href={`/search/featured`}>
              <a>Featured</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="space-y-4 text-sm font-thin border lg:border-0">
          <input id="designerCheck" type="checkbox" className="hidden peer" />
          <label htmlFor="designerCheck">
            <li className="font-bold text-lg cursor-pointer p-2 lg:p-0 border-b-[1px] lg:border-b-0">
              All Designers
            </li>
          </label>
          {uniqueDesigners.map((designer) => (
            <li
              key={designer}
              className="cursor-pointer opacity-70 hover:opacity-100 hidden lg:block peer-checked:block p-2 lg:p-0"
            >
              <Link href={`/search/designers/${designer}`}>
                <a>{designer}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden pb-4">
        <ul className="space-y-4 text-sm font-thin border lg:border-0">
          <input id="relevanceCheck" type="checkbox" className="hidden peer" />
          <label htmlFor="relevanceCheck">
            <li className="font-bold text-lg cursor-pointer p-2 lg:p-0 border-b-[1px] lg:border-b-0">
              Relevance
            </li>
          </label>
          <li className="cursor-pointer opacity-70 hover:opacity-100 hidden lg:block peer-checked:block p-2 lg:p-0">
            Trending
          </li>
          <li className="cursor-pointer opacity-70 hover:opacity-100 hidden lg:block peer-checked:block p-2 lg:p-0">
            Latest arrivals
          </li>
          <li className="cursor-pointer opacity-70 hover:opacity-100 hidden lg:block peer-checked:block p-2 lg:p-0">
            Price: Low to high
          </li>
          <li className="cursor-pointer opacity-70 hover:opacity-100 hidden lg:block peer-checked:block p-2 lg:p-0">
            Price: High to low
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchLeftNav;
