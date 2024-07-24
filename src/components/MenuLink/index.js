import { NavLink } from "react-router-dom";
import { navLinkStyles } from "./NavLinkStyles";

export default function MenuLink({ path, text }) {
  return (
    <>
      <NavLink style={navLinkStyles} to={path} end>
        {text}
      </NavLink>
    </>
  );
}
