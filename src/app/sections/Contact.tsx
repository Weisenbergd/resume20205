import { H2 } from "../components/Headings";
import SectionDiv from "../components/SectionDiv";

export default function Contact() {
  return (
    <SectionDiv variant="light" className="h-[30rem] lg:mb-[15rem] relative">
      <H2>contact.</H2>
      <div className="">
        {/* <div className="mt-10 relative transform translate-x-1/2 bg-dark  before:content-[''] before:h-96 before:w-[1px] before:bg-dark before:absolute before:-top-[19.3rem] "></div> */}
        {/* <div className="text-dark  h-fit w-fit md:w-[32rem]  mx-auto flex  md:transform md:translate-x-1/2"> */}
        <div className="flex justify-center md:justify-end z-50 relative">
          <div className=" flex bg-dark py-10 px-10 text-light w-fit rounded-[2.5rem] z-50">
            <ul className="relative text-2xl flex flex-col gap-2">
              <li>Drew Weisenberg</li>
              <li>weisenbergd@gmail.com</li>
              <li>(+1)727-358-6907</li>
              <li>Safety Harbor, FL</li>
              <li>
                <a
                  className="text-orange"
                  href="/weisenberd-portfolio-2025.pdf"
                  target="_blank"
                >
                  résumé link
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </div>
    </SectionDiv>
  );
}
