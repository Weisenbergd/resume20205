import Button from "../components/Button";
import { H1 } from "../components/Headings";
import Photo from "../components/Photo";
import SectionDiv from "../components/SectionDiv";

export default function Hero() {
  return (
    <SectionDiv
      variant="light"
      className="flex relative flex-col md:flex-row justify-center gap-20  md:gap-16 lg:gap-60 items-center"
    >
      <div className="flex flex-col gap-24 md:order-last items-center">
        <div className=" relative max-md:right-12  ">
          <H1 className="flex flex-col  gap-1">
            <span>Drew</span>
            <span className="relative ">Weisenberg.</span>
          </H1>
        </div>
        {/* <Photo source={"/"} alt={"test"} className="self-center" /> */}
        <div className="rounded-[5rem] h-80 bg-orange w-[18rem] object-top object-contain " />
      </div>
      <div className="md:order-1 text-4xl self-center md:self-start relative top-4 flex flex-col gap-10">
        <p className="flex flex-col items-end ">
          <span>full-stack</span>
          <span className="w-full ">web developer.</span>
          {/* <span className="w-full after:content-[''] relative after:absolute after:h-[1px] after:bg-dark after:w-[clamp(300px,100vw,500px)] after:-bottom-4 after:right-0">
            web developer.
          </span> */}
        </p>
      </div>
      {/* <div className="absolute bottom-0 left-0 flex justify-end text-xl">
        <a href="#" className="bg-mustard p-4 rounded-2xl text-end ">
          contact
        </a>
      </div> */}
    </SectionDiv>
  );
}
