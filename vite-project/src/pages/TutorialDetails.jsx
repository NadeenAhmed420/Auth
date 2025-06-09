// src/pages/TutorialDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTutorialById } from "../api/tutorials/data";

const TutorialDetails = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const data = await getTutorialById(id);
        setTutorial(data);
      } catch (err) {
        console.error("Error fetching tutorial:", err);
        setError("Could not fetch tutorial.");
      }
    };

    fetchTutorial();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!tutorial) return <p>Loading...</p>;

  return (
    <div>
      <h2>{tutorial.title}</h2>
      <img src={tutorial.image} alt={tutorial.title} style={{ width: "300px" }} />
      <p>{tutorial.body}</p>
    </div>
  );
};

export default TutorialDetails;
