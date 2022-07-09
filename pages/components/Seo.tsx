import Head from "next/head";

interface Seo {
  title: string;
  description?: string;
}

const Seo = ({ title, description }: Seo) => {
  return (
    <Head>
      <title>{title} | 666666 Shop</title>
      <meta
        name="description"
        content={description || "다양한 브랜드의 상품을 경험시켜드립니다."}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "666666 Shop"} />
      <meta property="og:type" content="website" />
      <meta property="og:article:author" content="chigomuh" />
    </Head>
  );
};

export default Seo;
