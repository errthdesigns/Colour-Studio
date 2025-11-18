import imgPinkStripedJumper from "figma:asset/60ba083ffc21261ba4f5a8e3434db353f38388a7.png";
import imgPinkTieWaistShirt from "figma:asset/c64a6d0ff3271c0a132c115d24f59d297bc60f1e.png";
import imgPinkFloralJumper from "figma:asset/4c76639c5cb969e9cec8041eadffb8ff058046da.png";

// Export images for use in other components
export { 
  imgPinkStripedJumper as pinkStripedJumper,
  imgPinkTieWaistShirt as pinkTieWaistShirt,
  imgPinkFloralJumper as pinkFloralJumper
};

export default function PinkAssets() {
  return (
    <div className="bg-[#0000d5] relative size-full" data-name="pink assets">
      <div className="absolute h-[838px] left-[45px] top-[26px] w-[558px]" data-name="pink striped jumper">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPinkStripedJumper} />
      </div>
      <div className="absolute h-[837px] left-[644px] top-[27px] w-[595.952px]" data-name="pink tie waist shirt">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPinkTieWaistShirt} />
      </div>
      <div className="absolute h-[839px] left-[1280px] top-[25px] w-[598px]" data-name="pink floral jumper">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPinkFloralJumper} />
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/pink-striped-super-soft-jumper/15934918.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[923px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/pink-tie-waist-sleeveless-shirt/16439300.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1559px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/gini-london-pink-floral-applique-oversized-jumper/17234993.html</p>
    </div>
  );
}