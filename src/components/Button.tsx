import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}: PropsWithChildren) => {
  return (
    <button
      className="p-2 border-[1px] border-blue-800 rounded text-sm hover:bg-blue-700 ease-out duration-300 active:bg-blue-700"
      {...props}
    >
      {children}
    </button>
  );
};
