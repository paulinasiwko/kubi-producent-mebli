import React from 'react';
import NavigationMenu from "../components/main_navigation_menu";
import HomePageScreen from "../components/home_page_carousel";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <>
      <NavigationMenu />
      <HomePageScreen />
      <Footer />
    </>
  );
}

