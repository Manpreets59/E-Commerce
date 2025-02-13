import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContent = () => {
  const cartProduct = [
    {
      ProductId: 1,
      Name: "T-Shirt",
      Size: "M",
      color: "Black",
      quantity: 1,
      Price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      ProductId: 2,
      Name: "Jeans",
      Size: "L",
      color: "Blue",
      quantity: 1,
      Price: 25,
      image: "https://picsum.photos/200?random=2",
    },
  ];
  return (
    <div>
      {cartProduct.map((product, index) => (
        <div
          Key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.Name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.Name}</h3>
              <p className="text-sm text-gray-500">
                Size: {product.Size}, color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium ">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium ">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="font-medium">${product.Price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
