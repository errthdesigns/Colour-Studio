import imgGreyJewelNeckJumper from "figma:asset/ffdb8f88784305392d104bcec2245987ef26dab7.png";
import imgGreyLeggings from "figma:asset/705a233440cfc310747b477a4e02e5ffab9b4661.png";
import imgGreyKnittedDress from "figma:asset/6f9eae3dc1eba94035d9dd8207d9e058e4b477c5.png";
import imgGreyHerringboneBlazer from "figma:asset/aa7367488e2dc4f4f58d689cc66b6ca692ba7a10.png";
import imgGreyZipKnitTop from "figma:asset/3ac640636866093ff5dc5fb10e2781ff7a990750.png";
import imgGreyBoucleJumper from "figma:asset/de397694ccfa6f9b5a3e408184066b2490c22b7d.png";

// Export images for use in other components
export { 
  imgGreyJewelNeckJumper as greyJewelNeckJumper,
  imgGreyLeggings as greyLeggings,
  imgGreyKnittedDress as greyKnittedDress,
  imgGreyHerringboneBlazer as greyHerringboneBlazer,
  imgGreyZipKnitTop as greyZipKnitTop,
  imgGreyBoucleJumper as greyBoucleJumper
};

export default function GreyAssets() {
  return (
    <div className="bg-[#0000d5] relative size-full" data-name="grey assets">
      <div className="absolute h-[838px] left-[45px] top-[26px] w-[558px]" data-name="grey jewel neck jumper">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGreyJewelNeckJumper} />
      </div>
      <div className="absolute h-[837px] left-[644px] top-[27px] w-[595.952px]" data-name="grey leggings">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGreyLeggings} />
      </div>
      <div className="absolute h-[839px] left-[1280px] top-[25px] w-[598px]" data-name="grey knitted dress">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGreyKnittedDress} />
      </div>
      <div className="absolute h-[837px] left-[45px] top-[1048px] w-[597px]" data-name="grey herringbone blazer">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGreyHerringboneBlazer} />
      </div>
      <div className="absolute h-[838px] left-[661px] top-[1048px] w-[597px]" data-name="grey zip knit top">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGreyZipKnitTop} />
      </div>
      <div className="absolute h-[841px] left-[1279px] top-[1048px] w-[599px]" data-name="grey boucle jumper">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGreyBoucleJumper} />
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/charcoal-grey-jewel-neck-jumper/16342195.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[1912px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/et-vous-grey-herringbone-ponte-blazer/16043396.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[940px] not-italic text-[20px] text-center text-white top-[1915px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/charcoal-grey-zip-collared-snit-top/16292605.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1545px] not-italic text-[20px] text-center text-white top-[1915px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/dark-grey-boucle-jumper/16204729.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[923px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/cotton-legging-in-charcoal/15022500.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1559px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/grey-knitted-high-neck-dress/15931269.html</p>
    </div>
  );
}