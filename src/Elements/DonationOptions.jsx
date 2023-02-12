import { TextField } from "@mui/material";
import React from "react";
import OptionButton from "../Components/OptionButton";
import '../assets/style/style.scss';

export function DonationOptions({
    buttonFunction,
    setChosenId,
    setOtherSum
}) {
    return <>
        <OptionButton id='120' enabled={buttonFunction} onClick={() => {
            setChosenId('120');
        }} />
        <OptionButton id='180' enabled={buttonFunction} onClick={() => {
            setChosenId('180');
        }} />
        <OptionButton id='360' enabled={buttonFunction} onClick={() => {
            setChosenId('360');
        }} />
        <OptionButton id='500' enabled={buttonFunction} onClick={() => {
            setChosenId('500');
        }} />
        <OptionButton id='1,000' enabled={buttonFunction} onClick={() => {
            setChosenId('1,000');
        }} />
        <OptionButton
            id='other'
            content={
                <TextField
                    sx={{
                        width: '90%',
                    }}
                    onClick={() => {
                        setChosenId('other');
                    }}
                    onChange={(e) => {
                        setOtherSum(e.target.value);
                    }}
                    inputProps={{
                        min: 0,
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                        style: {
                            textAlign: 'center',
                            fontFamily: 'Assistant',
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            color: '#1976d2',
                        }
                    }}
                    label="סכום אחר"
                    InputLabelProps={{
                        style: {
                            textAlign: 'center',
                            fontFamily: 'Assistant',
                            fontWeight: 'bold',
                            left: '50%',
                        }
                    }
                    }
                    variant="standard" />
            }
            enabled={buttonFunction} />
    </>;
}
