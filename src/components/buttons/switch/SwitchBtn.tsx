import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {onBlueMode, onPinkMode} from "../../../store/reducers/theme";
import {CheckBoxText, Form, Label} from "./index";

const SwitchBtn = () => {
  const mode = useAppSelector(state => state.themeReducer.color);
  const dispatch = useAppDispatch();
  const handleChangeTheme = () => {
    if (mode) {
      dispatch(onPinkMode());
      localStorage.removeItem('theme');
      return;
    } else if (!mode) {
      dispatch(onBlueMode());
      localStorage.setItem('theme', 'true');
      return;
    }
    return;
  };

  return (
    <Form action="/">
      <Label title='switch'>
        <input onClick={handleChangeTheme} type="checkbox"/>
        <CheckBoxText className='checkbox__text'></CheckBoxText>
      </Label>
    </Form>
  );
};

export default SwitchBtn;
