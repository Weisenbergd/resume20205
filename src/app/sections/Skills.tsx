import { H2 } from "../components/Headings";
import SectionDiv from "../components/SectionDiv";

const skills = [
  "React",
  "NextJS",
  "Javascript",
  "MongoDB",
  "Express",
  "GraphQL",
  "HTML/CSS",
  "SQL",
  "Astro",
  "Figma",
];

const tools = [
  "Tailwind",
  "Sass",
  "Git",
  "Docker",
  "JWT",
  "Prisma",
  "CSS Animations",
];

export default function Skills() {
  return (
    <SectionDiv variant="dark">
      <H2>skills.</H2>
      <div className="flex flex-col gap-6 relative">
        <ul className=" flex flex-col text-3xl gap-2 ">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <div className=" absolute left-[50%] transform translate-x-1/2 before:content-[''] bottom-0 before:absolute before:-top-60 before:h-[21rem] before:bg-light before:w-[1px] z-[50]"></div>
        <div className="grid grid-cols-2">
          <div></div>
          <div>
            <ul className="ml-10 flex flex-wrap gap-4 w-fit text-xl ">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionDiv>
  );
}
