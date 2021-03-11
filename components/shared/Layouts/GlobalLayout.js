import { Nav, Footer } from "components/shared";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default GlobalLayout;
