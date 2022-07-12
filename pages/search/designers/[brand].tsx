import { useRouter } from "next/router";
import SearchMainContent from "../../components/SearchMainContent";
import data from "../../db/data.json";

const Brand = () => {
  const router = useRouter();
  const filterData = data.product.filter(
    (product) => product.brand === router.query.brand
  );

  return <SearchMainContent products={filterData} />;
};

export default Brand;
