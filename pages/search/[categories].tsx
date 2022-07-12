import { useRouter } from "next/router";
import { Product } from "..";
import SearchMainContent from "../../components/SearchMainContent";
import data from "../../db/data.json";

const Categories = () => {
  const router = useRouter();
  let filterData: Product[] = data.product;

  if (router.query.categories === "newArrivals") {
    filterData = data.product.slice(data.product.length - 5);
  } else if (router.query.categories === "featured") {
    filterData = data.product.slice(0, 2);
  }

  return <SearchMainContent products={filterData} />;
};

export default Categories;
