import React, { FC } from "react";

type Button = {
  handleClick: () => void;
  text: string;
};

export const Button: FC<Button> = ({ text, handleClick }) => {
  return (
    <button
      className="p-2 border-[1px] border-blue-800 rounded text-sm hover:bg-blue-700 ease-out duration-300 active:bg-blue-700"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
