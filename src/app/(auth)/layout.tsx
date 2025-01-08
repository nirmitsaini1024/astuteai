import React from "react";

type Props = {
  children: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <div className="bg-black h-screen flex items-center justify-center -mt-[7rem]">{children}</div>
  );
};

export default layout;
