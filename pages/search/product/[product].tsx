import { useRouter } from "next/router";
import SearchMainContent from "../../../components/SearchMainContent";
import Seo from "../../../components/Seo";
import data from "../../../db/data.json";

const Product = () => {
  const router = useRouter();
  const query: string =
    typeof router.query.product === "string" ? router.query.product : "";

  const filterData = data.product.filter((product) => {
    return product.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <Seo title={query} />
      {filterData.length === 0 && (
        <div className="w-max p-8">
          There are no products that match{" "}
          <span className="italic">{`"${query}"`}</span>
        </div>
      )}
      <SearchMainContent products={filterData} />{" "}
    </>
  );
};

export default Product;
