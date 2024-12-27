import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import { useParams, useNavigate } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();  
  const [book, setBook] = useState({ title: "", author: "", isbn: "", copies: 1 });

  useEffect(() => {
    axiosInstance
      .get(`/books/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error("Error fetching book details", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axiosInstance
      .put(`/books/${id}`, book)
      .then(() => {
        navigate("/");                
      })
      .catch((error) => console.error("Error updating book", error));
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          ISBN:
          <input
            type="text"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Copies:
          <input
            type="number"
            name="copies"
            value={book.copies}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
