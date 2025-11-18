import imgBlackBlazer1 from "figma:asset/d8a6b9a909ebe9852dbce5a3e360324c4260a1be.png";

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bg-[#a21d20] h-[1904px] left-0 top-0 w-[1267px]" />
      <div className="absolute h-[1045px] left-[285px] top-[511px] w-[696px]" data-name="black blazer 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlackBlazer1} />
      </div>
      <p className="absolute font-['Inter:Black',sans-serif] font-black h-[126px] leading-[96px] left-[633px] not-italic text-[400px] text-black text-center top-[385px] tracking-[-50px] translate-x-[-50%] w-[1194px]">BLACK</p>
    </div>
  );
}