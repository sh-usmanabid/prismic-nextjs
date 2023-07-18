import Header from "../components/global-components/header";
import Footer from "../components/global-components/footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}