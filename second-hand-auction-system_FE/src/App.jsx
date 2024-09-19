import React from "react";
//import Routes from "./Routes";
//import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomePage from "pages/HomePage";
import Product from "pages/Product";
import Auction from "pages/Auction";
import Login from "pages/Login";
import Register from "pages/Register";
import Layout from "./components/layout";
import CustomerTransactionHistoryPagePage from "pages/CustomerTransactionHistoryPage";
import TestAPI from "pages/TestAPI.jsx";

// function App() {
//   return (
//     <Router>
//       <Routes />
//     </Router>
//   );
// }

// export default App;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="HomePage" index element={<HomePage />} />
        <Route path="Product" index element={<Product />} />
        <Route path="Auction" index element={<Auction />} />
        <Route path="Login" index element={<Login />} />
        <Route path="Register" index element={<Register />} />
        <Route path="HistoryPage" index element={<CustomerTransactionHistoryPagePage />} />
        <Route path="Test" index element={<TestAPI />} />
      </Route>
    </Routes>
  );
}

export default App;
