import React from 'react';
import {ButtonsWrap, CloseButton, PopupsWrapper, PopupWindow, YOrNButton} from "./index";
import {SecondaryFont} from "../styles";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {onClosePopup} from "../store/reducers/popup";
import {onRemove} from "../store/reducers/buyBasket";

const Popup = () => {
    const dispatch = useAppDispatch()
    const removeId = useAppSelector(state => state.popupReducer.removeById)
    const handleClose = () => {
        dispatch(onClosePopup())
    }

    const handleRemove = () => {
        dispatch(onRemove(removeId))
    }

    return (
        <PopupsWrapper>
            <PopupWindow>
                <ButtonsWrap isCenter={false}>
                    <CloseButton onClick={handleClose}>x</CloseButton>
                </ButtonsWrap>
                <div className="middle-text">
                    <SecondaryFont>
                        Do you really want to delete this product?
                    </SecondaryFont>
                </div>
                <ButtonsWrap isCenter={true}>
                    <YOrNButton onClick={() => {
                        handleRemove()
                        handleClose()
                    }
                    }>Yes</YOrNButton>
                    <YOrNButton onClick={handleClose}>No</YOrNButton>
                </ButtonsWrap>
            </PopupWindow>
        </PopupsWrapper>
    );
};

export default Popup;