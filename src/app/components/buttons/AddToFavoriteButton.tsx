"use client"

import React, { useState } from "react";

interface FavoriteButtonProps {
  initialChecked?: boolean;
  productId: number
}

const AddToFavoriteButton: React.FC<FavoriteButtonProps> = ({
  initialChecked = false,
  productId
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleChange = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        id={`favorite-${productId}`}
        name={`favorite-checkbox-${productId}`}
        value={`favorite-button-${productId}`}
        onChange={handleChange}
        className="hidden"
      />
      <label
        htmlFor={`favorite-${productId}`}
        className="rounded-lg cursor-pointer select-none absolute top-3 right-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`feather feather-heart ${
            isChecked ? "fill-red-500 stroke-red-500 animate-heartbeat" : ""
          }`}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </label>
      <style jsx>{`
        @keyframes heartbeat {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.3);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-heartbeat {
          animation: heartbeat 1s;
        }
      `}</style>
    </div>
  );
};

export default AddToFavoriteButton;
