import imgBlueDaisyCardigan from "figma:asset/f1a76c30a570bf5a9beca5adc0f9647bb5be7b9d.png";
import imgBlueCropTop from "figma:asset/1f3874184b4f9d09bfa6bff48605c0150fa0e775.png";
import imgBlueCozyMiniDress from "figma:asset/d03acb3fc3cf7f7595c446f92139042c5b1f77bb.png";

// Export images for use in other components
export { 
  imgBlueDaisyCardigan as blueDaisyCardigan,
  imgBlueCropTop as blueCropTop,
  imgBlueCozyMiniDress as blueCozyMiniDress
};

export default function BlueAssets() {
  return (
    <div className="bg-[#0000d5] relative size-full" data-name="blue assets">
      <div className="absolute h-[838px] left-[45px] top-[26px] w-[558px]" data-name="blue daisy cardigan">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlueDaisyCardigan} />
      </div>
      <div className="absolute h-[837px] left-[644px] top-[27px] w-[595.952px]" data-name="blue crop top">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlueCropTop} />
      </div>
      <div className="absolute h-[839px] left-[1280px] top-[25px] w-[598px]" data-name="blue cozy mini dress">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlueCozyMiniDress} />
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/blue-vanilla-blue-daisy-large-flower-cardigan/15619439.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[923px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/souluxe-blue-crop-top/16107611.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1559px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/blue-high-neck-cosy-mini-dress/16292052.html</p>
    </div>
  );
}