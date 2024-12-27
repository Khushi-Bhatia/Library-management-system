import React from "react";
import BookList from "./BookList"; 
import MemberList from "./MemberList"; 

const BookAndMemberList = () => {
  return (
    <div>
      <div>
        <h1>Book List</h1>
        <BookList />
      </div>
      <div>
        <h1>Member List</h1>
        <MemberList />
      </div>
    </div>
  );
};

export default BookAndMemberList;
