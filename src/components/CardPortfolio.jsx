import { useEffect, useState } from "react";

const CardPortfolio = () => {
  const [projects, SetProjects] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/projects.json");
      const data = await response.json();
      SetProjects(data.projects);
    } catch (error) {
      console.error("Error fetching projects data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card-grid">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          <div className="card">
            <img
              src={project.projectImage}
              alt={project.projectName}
              className="card-image"
            />
            <div className="card-body">
              <h5 className="card-title">{project.projectName}</h5>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CardPortfolio;
