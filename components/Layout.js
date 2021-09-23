import Footer from "./Footer";
import Header from "./Header";
import HeadComponent from "./Head";

export default function Layout(props) {
  return (
    <>
      <HeadComponent />
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
