import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./HarBirKitob.css";

export default function HarBirKitob({ books }) {
  

  
  return (
    <div>
      {books.map((item, i) => (
        <Link key={i} to={`${item.bookId}`}>
        <li className="har-bir-book-li">
          <img src={item.bookImg} alt="img" />
          <h3>{item.bookName}</h3>
          <p  className="nomi">shoir joyi</p>
          <p><i className='bx bxs-star'></i> 4.1-3400 fikrlar</p>
          </li>
        </Link>
        
      ))}
    </div>
  );
}
