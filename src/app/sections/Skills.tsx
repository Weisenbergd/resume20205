import { H2 } from "../components/Headings";
import SectionDiv from "../components/SectionDiv";

const skills = [
  "React",
  "NextJS",
  "Javascript",
  "Typescript",
  "MongoDB",
  "Express",
  "GraphQL",
  "HTML/CSS",
  "SQL",
  "Astro",
  "Figma",
  "Redis",
  ,
];

const tools = [
  "Tailwind",
  "Sass",
  "Git",
  "Docker",
  "JWT",
  "Prisma",
  "Animation",
  "Kubernetes",
];

export default function Skills() {
  return (
    <SectionDiv variant="dark" className="relative">
      {/* <div className="absolute h-20 w-20 bg-green rounded-xl md:right-[9.4rem] top-0 max-md:bottom-0 max-md:left-[calc(50%+3rem)] max-md:-translate-x-1/2 " /> */}
      {/* <div className="absolute h-20 w-20 bg-orange rounded-xl  md:right-[15.4rem] top-[-8rem] md:rounded-bl-none  max-md:left-[calc(50%+3rem)] max-md:-translate-x-1/2 " /> */}
      {/* <div className="max-md:opacity-0 absolute h-20 w-20 bg-orange rounded-xl md:rounded-tr-none  md:right-[20.4rem] top-[4rem]  max-md:left-[calc(50%+3rem)] max-md:-translate-x-1/2 " /> */}

      <H2>skills.</H2>
      <div className="relative grid grid-cols-2">
        <ul className=" flex flex-col text-3xl gap-2 mb-[6rem]">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <div>
          <ul className="ml-10 flex flex-wrap gap-4 w-fit text-xl ">
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>

        {/* <div className=" absolute left-[50%] transform translate-x-1/2 before:content-[''] bottom-0 before:absolute before:-top-60 before:h-[21rem] before:bg-light before:w-[1px] z-[50]"> */}
        <div className=" absolute left-[50%] transform translate-x-1/2 before:content-[''] bottom-0 before:absolute z-10">
          <div className="absolute h-20 w-20 bg-orange rounded-xl rounded-br-none -bottom-[6rem] right-0" />
          <div className="absolute h-20 w-20 bg-orange rounded-xl rounded-tl-none rounded-br-none -bottom-[11rem] -right-[5rem]" />
          <div className="absolute h-20 w-20 bg-orange rounded-xl rounded-tl-none rounded-br-none -bottom-[16rem] -right-[10rem]" />
          <div className="absolute h-20 w-20 bg-orange rounded-xl rounded-tl-none rounded-br-none -bottom-[21rem] -right-[15rem]" />
          <div className="absolute h-20 w-20 bg-orange rounded-xl rounded-tl-none rounded-br-none -bottom-[26rem] -right-[20rem]" />
          <div className=" absolute h-20 w-20 bg-orange rounded-xl rounded-tl-none rounded-br-none -bottom-[31rem] -right-[25rem]" />
          <div className=" absolute h-20 w-20 bg-orange rounded-xl rounded-tl-none rounded-br-none -bottom-[36rem] -right-[30rem]" />
          <div className=" absolute h-20 w-20 bg-orange rounded-xl rounded-tl-none rounded-br-none -bottom-[41rem] -right-[35rem]" />
          <div className=" absolute h-20 w-20 bg-orange rounded-xl   -bottom-[47rem] -right-[41rem] rounded-tl-none" />
          <div className=" absolute h-20 w-20 bg-orange rounded-xl   -bottom-[47rem] -right-[35rem] rounded-tr-none" />
          <div className=" absolute h-20 w-20 bg-dark rounded-xl   -bottom-[41rem] -right-[41rem] rounded-bl-none" />

          {/* <div className=" absolute h-20 w-20 bg-orange rounded-xl rounded-tl-none rounded-br-none -bottom-[51rem] -right-[45rem]" /> */}
          {/* <div className=" absolute h-20 w-20 bg-orange rounded-xl rounded-tl-none rounded-br-none -bottom-[56rem] -right-[50rem]" />
          <div className=" absolute h-20 w-20 bg-orange rounded-xl rounded-tl-none rounded-br-none -bottom-[61rem] -right-[55rem]" />
          <div className=" absolute h-20 w-20 bg-orange rounded-xl rounded-tl-none rounded-br-none -bottom-[66rem] -right-[60rem]" />
          <div className=" absolute h-20 w-20 bg-orange rounded-xl rounded-tl-none rounded-br-none -bottom-[71rem] -right-[65rem]" /> */}

          <div className="max-md:opacity-0 absolute h-20 w-20 bg-orange rounded-xl  -bottom-[21rem] right-0 rounded-tr-none" />
        </div>
        <div className="grid grid-cols-2">
          <div></div>
        </div>
      </div>
    </SectionDiv>
  );
}
