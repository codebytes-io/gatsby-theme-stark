/** @jsx jsx */
import { jsx, Text } from "theme-ui";

interface PostDateProps {
  date: Date;
}

const PostDate = ({ date }: PostDateProps) => {
  return <Text>{date.toString()}</Text>;
};

export default PostDate;
