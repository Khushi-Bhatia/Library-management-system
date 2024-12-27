import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { Link } from "react-router-dom";

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/members")
      .then((response) => {
        setMembers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching members", error);
        setError("Failed to load members. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading members...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      
      <Link to="/add-member">Add a New Member</Link>
      <ul>
        {members.length === 0 ? (
          <p>No members available</p>
        ) : (
          members.map((member) => (
            <li key={member.id}>
              <h3>{member.name}</h3>
              <p>Email: {member.email}</p>
              <p>Phone: {member.phone}</p>
              <p>Address: {member.address}</p>
              <Link to={`/edit-member/${member.id}`}>Edit</Link> | 
              <button onClick={() => handleDelete(member.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

const handleDelete = (id) => {
  axiosInstance
    .delete(`/members/${id}`)
    .then(() => {
      alert("Member deleted successfully!");
      window.location.reload(); // Refresh the list
    })
    .catch((error) => {
      console.error("Error deleting member", error);
    });
};

export default MemberList;
