import React from "react";
import { CartState } from "../context/Context";

const Card = ({ movie }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);
  return (
    <div
      className="item relative w-[300px] h-[450px] m-1 rounded-2xl bg-[#A9A9A9] border-white hover:bg-white hover:border-2 hover:border-black "
      key={movie.id}
    >
      <div className="w-[97%] h-[60%]  mx-auto mt-1 mb-1 ">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          className="w-full h-full rounded-t-2xl"
          alt=""
        />
      </div>
      <div className="content p-1">
        <div className="movieName text-base font-black mb-1">{movie.title}</div>
        <div className="movieDate mb-1">
          Release date : {movie.release_date}
        </div>
        <div className="overView ">{movie.overview.slice(0, 120) + "..."}</div>
      </div>

      {cart.some((p) => p.id === movie.id) ? (
        <div className="buttons w-full h-full rounded-2xl flex flex-col items-center justify-center bg-[#f3484880] absolute top-0  opacity-[1000] hover:bg-[#787878CC] text-yellow-400">
          <button
            className="btnDetail w-[50%] h-[10%] bg-[#dcdada] rounded m-2 text-black hover:bg-[#f34848] hover:scale-110 "
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: movie,
              });
            }}
          >
            Remove
          </button>
        </div>
      ) : (
        <div className="buttons w-full h-full rounded-2xl flex flex-col items-center justify-center bg-gray-200  absolute top-0 opacity-[0] hover:opacity-[1000] hover:bg-[#787878CC] text-yellow-400">
          <button
            className="btnAddToCart w-[50%] h-[10%] rounded bg-[#dcdada] text-black hover:bg-[#cbfcf6] hover:scale-110"
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: movie,
              });
            }}
          >
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
