/** @jsx jsx */
import { jsx, Text, Flex } from "theme-ui";
import { Fragment } from "react";

interface Link {
  name: string;
  url: string;
}

interface CopyrightProps {
  copyrightText?: string;
  links: Link[];
}

const today = new Date();

const Copyright = ({
  copyrightText = `Copyright ${today.getFullYear()} Stark`,
  links,
}: CopyrightProps): JSX.Element => {
  console.log(links);
  return (
    <Fragment>
      <Text sx={{ color: "text.3", fontSize: 12, lineHeight: 1 }}>
        {copyrightText}
      </Text>
      {links &&
        links.map((l) => (
          <Fragment>
            <a
              href={l.url}
              sx={{
                color: "text.3",
                fontSize: 12,
                textDecoration: "none",
                mr: 10,
                lineHeight: 1,
                transition: "0.3s",
                "&:hover": {
                  color: "primary",
                },
              }}
            >
              {l.name}
            </a>
          </Fragment>
        ))}
    </Fragment>
  );
};

export default Copyright;
