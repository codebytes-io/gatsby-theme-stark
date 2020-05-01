/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import Logo from "../logo";
import Nav from "../nav";
import NavItem from "../nav-item";
import SocialLinks, { SocialLink } from "../social-links/social-links";
import Copyright from "../copyright";

const links: SocialLink[] = [
  {
    type: "twitter",
    link: "https://twitter.com/codebytes_io",
  },
  {
    type: "facebook",
    link: "https://www.facebook.com/codebytesio",
  },
  {
    type: "instagram",
    link: "https://www.instagram.com/codebytes_io/",
  },
  {
    type: "dribbble",
    link: "https://dribbble.com/codebytes",
  },
  {
    type: "linkedin",
    link: "https://www.linkedin.com/company/34639510",
  },
];

const Sidebar = () => {
  return (
    <Flex
      sx={{
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div sx={{ marginBottom: 80 }}>
          <Logo title="Stark" subtitle="A creative portfolio theme" />
        </div>
        <Nav>
          <NavItem name="Home" link="#" isActive />
          <NavItem name="About" link="#" />
          <NavItem name="Blog" link="#" />
          <NavItem name="Contact" link="#" />
        </Nav>
      </div>
      <div>
        <div sx={{ marginBottom: 40 }}>
          <SocialLinks links={links} />
        </div>
        <Copyright
          links={[
            {
              name: "Privacy",
              url: "#",
            },
            {
              name: "Terms",
              url: "#",
            },
          ]}
        />
      </div>
    </Flex>
  );
};

export default Sidebar;
