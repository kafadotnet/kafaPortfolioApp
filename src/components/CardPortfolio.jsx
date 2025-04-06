import { useEffect, useState } from "react";

const PortfolioCard = () => {
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
    <div className="card-container ">
      <div className="col">
        {projects.map((project, index) => (
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div key={index} className="card">
              <img src={project.projectImage} alt={project.projectName} />
              <div className="card-body">
                <h5 className="card-title">{project.projectName}</h5>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
