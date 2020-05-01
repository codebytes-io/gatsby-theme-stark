/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

interface PostTitleProps {
  children: string;
}

const PostTitle = ({ children }: PostTitleProps): JSX.Element => {
  return (
    <Heading sx={{ color: "text.0", fontSize: 36, lineHeight: 1.25 }}>
      {children}
    </Heading>
  );
};

export default PostTitle;
