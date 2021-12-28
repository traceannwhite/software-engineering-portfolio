import Head from "next/head";

const Meta = ({ keywords, description }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>Trace White - Portfolio </title>
    </Head>
  );
};

Meta.defaultProps = {
  keywords:
    "portfolio, software engineer, software developer, front end engineer, full-stack developer, react developer, back end developer, software engineering portfolio, css, javascript, html, react, next, python, django, sass, git",
  description:
    "A software engineering portfolio to display current and past projects.",
};

export default Meta;
