import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Head";

export default function Layout(props) {
  return (
    <>
      <Meta />
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
