import imgPurpleChunkyCardigan from "figma:asset/9c743edfd8c380bc663e657e013027faf1f9e45e.png";
import imgPurpleJerseyShirt from "figma:asset/2b47399021ff858cbae565cb6165a7b45d7e08c2.png";
import imgPurpleVelvetBlazer from "figma:asset/88078f39edb819229088d7e7d15028c829e7efa7.png";

// Export images for use in other components
export { 
  imgPurpleChunkyCardigan as purpleChunkyCardigan,
  imgPurpleJerseyShirt as purpleJerseyShirt,
  imgPurpleVelvetBlazer as purpleVelvetBlazer
};

export default function PurpleAssets() {
  return (
    <div className="bg-[#0000d5] relative size-full" data-name="purple assets">
      <div className="absolute h-[838px] left-[45px] top-[26px] w-[558px]" data-name="purple chunky cardigan">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPurpleChunkyCardigan} />
      </div>
      <div className="absolute h-[837px] left-[644px] top-[27px] w-[595.952px]" data-name="purple jersey shirt">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPurpleJerseyShirt} />
      </div>
      <div className="absolute h-[839px] left-[1280px] top-[25px] w-[598px]" data-name="purple velvet blazer">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPurpleVelvetBlazer} />
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/gini-london-purple-chunky-knit-long-cardigan/17492408.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[923px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/yours-curve-purple-jersey-placket-shirt/17458847.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1559px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/dusk-purple-velvet-single-breasted-blazer/17514144.html</p>
    </div>
  );
}