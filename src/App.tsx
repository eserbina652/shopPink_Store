import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { themeBlue, themePink } from "./themes";
import Home from "./screens/Home";
import AuthForm from "./screens/authorization/AuthForm";
import { Route, Routes } from "react-router-dom";
import { AppGridBox, Header } from "./styles";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import Navbar from "./components/navbar/Navbar";
import { onBlueMode } from "./store/reducers/theme";
import { onLogin } from "./store/reducers/authorization";
import ProductsList from "./screens/products/ProductsList";
import Profile from "./screens/profile/Profile";
import BasketList from "./screens/buyBasket/BasketList";
import Popup from "./popups/Popup";
import ProductDescription from "./screens/productInfo/ProductDescription";
import OtherProfile from "./screens/otherUser/OtherProfile";
import useScreenSize from "./hooks/useScreenSize";
import BurgerMenu from "./components/buttons/burgerMenu/BurgerMenu";

const App = () => {
  const theme = useAppSelector((state) => state.themeReducer.color);
  const isOpenPopup = useAppSelector((state) => state.popupReducer.isOpen);
  const dispatch = useAppDispatch();
  const isMobile = useScreenSize();

  const getInitialTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      dispatch(onBlueMode());
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("userId");
    getInitialTheme();
    if (user) {
      dispatch(onLogin(user));
    }
    // else {
    //   navigate('/');
    // }
  }, []);
  return (
    <ThemeProvider theme={theme ? themeBlue : themePink}>
      <AppGridBox style={{ minHeight: "100svh" }} tempRow={"0.2fr 0fr"}>
        {/*@ts-ignore*/}
        {isMobile ? (
          <BurgerMenu />
        ) : (
          <Header>
            <Navbar />
          </Header>
        )}
        {isOpenPopup && <Popup />}
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/productDescription" element={<ProductDescription />} />
          <Route path="/buyBasket" element={<BasketList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/userDescription" element={<OtherProfile />} />
        </Routes>
      </AppGridBox>
    </ThemeProvider>
  );
};

export default App;
