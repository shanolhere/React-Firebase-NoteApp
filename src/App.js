import React, { useState, useEffect } from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Footer from "./components/Footer";

import { auth } from "./firebase";
import { Outlet, useNavigate } from "react-router-dom";
import AllNotes from "./components/AllNotes";
import Account from "./components/Account";
import Trash from "./components/Trash";
import Archive from "./components/Archive";
import AddNotes from "./components/AddNotes";
import EditNotes from "./components/EditNotes";

import { DataContextProvider } from "./context/DataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setEmail(user.email);
      } else setUserName("");
    });
  }, []);

  useEffect(() => {
    if (userName) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [userName]);

  return (
    <div className="App">
      <DataContextProvider>
        <Navbar userName={userName} />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />

          {/* <Route path="home" element={<NotesHome userName={userName} />} /> */}
          <Route path="home" element={<AllNotes />} />
          <Route path="archive" element={<Archive />} />
          <Route path="trash" element={<Trash />} />
          <Route
            path="account"
            element={<Account userName={userName} email={email} />}
          />
          <Route path="addNotes" element={<AddNotes />} />
          <Route path="edit/:ID" element={<EditNotes />} />
        </Routes>
        <Footer />
      </DataContextProvider>
    </div>
  );
}
