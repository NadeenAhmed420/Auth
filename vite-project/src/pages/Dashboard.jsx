import React, { useEffect, useState } from "react";
import { getAllTutorials, deleteTutorial } from "../api/tutorials/data"; // Import delete function
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTutorials() {
      try {
        const data = await getAllTutorials();
        setTutorials(data);
      } catch (err) {
        console.error("❌ Error fetching tutorials:", err);
        setError("Failed to load tutorials.");
      } finally {
        setLoading(false);
      }
    }

    fetchTutorials();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this tutorial?")) return;
    try {
      await deleteTutorial(id);
      // Remove deleted tutorial from state to update UI
      setTutorials((prev) => prev.filter((tut) => tut._id !== id));
    } catch (err) {
      console.error("Error deleting tutorial:", err);
      alert("Failed to delete tutorial.");
    }
  };

  if (loading) return <p>Loading tutorials...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Welcome to your Dashboard 🎯</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {tutorials.map(({ _id, title, body, image, published }) => (
          <div
            key={_id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: "300px",
              padding: "16px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              position: "relative",
            }}
          >
            <Link to={`/tutorials/${_id}`} style={{ textDecoration: "none", color: "inherit" }}>
              {image && (
                <img
                  src={image}
                  alt={title}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              )}
              <h3>{title}</h3>
              <p>{body.length > 100 ? body.substring(0, 100) + "..." : body}</p>
              <small>Published: {new Date(published).toLocaleDateString()}</small>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "#ff4d4f",
                border: "none",
                color: "white",
                padding: "5px 10px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
