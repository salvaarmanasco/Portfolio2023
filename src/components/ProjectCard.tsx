interface Props {
  image: string;
  imageAlt: string;
  link: string;
  description?: string;
}

const ProjectCard = ({ image, imageAlt, description, link }: Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full ">
      <figure>
        <img src={image} alt={imageAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-PWhite">{imageAlt}</h2>
        <p className="text-PWhite">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn border-POrange text-PWhite bg-POrange hover:bg-PWhite hover:text-POrange">
            <a href={link}>Visit</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
