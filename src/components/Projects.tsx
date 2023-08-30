import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="flex justify-center" id="projects">
        <div className="divider w-[80%] text-PGreen3">
          <p>02.</p>
          <p>Recent Projects</p>
        </div>
      </div>
      <div className="flex flex-col align-middle items-center mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ProjectCard
            image="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/760/094/themes/common/logo-204180220-1664550124-6d7184aec833212b57e39d5f3bd0e32d1664550125.png?0"
            imageAlt="Exootaku E-Commerce"
            description="Anime clothing e-commerce"
            link="https://pf-exo-otaku.vercel.app/shop"
          />
          <ProjectCard
            image="https://www.pngitem.com/pimgs/m/327-3274923_world-map-circle-png-transparent-png.png"
            imageAlt="CountriesApp"
            description="Find your favorite country and create activities for them"
            link="https://pi-countries-main-topaz.vercel.app/"
          />
          <ProjectCard
            image="https://media.apollographql.com/media/avatar/graph/c3Rhci13YXJzLXN3YXBp/Star_Wars_avatar_400px.png?id=4c2a62ea-7c3c-42fd-995d-20c47aa5d826"
            imageAlt="Star Wars API"
            link="https://github.com/salvaarmanasco/API-StarWars"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
