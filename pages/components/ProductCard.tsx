import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
  price: number;
  image_url: string;
  bg_color: string;
  priority: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  image_url,
  bg_color,
  priority,
}: Props) => {
  return (
    <>
      <Link href={`/product/${id}`}>
        <a>
          <div style={{ backgroundColor: bg_color }}>
            <Image
              src={image_url}
              alt={name}
              width={250}
              height={250}
              layout="responsive"
              priority={priority}
            />
          </div>
          <div className="absolute top-0 left-0 z-10 flex flex-col justify-center text-center">
            <div className="text-3xl bg-white font-bold p-4">{name}</div>
            <div className="bg-white w-28 p-2">
              ₩ {price.toLocaleString("ko-KR")}
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default ProductCard;
