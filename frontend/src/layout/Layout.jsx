import React from "react";
import Header from "../components/Headers/Header";
import Router from "../routes/Router";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
