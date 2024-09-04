// this is fixing the problem of that the MUI was expecting the href but in the react router dom Link component and NavLink Components you have to pass to="" prop and MUI was not expecting that
import { Button } from "@mui/material";
import { NavLink, LinkProps } from "react-router-dom";
import React, { ReactNode } from "react";
// here we build a custom Component to transform href prop to to="" prop
const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  // creating a new type that has all the Link Props but without to prop
  Omit<LinkProps, "to"> & { href: LinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  // we passed the ref to allow the parent component to controll this compontent
  return <NavLink to={href} ref={ref} {...other} />;
});

function Link({
  children,
  startIcon,
  variant,
  id
}: {
  children: string;
  startIcon: ReactNode;
  variant?: "contained" | "outlined" | "text";
  id:string
}) {
  return (
    <Button
      component={LinkBehavior}
      startIcon={startIcon}
      variant={variant}
      href={`/products/:${id}`}
    >
      {children}
    </Button>
  );
}
export default Link;
