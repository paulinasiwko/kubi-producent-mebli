import React from 'react';
import NavigationMenu from "../components/main_navigation_menu";
import Footer from "../components/footer";
import HomePageCarousel from "../components/home_page_carousel";
export default function HomePage() {
  return (
    <>
      <NavigationMenu />
      <HomePageCarousel />
      <Footer />
    </>
  );
}

