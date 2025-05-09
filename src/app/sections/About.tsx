import { H2 } from "../components/Headings";
import Photo from "../components/Photo";
import SectionDiv from "../components/SectionDiv";

export default function About() {
  return (
    <SectionDiv variant="light" className="relative">
      {/* <div className="max-w-[50rem] mx-auto"> */}
      <H2>about.</H2>
      <div className="flex max-md:flex-col max-md:items-center max-md:gap-14 justify-between pb-24 ">
        <div className="flex flex-col gap-4 max-w-[25rem]">
          <p>
            Hi, I'm Drew Weisenberg. I'm a 33-year-old junior Javascript web
            developer.
          </p>
          <p>
            I have a bachelor's degree in philosophy but found my passion in web
            development, teaching myself both front-end and back-end
            technologies.
          </p>
          <p>
            The projects here represent the culmination of my journey,
            showcasing a diverse set of tools, frameworks, and approaches.
          </p>
        </div>

        {/* <div className="">
          <Photo
            source={"/Images/Screenshot 2025-02-02 at 18-04-48 Vite React.png"}
            alt={"test"}
            className="self-center w-full"
          />
        </div> */}
      </div>
      {/* </div> */}

      <div className="absolute h-20 w-20 bg-orange rounded-xl md:right-[15.4rem] md:top-0 max-md:bottom-0 max-md:left-[calc(50%-3rem)] max-md:-translate-x-1/2" />
      <div className="absolute h-20 w-20 bg-orange rounded-xl md:right-[9.4rem] md:top-0 max-md:bottom-0 max-md:left-[calc(50%+3rem)] max-md:-translate-x-1/2 " />
    </SectionDiv>
  );
}
