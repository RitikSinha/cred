import Head from "next/head";
import Image from "next/image";

import AppRating from "../components/AppRating";

import BrandsLove from "../components/BrandsLove";
import Footer from "../components/common/footer";
import Header from "../components/common/Header";
import CredExperience from "../components/CredExperience";
import CredSecurity from "../components/CredSecurity";
import CredStory from "../components/CredStory";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import { MobileScroll } from "../components/MobileScroll/";
import ProductShowcase from "../components/ProductShowcase";
import WindowPeak from "../components/WindowPeak";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cred Clone Made by Ritik Sinha</title>
        <link rel="icon" href="https://cred.club/assets/icons/logo.png" />
      </Head>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer />
    </>
  );
}
