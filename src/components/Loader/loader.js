import React from "react";
import "./loaderStyle.css";

const Loader = () => {
  return (
    <section class="loadingContainer">
      <section class="bookshelf_wrapper">
        <ul class="books_list">
          <li class="book_item first"></li>
          <li class="book_item second"></li>
          <li class="book_item third"></li>
          <li class="book_item fourth"></li>
          <li class="book_item fifth"></li>
          <li class="book_item sixth"></li>
        </ul>
        <section class="shelf"></section>
      </section>
    </section>
  );
};

export default Loader;
