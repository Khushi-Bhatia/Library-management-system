import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import { useParams, useNavigate } from "react-router-dom";

const EditMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    axiosInstance
      .get(`/members/${id}`)
      .then((response) => {
        setMember(response.data);
      })
      .catch((error) => {
        console.error("Error fetching member details", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember((prevMember) => ({ ...prevMember, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axiosInstance
      .put(`/members/${id}`, member)
      .then(() => {
        navigate("/members");
      })
      .catch((error) => {
        console.error("Error updating member", error);
      });
  };

  return (
    <div>
      <h1>Edit Member</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={member.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={member.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={member.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={member.address}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Update Member</button>
      </form>
    </div>
  );
};

export default EditMember;
