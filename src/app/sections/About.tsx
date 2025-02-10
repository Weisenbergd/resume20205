import { H2 } from "../components/Headings";
import Photo from "../components/Photo";
import SectionDiv from "../components/SectionDiv";

export default function About() {
  return (
    <SectionDiv variant="light" className="">
      {/* <div className="max-w-[50rem] mx-auto"> */}
      <H2>about.</H2>
      <div className="flex max-md:flex-col max-md:items-center max-md:gap-14 justify-between">
        <div className="flex flex-col gap-4 max-w-[25rem]">
          <p>
            Hi, I'm Drew Weisenberg. Im 33 years old junior Javascript web
            developer.
          </p>
          <p>
            I have a chaelor's degree in philosophy but found my passion in web
            development, teaching myself both front-end and back-end
            technologies.
          </p>
          <p>
            The projects here represent the culmunation of my journey,
            showcasing a diverse set of tools, frameworks, and approaches.
          </p>
        </div>

        <div className="">
          {/* <Photo
            source={"/Images/Screenshot 2025-02-02 at 18-04-48 Vite React.png"}
            alt={"test"}
            className="self-center w-full"
          /> */}
          <div className="rounded-[5rem] h-80 bg-orange w-[18rem] object-top object-contain " />

          {/* <div className=""></div> */}
        </div>
      </div>
      {/* </div> */}
    </SectionDiv>
  );
}
