import Image from "next/image";

interface Props {
  text: string;
  detail: string;
}

const DetailClickBar = ({ text, detail }: Props) => {
  return (
    <div className="space-y-4">
      <input id={`careCheck${text}`} type="checkbox" className="hidden peer" />
      <label
        htmlFor={`careCheck${text}`}
        className="flex cursor-pointer peer-checked:[&>div]:rotate-180 space-x-2 items-center"
      >
        <div className="rotate-90 flex justify-center items-center duration-150 transition-all">
          <Image
            src="/image/arrow.svg"
            alt="detail-Icon"
            width={20}
            height={20}
          />
        </div>
        <span>{text}</span>
      </label>
      <div className="text-sm h-0 peer-checked:h-20 duration-150 transition-all overflow-hidden">
        <div className="border-gray-300 border-b pb-4">{detail}</div>
      </div>
    </div>
  );
};

export default DetailClickBar;
