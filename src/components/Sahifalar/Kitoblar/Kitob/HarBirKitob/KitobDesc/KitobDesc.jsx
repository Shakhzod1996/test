import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./KitobDesc.css";

export default function KitobDesc({ newArr }) {
  let location = useLocation();

  return (
    <div>
      {newArr.map((el) => {
        return el.bookObj.map((item) => {
          if (item.bookId === location.pathname.split("/").at(-1)) {
            return (
              <div key={item.bookId} className="kitob-desc-flex">
                <div className="left-desc">
                  <img src={item.bookImg} alt="img" />
                  <div className="btns-flex">
                    <button>Muallif haqida</button>
                    <button>Kitobdan iqtiboslar</button>
                    <button>Kitobxonlar taqrizi</button>
                  </div>
                </div>

                <div className="right-desc">
                    <h2 className="kitob-nomi">{item.bookName}</h2>
                  <h4 className="h4">
                  <Link to={`/container/bosh-sahifa/${el.id}`}>
                    Muallif: {item.name} {item.lastName} </Link> | <i className="bx bxs-star"></i>
                  </h4>
                  <p className="sahifa">
                    <span>Sahifalar soni:</span> {item.bookPage}
                  </p>
                  <p className="cho-etilgan">
                    {" "}
                    <span>Chop etilgan yili:</span>
                    {item.published}
                  </p>
                  <p>
                    <span>Janri:</span>
                    {item.bookGenre}
                  </p>
                  <p className="nashriyot">
                    <span>Nashriyot:</span> {item.nashriyot}
                  </p>

                  <div className="tuliq-flex">
                    <p>Toliq malumot</p>
                    <i className="bx bx-down-arrow-alt"></i>
                    <hr />
                  </div>
                  <p className="tuliq">{item.bookInfo}</p>

                  <h4 className="mavjud">Mavjud Formulalar</h4>
                  <div className="formulalar">
                    <div>
                      <i className="bx bxs-book-alt"></i>
                      <p>Qogoz Kitob</p>
                      <p>{item.bookPrice}</p>
                    </div>

                    <div>
                      <i className="bx bx-headphone"></i>
                      <p>Audio Kitob</p>
                      <p>15 000 sum</p>
                    </div>

                    <div>
                      <i className="bx bxs-devices"></i>
                      <p>Elektron</p>
                      <p>{item.electron}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        });
      })}
    </div>
  );
}
