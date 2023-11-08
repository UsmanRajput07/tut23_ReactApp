import React from "react";
import Header from "./Header";
import Footer from "../Components/Footer";
import "../App.css";
import Aside from "./Aside";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <table border="1">
          <tr>
            <td>
              <Aside>left</Aside>
            </td>
            <td>
              <Outlet />
            </td>
            <td>
              <Aside>right</Aside>
            </td>
          </tr>
        </table>
      </main>
      <Footer />
    </>
  );
}
