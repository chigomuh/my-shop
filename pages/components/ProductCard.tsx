import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  price: number;
  image_url: string;
  bg_color: string;
  width: number;
  height: number;
  layout?: "responsive" | "intrinsic";
}

const ProductCard = ({
  name,
  price,
  image_url,
  bg_color,
  width,
  height,
  layout = "responsive",
}: Props) => {
  return (
    <>
      <div style={{ backgroundColor: bg_color }}>
        <Image
          src={image_url}
          alt={name}
          width={width}
          height={height}
          layout={layout}
        />
      </div>
      <div className="absolute top-0 left-0 z-10 flex flex-col justify-center text-center">
        <div className="text-3xl bg-white font-bold p-4">{name}</div>
        <div className="bg-white w-28 p-2">
          {price.toLocaleString("ko-KR")} \
        </div>
      </div>
    </>
  );
};

export default ProductCard;
