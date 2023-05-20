import React, {useEffect} from 'react';
import {ThemeProvider} from "styled-components";
import {themeBlue, themePink} from "./themes";
import Home from "./screens/Home";
import AuthForm from "./screens/authorization/AuthForm";
import {Route, Routes, useNavigate} from "react-router-dom";
import {AppGridBox, Header} from "./styles";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import Navbar from "./components/navbar/Navbar";
import {onBlueMode} from "./store/reducers/theme";
import {onLogin} from "./store/reducers/authorization";
import ProductsList from "./components/products/productPage/ProductsList";
import ProductDescription from "./components/products/descriptionPage/ProductDescription";
import BasketList from "./screens/buyBasket/BasketList";

const App = () => {
  const theme = useAppSelector(state => state.themeReducer.color)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const getInitialTheme = () => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      dispatch(onBlueMode())
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('userId')
    getInitialTheme()
    if (user) {
      dispatch(onLogin(user))
    } else {
      navigate('/')
    }
  }, [])
  return (
      <ThemeProvider theme={theme ? themeBlue : themePink}>
        <AppGridBox style={{minHeight: '100svh'}}>
          <Header>
            <Navbar/>
          </Header>
          <Routes>
            <Route path='/' element={<AuthForm/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/products' element={<ProductsList/>}/>
            <Route path="/productDescription" element={<ProductDescription/>}/>
            <Route path='/buyBasket' element={<BasketList/>}/>
          </Routes>
        </AppGridBox>
      </ThemeProvider>
  );
};

export default App;