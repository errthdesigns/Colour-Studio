import imgOrangeKnittedCardigan from "figma:asset/9c386df6470d9df26321178169d59c9ce73db274.png";
import imgOrangeFloralDress from "figma:asset/0be9373003b4648ee1732bf9e84856c5225d5820.png";
import imgOrangeFlowerPullover from "figma:asset/005af05dcfba78a217be442e8f5a8afaa43e63fb.png";

// Export images for use in other components
export { 
  imgOrangeKnittedCardigan as orangeKnittedCardigan,
  imgOrangeFloralDress as orangeFloralDress,
  imgOrangeFlowerPullover as orangeFlowerPullover
};

export default function OrangeAssets() {
  return (
    <div className="bg-[#0000d5] relative size-full" data-name="orange assets">
      <div className="absolute h-[838px] left-[45px] top-[26px] w-[558px]" data-name="orange knitted cardigan">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOrangeKnittedCardigan} />
      </div>
      <div className="absolute h-[837px] left-[644px] top-[27px] w-[595.952px]" data-name="orange floral dress">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOrangeFloralDress} />
      </div>
      <div className="absolute h-[839px] left-[1280px] top-[25px] w-[598px]" data-name="orange flower pullover">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOrangeFlowerPullover} />
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/orange-knitted-lofty-cardigan/17417630.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[923px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/urban-bliss-orange-floral-smock-dress/15408519.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1559px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/yumi-orange-flower-cable-knit-tie-side-pullover/17493341.html</p>
    </div>
  );
}