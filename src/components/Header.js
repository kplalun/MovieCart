import React from "react";
import { Link } from "react-router-dom";
import { Badge, Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { CartState } from "../context/Context";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="headContainer  bg-stone-700 flex justify-around items-end mb-2 p-1">
      <Link to="/" className="text-6xl font-bold no-underline ">
        Home
      </Link>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <BsFillCartFill
            color="white"
            fontSize="25px"
            className="inline-block mr-[20px]"
          />
          <Badge>{cart.length}</Badge>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <div className="w-[300px] flex p-2 m-1 bg-slate-500 items-center ">
                  <div className="w-[30%] h-[50px] rounded-full">
                    {" "}
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                      alt=""
                      className="rounded-full w-[50px] h-[50px]"
                    />
                  </div>
                  <div className="w-[50%] text-white ">{item.title}</div>
                  <ImBin
                    className="w-[20%] cursor-pointer "
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item,
                      });
                    }}
                  ></ImBin>
                </div>
              );
            })
          ) : (
            <div className="h-[50px] flex justify-center">Cart is Empty!</div>
          )}
          <div className="">
          <Link to="cart" className="text-2xl no-underline flex justify-center font-medium">
            Go to Cart
          </Link>
          </div>
          
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Header;
