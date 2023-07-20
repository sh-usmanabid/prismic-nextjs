import Header from "../components/global-components/header";
import Footer from "../components/global-components/footer";

export function Layout({ navigation, settings, children }) {
  return (
    <div>
      <Header navigation={navigation} settings={settings} />
      <main>{children}</main>
      <Footer settings={settings} />
    </div>
  );
}