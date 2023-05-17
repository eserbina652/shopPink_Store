import React, {useEffect} from 'react';
import {ThemeProvider} from "styled-components";
import {onBlueMode} from "./store/reducers/theme";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {themeBlue, themePink} from "./themes";

const App = () => {
  const theme = useAppSelector(state => state.themeReducer.color)
  const dispatch = useAppDispatch()
  const getInitialTheme = () => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      dispatch(onBlueMode())
    }
  }


  useEffect(() => {
    getInitialTheme()
  }, [])
  return (
      <ThemeProvider theme={theme?themeBlue:themePink}>

      </ThemeProvider>
  );
};

export default App;