import { useRouter } from "next/router";
import SearchMainContent from "../../../components/SearchMainContent";
import Seo from "../../../components/Seo";
import data from "../../../db/data.json";

const Brand = () => {
  const router = useRouter();
  const filterData = data.product.filter(
    (product) => product.brand === router.query.brand
  );

  const title: string =
    typeof router.query.brand === "string" ? router.query.brand : "";

  return (
    <>
      <Seo title={title} />
      <SearchMainContent products={filterData} />
    </>
  );
};

export default Brand;
