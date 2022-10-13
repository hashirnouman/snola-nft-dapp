import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Demo from "../components/Demo";
import styles from "../styles/Home.module.css";
import HomePage from "../views/HomePage";

const Home: NextPage = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default Home;
