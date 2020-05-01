/** @jsx jsx */
import React from "react";
import { jsx, Heading } from "theme-ui";

interface LogoProps {
  title: string;
  subtitle?: string;
}

const Logo = ({ title, subtitle }: LogoProps) => {
  return (
    <React.Fragment>
      <Heading sx={{ fontSize: 48, lineHeight: 1.5, color: "text.0" }}>
        {title}
      </Heading>
      {subtitle && (
        <Heading sx={{ fontSize: 18, fontWeight: "normal", color: "text.1" }}>
          {subtitle}
        </Heading>
      )}
    </React.Fragment>
  );
};

export default Logo;
