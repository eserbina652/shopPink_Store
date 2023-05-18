import React from 'react';
import {ErrorFont} from "../../styles";

interface IError {
    error: string
}

const Error = ({error}: IError) => {
    return (
        <div>
            <ErrorFont>{error}</ErrorFont>
        </div>
    );
};

export default Error;