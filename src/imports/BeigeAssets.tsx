import imgBeigeFauxFurGilet from "figma:asset/6c7b61a4231c5f023c9491adb7469787c2e82705.png";
import imgBeigeStripeJumper from "figma:asset/07787b165b9894e4e8f5c19461576a9c7798f27b.png";
import imgBeigeZipHoodie from "figma:asset/63f4e5f5d5fc323fee08a64ef5ef5467a8e2e51d.png";
import imgNudeShirtDress from "figma:asset/ebd9a1dfbbe108bbee1afcbb0206105fd21be83e.png";
import imgBeigeUtilityJacket from "figma:asset/c03447aa412b92c27f4405c2b9ec11f22e4affa9.png";
import imgBeigeRuffleBlouse from "figma:asset/961cca8c2ed8321bc56f313cbf7bfc4812b882a9.png";

// Export images for use in other components
export { 
  imgBeigeFauxFurGilet as beigeFauxFurGilet,
  imgBeigeStripeJumper as beigeStripeJumper,
  imgBeigeZipHoodie as beigeZipHoodie,
  imgNudeShirtDress as nudeShirtDress,
  imgBeigeUtilityJacket as beigeUtilityJacket,
  imgBeigeRuffleBlouse as beigeRuffleBlouse
};

export default function BeigeAssets() {
  return (
    <div className="bg-[#0000d5] relative size-full" data-name="beige assets">
      <div className="absolute h-[838px] left-[45px] top-[26px] w-[558px]" data-name="beige faux fur gilet">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBeigeFauxFurGilet} />
      </div>
      <div className="absolute h-[837px] left-[644px] top-[27px] w-[595.952px]" data-name="beige stripe jumper">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBeigeStripeJumper} />
      </div>
      <div className="absolute h-[839px] left-[1280px] top-[25px] w-[598px]" data-name="beige zip hoodie">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBeigeZipHoodie} />
      </div>
      <div className="absolute h-[837px] left-[45px] top-[1048px] w-[597px]" data-name="nude shirt dress">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNudeShirtDress} />
      </div>
      <div className="absolute h-[838px] left-[661px] top-[1048px] w-[597px]" data-name="beige utility jacket">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBeigeUtilityJacket} />
      </div>
      <div className="absolute h-[841px] left-[1279px] top-[1048px] w-[599px]" data-name="beige ruffle blouse">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBeigeRuffleBlouse} />
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/beige-faux-fur-gilet/16203786.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[1912px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/nude-textured-midi-shirt-dress/15929211.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[940px] not-italic text-[20px] text-center text-white top-[1915px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/beige-utility-barn-jacket/15826405.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1545px] not-italic text-[20px] text-center text-white top-[1915px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/blue-vanilla-beige-ruffle-pussy-bow-blouse/17535516.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[923px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/beige-stripe-ribbed-knit-jumper/16041527.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1559px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/beige-zip-up-hoodie/15251357.html</p>
    </div>
  );
}