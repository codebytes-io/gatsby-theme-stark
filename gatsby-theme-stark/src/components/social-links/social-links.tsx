/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import {
  IoLogoFacebook,
  IoLogoDribbble,
  IoLogoTwitter,
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io";

type SocialLinkType =
  | "twitter"
  | "facebook"
  | "instagram"
  | "youtube"
  | "linkedin"
  | "dribbble";

export type SocialLink = {
  type: SocialLinkType;
  link: string;
};

interface SocialLinksProps {
  links: SocialLink[];
}

const getIcon = (type: SocialLinkType) => {
  if (type === "dribbble") return <IoLogoDribbble />;
  if (type === "facebook") return <IoLogoFacebook />;
  if (type === "twitter") return <IoLogoTwitter />;
  if (type === "youtube") return <IoLogoYoutube />;
  if (type === "instagram") return <IoLogoInstagram />;
  if (type === "linkedin") return <IoLogoLinkedin />;
};

const socialLinks = ({ links }: SocialLinksProps) => {
  if (!links) return null;
  return (
    <Flex>
      {links.map((l) => (
        <a
          href={l.link}
          sx={{
            textTransform: "capitalize",
            color: "text.2",
            mr: 30,
            fontSize: 24,
            transition: "0.3s",
            "&:hover": {
              color: "primary",
            },
          }}
        >
          {getIcon(l.type)}
        </a>
      ))}
    </Flex>
  );
};

export default socialLinks;
