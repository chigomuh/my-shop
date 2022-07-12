import { useRouter } from "next/router";
import SearchMainContent from "../../components/SearchMainContent";
import data from "../../db/data.json";

const Product = () => {
  const router = useRouter();
  const query: string | string[] | undefined = router.query.product;

  const filterData = data.product.filter((product) => {
    if (typeof query === "string") {
      return product.name.toLowerCase().includes(query.toLowerCase());
    }
  });

  return <SearchMainContent products={filterData} />;
};

export default Product;
