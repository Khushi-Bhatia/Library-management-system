import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const AddMember = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const newMember = { name, email, phone, address };

    axiosInstance
      .post("/members", newMember)
      .then(() => {
        alert("Member added successfully!");
        navigate("/"); // Redirect back to the member list
      })
      .catch((err) => {
        console.error("Error adding member", err);
        setError("Failed to add member. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Add New Member</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Member"}
          </button>
        </div>
      </form>

      <button onClick={() => navigate("/")} style={{ marginTop: "10px" }}>
        Back to Member List
      </button>
    </div>
  );
};

export default AddMember;
