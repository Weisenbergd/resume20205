import { H2 } from "../components/Headings";
import Photo from "../components/Photo";
import SectionDiv from "../components/SectionDiv";

const workData = [
  {
    name: "Logo",
    description: "E-commerce content management system",
    site: "https://proud-rejoicing-production.up.railway.app/admin/products",
    image: "/Images/c.png",
    tools: ["NextJS", "PostgreSQL", "Firebase"],
    links: [
      { name: "GitHub", link: "https://github.com/Weisenbergd/next-ecommerce" },
    ],
  },
  {
    name: "Recipe Viewer",
    description: "Recipe posting and sharing",
    site: "https://recipeapp-frontend-production.up.railway.app/?ingredients=",
    image: "/Images/S.png",
    tools: ["MongoDB", "GraphQL", "React", "AWS"],
    links: [
      {
        name: "GitHub - Frontend",
        link: "https://github.com/Weisenbergd/recipeapp-frontend",
      },
      {
        name: "GitHub - Backend",
        link: "https://github.com/Weisenbergd/recipeapp-backend",
      },
    ],
  },
  {
    name: "Posterly",
    description: "Minimalistic text board",
    site: "https://posterly-frontend-production.up.railway.app/",
    image: "/Images/x.png",
    tools: ["MongoDB", "Express", "React"],
    links: [
      {
        name: "GitHub - Frontend",
        link: "https://github.com/Weisenbergd/posterly-frontend",
      },
      {
        name: "GitHub - Backend",
        link: "https://github.com/Weisenbergd/posterly-backend",
      },
    ],
  },
];

export default function Projects() {
  return (
    <SectionDiv className="relative" variant="dark">
      <H2>projects.</H2>
      {/* <div> */}

      <div className="flex flex-col lg:flex-row lg:justify-center gap-32  lg:gap-12">
        {workData.map(
          ({ name, description, site, image, tools, links }, index) => (
            <div className="flex flex-col items-center gap-4 w-full" key={name}>
              <div className="flex flex-col items-center gap-4  ">
                <h3 className="text-3xl  ">{name}</h3>
                <p className="lg:min-h-[3rem] text-center max-w-52">
                  {description}
                </p>
              </div>

              <a className="" href={site}>
                <Photo
                  source={image}
                  alt={name}
                  className={`self-center ${
                    index % 2 === 0 ? "bg-orange" : "bg-orange"
                  }`}
                />
              </a>
              <ul className="flex self-center ">
                {tools.map((tool) => (
                  <li
                    className="after:content-['・'] after:px-1 last:after:content-none"
                    key={tool}
                  >
                    {tool}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-1">
                {links.map(({ name, link }) => (
                  <a className="" href={link} key={link}>
                    {name} <span className="text-orange">&rarr;</span>
                  </a>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
      {/* </div> */}
    </SectionDiv>
  );
}
