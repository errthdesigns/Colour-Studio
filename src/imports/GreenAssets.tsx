import imgGreenJumper from "figma:asset/59c7d70f7a3d88f8a004ef3e8af785e10be2166e.png";
import imgDarkGreenJumperDress from "figma:asset/37b8f540dcd71ca7f36218f6ca82d3cf6a3f5ea8.png";
import imgGreenCordShirt from "figma:asset/e15e8ca9fc09bc0b4e789783f6b8d8513beb60fd.png";

// Export images for use in other components
export { 
  imgGreenJumper as greenJumper,
  imgDarkGreenJumperDress as darkGreenJumperDress,
  imgGreenCordShirt as greenCordShirt
};

export default function GreenAssets() {
  return (
    <div className="bg-[#0000d5] relative size-full" data-name="green assets">
      <div className="absolute h-[838px] left-[45px] top-[26px] w-[558px]" data-name="green jumper">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGreenJumper} />
      </div>
      <div className="absolute h-[837px] left-[644px] top-[27px] w-[595.952px]" data-name="dark green jumper dress">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDarkGreenJumperDress} />
      </div>
      <div className="absolute h-[839px] left-[1280px] top-[25px] w-[598px]" data-name="green cord shirt">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGreenCordShirt} />
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/green-jumper/16387216.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[923px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/dark-green-high-neck-jumper-dress/15935752.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1559px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/green-cord-shirt/16207423.html</p>
    </div>
  );
}