import Footer from "./Footer";
import Header from "./Header";
import HeadComponent from "./Head";
import "bootstrap/dist/css/bootstrap.min.css";

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
