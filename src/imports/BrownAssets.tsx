import imgBrownSequinJumper from "figma:asset/514068307eb2d2096ebe47abf9857fdbb9c500f0.png";
import imgBrownLeatherLeggings from "figma:asset/576a519dfecc223217920837b82e69661231c985.png";
import imgBrownAnimalShawl from "figma:asset/8f86f95536348319f6df59385bd47871b9dfb04b.png";
import imgBrownShirredDress from "figma:asset/e1732977454543772a8d1b8189ec4f4e3f9529db.png";
import imgBrownFossilTShirt from "figma:asset/fcf9655408d8a991d74edefb6ba67add136af75d.png";
import imgBrownDaisyCardigan from "figma:asset/33dd1f1a3f357cbd4ffb2bdd7ae8aa4adb3b5839.png";

// Export images for use in other components
export { 
  imgBrownSequinJumper as brownSequinJumper,
  imgBrownLeatherLeggings as brownLeatherLeggings,
  imgBrownAnimalShawl as brownAnimalShawl,
  imgBrownShirredDress as brownShirredDress,
  imgBrownFossilTShirt as brownFossilTShirt,
  imgBrownDaisyCardigan as brownDaisyCardigan
};

export default function BrownAssets() {
  return (
    <div className="bg-[#0000d5] relative size-full" data-name="brown assets">
      <div className="absolute h-[838px] left-[45px] top-[26px] w-[558px]" data-name="brown sequin jumper">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBrownSequinJumper} />
      </div>
      <div className="absolute h-[837px] left-[644px] top-[27px] w-[595.952px]" data-name="brown leather leggings">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBrownLeatherLeggings} />
      </div>
      <div className="absolute h-[839px] left-[1280px] top-[25px] w-[598px]" data-name="brown animal shawl">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBrownAnimalShawl} />
      </div>
      <div className="absolute h-[837px] left-[45px] top-[1048px] w-[597px]" data-name="brown shirred dress">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBrownShirredDress} />
      </div>
      <div className="absolute h-[838px] left-[661px] top-[1048px] w-[597px]" data-name="brown fossil t-shirt">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBrownFossilTShirt} />
      </div>
      <div className="absolute h-[841px] left-[1279px] top-[1048px] w-[599px]" data-name="brown daisy cardigan">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBrownDaisyCardigan} />
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/brown-sequin-jumper/16438439.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[1912px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/brown-shirred-midi-dress/17319909.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[940px] not-italic text-[20px] text-center text-white top-[1915px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/brown-fossil-fitted-t-shirt/17318160.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1545px] not-italic text-[20px] text-center text-white top-[1915px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/blue-vanilla-brown-daisy-large-flower-cardigan/17317256.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[923px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/brown-faux-leather-leggings/16106284.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1559px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing-accessories/brown-animal-print-reversible-shawl/16208453.html</p>
    </div>
  );
}