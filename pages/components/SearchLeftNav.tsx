import Link from "next/link";

interface Props {
  uniqueDesigners: string[];
}

const SearchLeftNav = ({ uniqueDesigners }: Props) => {
  return (
    <div className="bg-white lg:h-full p-8 justify-start space-x-10 lg:space-x-0 lg:space-y-16 lg:block flex border-b-[1px] lg:border-b-0 min-w-max">
      <div>
        <ul className="space-y-4 text-sm font-thin">
          <li className="font-bold text-lg cursor-pointer">
            <Link href={`/search`}>
              <a>All Categories</a>
            </Link>
          </li>
          <li className="cursor-pointer opacity-70 hover:opacity-100">
            <Link href={`/search/new-arrivals`}>
              <a>New Arrivals</a>
            </Link>
          </li>
          <li className="cursor-pointer opacity-70 hover:opacity-100">
            <Link href={`/search/featured`}>
              <a>Featured</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="space-y-4 text-sm font-thin">
          <li className="font-bold text-lg cursor-pointer">All Designers</li>
          {uniqueDesigners.map((designer) => (
            <li
              key={designer}
              className="cursor-pointer opacity-70 hover:opacity-100"
            >
              <Link href={`/search/designers/${designer}`}>
                <a>{designer}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden">
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

export default SearchLeftNav;
