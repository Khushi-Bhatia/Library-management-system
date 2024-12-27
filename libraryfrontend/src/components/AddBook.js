import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";  
const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [copies, setCopies] = useState(1);

  const navigate = useNavigate();  

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = { title, author, isbn, copies };

    axiosInstance
      .post("/books", newBook)
      .then((response) => {
        navigate("/"); // Redirect to book list after successful submission
      })
      .catch((error) => {
        console.error("There was an error adding the book!", error);
      });
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          ISBN:
          <input
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Copies:
          <input
            type="number"
            value={copies}
            onChange={(e) => setCopies(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
