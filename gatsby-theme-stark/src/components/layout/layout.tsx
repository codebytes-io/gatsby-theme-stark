/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import Sidebar from "../sidebar";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex sx={{ height: "100%" }}>
      <aside sx={{ flexBasis: "340px" }}>
        <Sidebar />
      </aside>
      <main sx={{ flex: 1 }}>{children}</main>
    </Flex>
  );
};

export default Layout;
