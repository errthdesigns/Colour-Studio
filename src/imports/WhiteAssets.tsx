import imgWhiteFairIsleJumper from "figma:asset/8a23d110807a8c52b0b3adbf84818f274f01cfab.png";
import imgWhiteShirt from "figma:asset/8cad4562a51987eb5566c6b66b1a0ed9993d39f0.png";
import imgWhiteLaceBlouse from "figma:asset/f4e09b42c9bc8a8d7bedce195472e8bad2e99c1e.png";
import imgWhiteTieNeckBlouse from "figma:asset/013fe5899c08f1e23a54c1aec1793c7eb7bfd74c.png";
import imgWhiteSandals from "figma:asset/a8885e47a6ed00b865dcc5c4e52f6d6ac2215592.png";
import imgWhiteBroderieDress from "figma:asset/2096ba3828a1d33a2d9648e97071ce5bbfe5b92f.png";

// Export images for use in other components
export { 
  imgWhiteFairIsleJumper as whiteFairIsleJumper,
  imgWhiteShirt as whiteShirt,
  imgWhiteLaceBlouse as whiteLaceBlouse,
  imgWhiteTieNeckBlouse as whiteTieNeckBlouse,
  imgWhiteSandals as whiteSandals,
  imgWhiteBroderieDress as whiteBroderieDress
};

export default function WhiteAssets() {
  return (
    <div className="bg-[#0000d5] relative size-full" data-name="white assets">
      <div className="absolute h-[838px] left-[45px] top-[26px] w-[558px]" data-name="white fairisle jumper">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhiteFairIsleJumper} />
      </div>
      <div className="absolute h-[837px] left-[644px] top-[27px] w-[595.952px]" data-name="white shirt">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhiteShirt} />
      </div>
      <div className="absolute h-[839px] left-[1280px] top-[25px] w-[598px]" data-name="white lace blouse">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhiteLaceBlouse} />
      </div>
      <div className="absolute h-[837px] left-[45px] top-[1048px] w-[597px]" data-name="white tie neck blouse">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhiteTieNeckBlouse} />
      </div>
      <div className="absolute h-[838px] left-[661px] top-[1048px] w-[597px]" data-name="white sandals">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhiteSandals} />
      </div>
      <div className="absolute h-[841px] left-[1279px] top-[1048px] w-[599px]" data-name="white broderie dress">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhiteBroderieDress} />
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/white-fluffy-lurex-fairisle-jumper/16439863.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[1912px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/white-tie-neck-ruffle-blouse/16039018.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[940px] not-italic text-[20px] text-center text-white top-[1915px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/footwear/where-s-that-from-white-pu-reydah-mid-block-heel-sandals/15330339.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1545px] not-italic text-[20px] text-center text-white top-[1915px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/izabel-london-white-broderie-anglaise-tiered-dress/15451039.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[923px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/et-vous-white-shirt/16292936.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1559px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/white-lace-high-neck-blouse/16387768.html</p>
    </div>
  );
}