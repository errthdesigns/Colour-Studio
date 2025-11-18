import imgBlackBlazer from "figma:asset/d8a6b9a909ebe9852dbce5a3e360324c4260a1be.png";
import imgBlackFurCoat from "figma:asset/ea4cf5e40dd8306aaf99cca6ca61af20929fc79f.png";
import imgBlackSilverJumper from "figma:asset/807c8f35ea89111289d4caee2cbfc9e56c926f04.png";
import imgBlackCardigan from "figma:asset/9e27d560ba76be4fd06bc2fdf3596e732ce097f5.png";
import imgBlackWhiteDress from "figma:asset/8359a79ed88a352d456f9b06137064d0dd7051dc.png";
import imgBlackDress from "figma:asset/b0662888f4cbd5077631d6f76689fdf1c7573e27.png";

// Export images for use in other components
export { 
  imgBlackBlazer as blackBlazer,
  imgBlackFurCoat as blackFurCoat,
  imgBlackSilverJumper as blackSilverJumper,
  imgBlackCardigan as blackCardigan,
  imgBlackWhiteDress as blackWhiteDress,
  imgBlackDress as blackDress
};

export default function BlackAssets() {
  return (
    <div className="bg-[#0000d5] relative size-full" data-name="black assets">
      <div className="absolute h-[838px] left-[45px] top-[26px] w-[558px]" data-name="black blazer">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlackBlazer} />
      </div>
      <div className="absolute h-[837px] left-[644px] top-[27px] w-[595.952px]" data-name="black fur coat">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlackFurCoat} />
      </div>
      <div className="absolute h-[839px] left-[1280px] top-[25px] w-[598px]" data-name="black & silver jumper">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlackSilverJumper} />
      </div>
      <div className="absolute h-[837px] left-[45px] top-[1048px] w-[597px]" data-name="black cardigan">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlackCardigan} />
      </div>
      <div className="absolute h-[838px] left-[661px] top-[1048px] w-[597px]" data-name="black & white dress">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlackWhiteDress} />
      </div>
      <div className="absolute h-[841px] left-[1279px] top-[1048px] w-[599px]" data-name="black dress">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlackDress} />
      </div>
    </div>
  );
}