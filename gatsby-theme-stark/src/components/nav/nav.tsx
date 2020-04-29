/** @jsx jsx */
import { jsx, Flex } from "theme-ui";

interface NavProps {
  children: JSX.Element[];
}

const Nav = ({ children }: NavProps) => {
  return (
    <Flex sx={{ flexDirection: "column", alignItems: "flex-start" }}>
      {children}
    </Flex>
  );
};

export default Nav;
