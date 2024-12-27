
import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SearchBook = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setError("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError(null);

    axiosInstance
      .get(`/books/search`, { params: { query: searchQuery } })
      .then((response) => {
        setSearchResults(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error searching for books", err);
        setError("An error occurred while searching. Please try again.");
        setLoading(false);
      });
  };

  const handleGoBack = () => {
    navigate("/"); // Navigate back to the book list
  };

  return (
    <div>
      <h1>Search Books</h1>
      <div>
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleGoBack} style={{ marginLeft: "10px" }}>
          Back to Book List
        </button>
      </div>

      {loading && <p>Searching...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {searchResults.length === 0 && !loading && !error && (
          <p>No results found.</p>
        )}
        {searchResults.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
            <p>{book.copies} copies available</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBook;
