
import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    axiosInstance
      .get("/books")
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the books!", error);
        setError("Failed to load books. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      axiosInstance
        .delete(`/books/${id}`)
        .then(() => {
          setBooks(books.filter((book) => book.id !== id)); // Remove deleted book from the list
          alert("Book deleted successfully!");
        })
        .catch((error) => {
          console.error("Error deleting book", error);
        });
    }
  };

  if (loading) {
    return <p>Loading books...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      
      <nav>
        <Link to="/add">Add a New Book</Link> | <Link to="/search">Search Books</Link>
      </nav>
      <ul className="book-list-container">
        {books.length === 0 ? (
          <p>No books available</p>
        ) : (
          books.map((book) => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>ISBN: {book.isbn}</p>
              <p>{book.copies} copies available</p>
              <Link to={`/edit/${book.id}`}>Edit</Link> | 
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default BookList;
