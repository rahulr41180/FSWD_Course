
import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = ({ children, title, description, keywords, author }) => {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />

          <div>
            <meta name="description" content={ description } />
            <meta name="keywords" content={ keywords } />
            <meta name="author" content={ author } />
          </div>
          <title>{ title }</title>
        </Helmet>
        <Header />
        <main style={{

          border : "1px solid yellow",
          minHeight : "70vh",
        }}>
          <ToastContainer />
          { children }
        </main>
        <Footer />
      </div>
    )
}

// Adding default props in the component

// functionName.defaultProps = {

// }

Layout.defaultProps = {
  title : "rR e-Com",
  description : "e-Commerce store for all items",
  keywords : "Clothes, Shirt, T-Shirt, Paints, Jeans",
  author : "rRathor"
}