import './app.css';
import React from 'react';
import NavigationMenu from "../components/main_navigation_menu";
import MainPageScreen from "../components/main_page_carousel";
export default function App() {
  return (
    <>
      <NavigationMenu />
      <MainPageScreen />
    </>
  );
}

