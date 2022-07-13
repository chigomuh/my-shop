import { useRouter } from "next/router";
import { Product } from "..";
import SearchMainContent from "../../components/SearchMainContent";
import Seo from "../../components/Seo";
import data from "../../db/data.json";

const Categories = () => {
  const router = useRouter();
  let filterData: Product[] = data.product;

  if (router.query.categories === "newArrivals") {
    filterData = data.product.slice(data.product.length - 5);
  } else if (router.query.categories === "featured") {
    filterData = data.product.slice(0, 2);
  }

  const title: string =
    typeof router.query.categories === "string"
      ? router.query.categories
      : "Categories";

  return (
    <>
      <Seo title={title} />
      <SearchMainContent products={filterData} />
    </>
  );
};

export default Categories;
