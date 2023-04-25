import { Fragment } from "react";
import Header from "@/components/header/Header";

export default function Layout(props: any) {
  return (
    <div className="bg-black">
      <Header />
      {props.children}
    </div>
  );
}
