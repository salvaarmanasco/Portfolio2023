import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="flex justify-center" id="projects">
        <div className="divider w-[80%] text-POrange">
          <p>02.</p>
          <p>Recent Projects</p>
        </div>
      </div>
      <div className="flex flex-col align-middle items-center mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ProjectCard
            image="../../public/exootaku.png"
            imageAlt="Exootaku E-Commerce"
            description="Anime clothing e-commerce"
            link="https://pf-exo-otaku.vercel.app/shop"
          />
          <ProjectCard
            image="../../public/countries.avif"
            imageAlt="CountriesApp"
            description="Find your favorite country and create activities for them"
            link="https://pi-countries-main-topaz.vercel.app/"
          />
          <ProjectCard
            image="../../public/starwars.png"
            imageAlt="Star Wars API"
            link="https://github.com/salvaarmanasco/API-StarWars"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
