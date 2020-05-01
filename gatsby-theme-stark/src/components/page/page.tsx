/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { Fragment } from "react";
import Layout from "../layout/layout";

interface PageProps {
  title: string;
  content: string;
  image?: string;
}

const Page = ({ title, content, image }: PageProps): JSX.Element => {
  return (
    <Layout>
      <Fragment>
        <Heading
          as="h1"
          sx={{ color: "headings", fontSize: 36, marginBottom: 14 }}
        >
          {title}
        </Heading>
        {content}
      </Fragment>
    </Layout>
  );
};

export default Page;
