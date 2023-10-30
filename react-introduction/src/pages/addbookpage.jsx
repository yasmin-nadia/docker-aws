import React from "react";
import Addbookform from "./addbook";

function AddBookPage({ onAddBook, newBook, setNewBook }) {
  return (
    <div>
      <Addbookform
        onAddBook={onAddBook}
        newBook={newBook}
        setNewBook={setNewBook}
      />
    </div>
  );
}

export default AddBookPage;
