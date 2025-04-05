import React, { useEffect, useState } from "react";
import "../Styles/TeachnologyStack.css";

const Experince = () => {
  const [dynamicExperience, setDynamicExperience] = useState([]);
  const [loading, setLoading] = useState(true); // Step 1: loading state

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await fetch('https://shop999backend.vercel.app/api/auth/getexperincedetails');
        const data = await res.json();
        if (res.ok) {
          setDynamicExperience(data.allExperiences);
        } else {
          console.error("Failed to fetch experience data");
        }
      } catch (error) {
        console.error("Error fetching experience:", error);
      } finally {
        setLoading(false); // Step 3: hide loader after fetch
      }
    };
    fetchExperience();
  }, []);

  return (
    <div className="tech-container">
      {loading ? (
        <div className="loader">Loading...</div> // Step 2: loader UI
      ) : (
        dynamicExperience.map((exp) => (
          <div key={exp._id}>
            <img
              src={
                exp.companylogo.includes("fakepath")
                  ? "https://dummyimage.com/80x80/cccccc/000000&text=Logo"
                  : exp.companylogo
              }
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
        ))
      )}
    </div>
  );
};

export default Experince;
