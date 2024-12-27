import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookAndMemberList from "./components/BookAndMemberList"; 
import AddBook from "./components/AddBook";
import SearchBook from "./components/SearchBook";
import EditBook from "./components/EditBook";
import AddMember from "./components/AddMember";
import EditMember from "./components/EditMember"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookAndMemberList />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/search" element={<SearchBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/add-member" element={<AddMember />} />
        <Route path="/edit-member/:id" element={<EditMember />} />
      </Routes>
    </Router>
  );
};

export default App;

