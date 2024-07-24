export const navLinkStyles = ({ isActive }) => {
  return {
    textDecoration: isActive ? "underline" : "none",
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
    color: "var(--cor-fonte-principal)",
  };
};
