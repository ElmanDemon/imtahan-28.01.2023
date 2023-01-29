import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";

function Product() {
  function dataget() {
    axios.get(`http://localhost:4040/users/`).then((res) => {
      setProducts(res.data);
    });
  }

  const deleteclick = (_id) => {
    axios.delete(`http://localhost:4040/users/${_id}`).then(() => {
      dataget();
    });
  };

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    dataget();
  }, []);

  function handleclickplus() {
    setProducts([
      ...products.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      ),
    ]);
  }
  function handleclickminus() {
    setProducts([
      ...products.sort((a, b) =>
        b.title > a.title ? 1 : a.title > b.title ? -1 : 0
      ),
    ]);
  }

  return (
    <div>
      <button onClick={() => { handleclickminus(); }}>Çoxdan aza</button>
      <button onClick={() => { handleclickplus(); }}>Coxdan aza</button>
      <input type={"text"} placeholder="search" onChange={(e) => { setSearch(e.target.value); }} />
      {products
        .filter((products) =>
          products.title.toLowerCase().includes(search.toLowerCase()))
        .map((element) => {
          return (
            <>
              <img src={element.imageUrl} alt="" />
              <h1>{element.description}</h1>
              <h1>{element.title}</h1>
              <h1>${element.price}</h1>
              <button onClick={() => { deleteclick(element._id); }}> delete</button>
            </>
          );
        })}
    </div>
  );
}

export default Product;