import React, { useState, useEffect } from "react";
import { CartState } from "../context/Context";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState([]);

  function disCount(cart) {
    if (cart.length > 5) {
      setTotal(
        cart.reduce(
          (acc, curr) => acc + (1 - 0.2) * Number(curr.price) * curr.qty,
          0
        )
      );
    } else if (cart.length > 3) {
      setTotal(
        cart.reduce(
          (acc, curr) => acc + (1 - 0.1) * Number(curr.price) * curr.qty,
          0
        )
      );
    } else if (cart.length > 0) {
      setTotal(
        cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
      );
    }
  }

  useEffect(() => {
    disCount(cart);
  }, [cart]);

  console.log(cart);
  console.log(total);
  return (
    <div className="bg-[#786d6d80] h-full  flex flex-col items-center p-2 border-gray-700 border-4">
      <div className="w-[80%]  bg-slate-200">
        <div>
          <img src="" alt="" />{" "}
        </div>
        <div>
          {cart.map((item) => {
            return (
              <div className="flex ContainerItem m-1">
                <div className="flex justify-center">
                  {" "}
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    className="w-[50%]  "
                    alt=""
                  />{" "}
                </div>
                <div className="w-[60%] font-black">Name : {item.title}</div>
                <div className="w-[20%] font-black">Price : {item.price}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[80%] mt-2">
        {cart.length > 5 ? (
          <div className="flex justify-around">
            <div className="text-3xl text-white">
              รายการทั้งหมด {cart.length} ได้รับส่วนลด 20 %{" "}
            </div>
            <div className="text-3xl"> รวม <span>{total}</span> บาท </div>
          </div>
        ) : cart.length > 3 ? (
          <div className="flex justify-around">
            <div className="text-3xl text-white">
              รายการทั้งหมด {cart.length} ได้รับส่วนลด 10 %{" "}
            </div>
            <div className="text-3xl"> รวม <span>{total}</span> บาท </div>
          </div>
        ) : cart.length > 0 ? (
          <div className="flex justify-around">
            <div className="text-3xl text-white">รายการทั้งหมด {cart.length} รายการ </div>
            <div className="text-3xl"> รวม <span className="text-red-600 font-medium">{total}</span> บาท </div>
          </div>
        ) : (
          <div className="text-3xl text-white underline flex justify-center"> ไม่มีสินค้าในตะกร้า </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
