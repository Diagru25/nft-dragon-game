import { Fragment } from "react";
import Header from "@/components/Header/Header";

export default function Layout(props: any) {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
}
