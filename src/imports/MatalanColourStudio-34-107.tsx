import imgCanvas from "figma:asset/2b130670b2340a84fee6ce9d032b885a8363de98.png";

function Video() {
  return <div className="absolute h-[150px] left-0 opacity-0 top-0 w-[300px]" data-name="Video" />;
}

function Canvas() {
  return (
    <div className="absolute h-[150px] left-0 opacity-0 top-0 w-[300px]" data-name="Canvas">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgCanvas} />
    </div>
  );
}

function Container() {
  return <div className="absolute h-[992px] left-0 top-0 w-[1412px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute h-[992px] left-0 top-0 w-[1412px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1412 992\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -110.59 -110.59 0 423.6 496)\\\'><stop stop-color=\\\'rgba(196,30,58,0.25)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(98,15,29,0.125)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.5\\\'/></radialGradient></defs></svg>')" }} />;
}

function Container2() {
  return <div className="absolute h-[992px] left-0 top-0 w-[1412px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1412 992\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -110.59 -110.59 0 988.4 496)\\\'><stop stop-color=\\\'rgba(227,6,19,0.376)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(114,3,10,0.188)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.5\\\'/></radialGradient></defs></svg>')" }} />;
}

function Container3() {
  return (
    <div className="absolute h-[992px] left-0 overflow-clip top-0 w-[1412px]" data-name="Container">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[96px] left-[284.47px] top-[448px] w-[843.055px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[96px] left-[422.5px] not-italic text-[96px] text-center text-nowrap text-white top-px tracking-[-1.92px] translate-x-[-50%] whitespace-pre">COLOUR STUDIO</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[28px] left-0 top-[836px] w-[1412px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[706.41px] not-italic text-[18px] text-center text-nowrap text-white top-0 tracking-[-0.4395px] translate-x-[-50%] whitespace-pre">Tap anywhere to start</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[992px] left-0 top-0 w-[1412px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

export default function MatalanColourStudio() {
  return (
    <div className="bg-white relative size-full" data-name="Matalan - Colour Studio">
      <Video />
      <Canvas />
      <Container3 />
      <Container4 />
    </div>
  );
}