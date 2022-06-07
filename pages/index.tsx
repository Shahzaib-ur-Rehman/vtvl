import type { NextPage } from "next";
import Head from "next/head";
import Audience from "../components/Audience/Audience";
import Header from "../components/Header/Header";
import MainSection from "../components/section1/MainSection";
import StreamLineTokens from "../components/StreamLineTokens/StreamLineTokens";
import VtvlFeatures from "../components/VtvlFeatures/VtvlFeatures";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <Header sections={[{ title: "about", url: "/about" }]} title="vtvl" />
      </Head>

      <main className={styles.main}>
        <section>
          <MainSection />
          <StreamLineTokens />
          <VtvlFeatures />
          <Audience />
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
