/** @jsx jsx */
import { useState } from "react";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import ActiveIndicator from "../active-indicator/active-indicator";

interface NavItemProps {
  name: string;
  link: string;
  isActive?: boolean;
}

const NavItem = ({ name, link, isActive }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      to={link}
      sx={{
        display: "inline-block",
        color: "text.0",
        fontSize: 24,
        fontWeight: "bold",
        textDecoration: "none",
        marginTop: 14,
        marginBottom: 14,
      }}
    >
      {name}
      <ActiveIndicator isActive={isActive} isHovered={isHovered} />
    </Link>
  );
};

export default NavItem;
