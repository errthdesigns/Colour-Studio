import imgYellowCableKnitJumper from "figma:asset/e079bd73b26998367654f1a3be0fdda86a647840.png";
import imgYellowBeltedDress from "figma:asset/705791a2b7d8548379a8d46a935886ae88e746f4.png";
import imgYellowButtonCoat from "figma:asset/0dc464643609ba49a39352d157d7f14c1e9f50e3.png";

// Export images for use in other components
export { 
  imgYellowCableKnitJumper as yellowCableKnitJumper,
  imgYellowBeltedDress as yellowBeltedDress,
  imgYellowButtonCoat as yellowButtonCoat
};

export default function YellowAssets() {
  return (
    <div className="bg-[#0000d5] relative size-full" data-name="yellow assets">
      <div className="absolute h-[838px] left-[45px] top-[26px] w-[558px]" data-name="yellow cable knit jumper">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgYellowCableKnitJumper} />
      </div>
      <div className="absolute h-[837px] left-[644px] top-[27px] w-[595.952px]" data-name="yellow belted dress">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgYellowBeltedDress} />
      </div>
      <div className="absolute h-[839px] left-[1280px] top-[25px] w-[598px]" data-name="yellow button coat">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgYellowButtonCoat} />
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/yellow-cable-knit-jumper/16291630.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[923px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/yellow-belted-mini-tea-dress/15709162.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1559px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/star-by-julien-macdonald-yellow-button-through-coat/17495346.html</p>
    </div>
  );
}