import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Fragment } from "react";
import { ThemeContextProvider } from "../../context/app";

export default function Layout(props: any) {
  return (
    <ThemeContextProvider>
      <Fragment>
        <Header />
        <Fragment>{props.children}</Fragment>
        <Footer />
      </Fragment>
    </ThemeContextProvider>
  );
}
