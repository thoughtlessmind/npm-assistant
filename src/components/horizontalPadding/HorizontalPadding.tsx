import React, { PropsWithChildren } from "react";

type HorizontalPaddingProps = {} & PropsWithChildren;

const HorizontalPadding = (props: HorizontalPaddingProps) => {
  const { children } = props;
  return <div className="px-20">{children}</div>;
};

export default HorizontalPadding;
