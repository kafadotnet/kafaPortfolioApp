import { useState, useEffect } from "react";

const Technologies = () => {
  const [techSkills, setTechSkills] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("/techSkills.json");
      const data = await response.json();
      setTechSkills(data.techSkills);
    } catch (error) {
      console.error("Error fetching techSkills data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="technologies-container">
      <h5>Technologies</h5>
      <div className="skills-container">
        {techSkills.map((techSkill, index) => (
          <div key={index} className="skill-type">
            <img
              className="skill-icon"
              src={techSkill.techLogoLink}
              alt={techSkill.techType}
            />
            <p className="skill-name">{techSkill.techType}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
