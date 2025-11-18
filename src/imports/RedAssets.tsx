import imgRedButtonCardigan from "figma:asset/f57796eddd3d82e2cb8a8d214660a54eab120be2.png";
import imgRedSmartCoat from "figma:asset/13a902acd4256d149f6217b939c27407e63e9557.png";
import imgRedSequinDress from "figma:asset/78cb174b86395d5bef017495cfc60de070202266.png";
import imgBurgundyJoggers from "figma:asset/91c21e2e5e1b059e666e1e4fa5d573a5f610338d.png";
import imgCherryHeels from "figma:asset/ef4a82bc69910a54476be52fe80870ac0cda3319.png";
import imgRedBowJumpsuit from "figma:asset/072aa45fc90f6a3078af93a29e1cc094475bf07a.png";

// Export images for use in other components
export { 
  imgRedButtonCardigan as redButtonCardigan,
  imgRedSmartCoat as redSmartCoat,
  imgRedSequinDress as redSequinDress,
  imgBurgundyJoggers as burgundyJoggers,
  imgCherryHeels as cherryHeels,
  imgRedBowJumpsuit as redBowJumpsuit
};

export default function RedAssets() {
  return (
    <div className="bg-[#0000d5] relative size-full" data-name="red assets">
      <div className="absolute h-[838px] left-[45px] top-[26px] w-[558px]" data-name="red button cardigan">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRedButtonCardigan} />
      </div>
      <div className="absolute h-[837px] left-[644px] top-[27px] w-[595.952px]" data-name="red smart coat">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRedSmartCoat} />
      </div>
      <div className="absolute h-[839px] left-[1280px] top-[25px] w-[598px]" data-name="red sequin dress">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRedSequinDress} />
      </div>
      <div className="absolute h-[837px] left-[45px] top-[1048px] w-[597px]" data-name="burgundy joggers">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBurgundyJoggers} />
      </div>
      <div className="absolute h-[838px] left-[661px] top-[1048px] w-[597px]" data-name="cherry heels">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCherryHeels} />
      </div>
      <div className="absolute h-[841px] left-[1279px] top-[1048px] w-[599px]" data-name="red bow jumpsuit">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRedBowJumpsuit} />
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/red-button-cardigan/16341975.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[324px] not-italic text-[20px] text-center text-white top-[1912px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/brave-soul-burgundy-side-stripe-wide-leg-joggers/17410366.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[940px] not-italic text-[20px] text-center text-white top-[1915px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/footwear/where-s-that-from-deep-cherry-jordan-strappy-pointed-toe-high-heels/17383758.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1545px] not-italic text-[20px] text-center text-white top-[1915px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/quiz-red-bow-back-jumpsuit/17475581.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[923px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/red-smart-coat/16292979.html</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[1559px] not-italic text-[20px] text-center text-white top-[891px] translate-x-[-50%] w-[558px]">https://www.matalan.co.uk/clothing/blue-vanilla-red-satin-bow-back-sequin-dress/17535362.html</p>
    </div>
  );
}