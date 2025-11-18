import imgScreenshot20251117At1120351 from "figma:asset/e839ce4ef01c03081a2a76704b90bd2d8ced5d84.png";
import imgScreenshot20251117At1121161 from "figma:asset/244297a5927dfd7c2bf47a625306c3d58c2de973.png";

export default function Slide() {
  return (
    <div className="bg-[#0000d5] relative size-full" data-name="Slide - 61">
      <div className="absolute h-[1101px] left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[1920px]" data-name="Screenshot 2025-11-17 at 11.20.35 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251117At1120351} />
      </div>
      <div className="absolute h-[2774px] left-[calc(50%+564.5px)] top-[calc(50%+566px)] translate-x-[-50%] translate-y-[-50%] w-[4285px]" data-name="Screenshot 2025-11-17 at 11.21.16 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251117At1121161} />
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[60px] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[50px] text-center text-white top-[calc(50%-30px)] translate-x-[-50%] w-[679px]">ANALYSING...</p>
    </div>
  );
}