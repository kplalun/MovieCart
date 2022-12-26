import React, { useState } from "react";
import { CartState } from "../context/Context";
import Card from "./Card";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);

  const [query, setQuery] = useState("");
  const [filterData, setFilterData] = useState(true);

  function handleFilter(query) {
    const newValue = products.filter((movie) => {
      return movie.title.toLowerCase().includes(query);
    });
    if (newValue.length === 0) {
      setFilterData(false);
    } else {
      setFilterData(true);
    }
  }

  return (
    <>
      <div className="HomePage flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-[30%] border-2 border-solid outline-none  focus:border-indigo-600 p-2"
          onChange={(event) => {
            setQuery(event.target.value);
            handleFilter(event.target.value);
          }}
        />
      </div>

      <div className="cardContainer flex flex-wrap justify-center">
        {filterData ? (
          products
            .filter((movie) => {
              return movie.title.toLowerCase().includes(query);
            })
            .map((item) => {
              return <Card key={item.id} movie={item} />;
            })
        ) : (
          <div className="text-white mt-20 text-9xl">Not Found</div>
        )}
      </div>
    </>
  );
};

export default Home;
