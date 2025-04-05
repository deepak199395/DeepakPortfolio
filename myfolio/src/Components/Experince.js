import React, { useEffect, useState } from "react";
import "../Styles/TeachnologyStack.css";



const Experince = () => {
  const [dynamicExperience, setDynamicExperience] = useState([])

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await fetch('https://shop999backend.vercel.app/api/auth/getexperincedetails');
        const data = await res.json();
        console.log(data)
        if (res.ok) {
          setDynamicExperience(data.allExperiences)
        } else {
          console.error("Failed to fetch experience data");

        }
      } catch (error) {
        console.error("Error fetching experience:", error);

      }
    };
    fetchExperience();

  }, [])

  return (
    <div className="tech-container">
      {dynamicExperience.map((exp) => (
        <div key={exp._id}>
          <img
            src={exp.companylogo}
            alt={exp.experinceCompany}
            className="icon"
          />
          <h3>{exp.experinceCompany}</h3>
          <p>
            {new Date(exp.startdateL).toLocaleDateString()} -{" "}
            {new Date(exp.enddateL).toLocaleDateString()}
          </p>
          <p>{exp.experinceResponsibilities}</p>
        </div>
      ))}
    </div>
  );
};

export default Experince;
