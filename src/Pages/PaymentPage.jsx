import { DonationOptions } from '../Elements/DonationOptions.jsx';
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/style/style.scss';
import RequiredField from "../Components/RequiredField";
import RtlMui from "../Components/RtlMui";
import validateEmail from "../Helpers/validateEmail";
import OptionButton from "../Components/OptionButton";
import mobileCheck from "../Helpers/mobileCheck";

const PaymentPage = () => {
    document.dir = "rtl";
    let [email, setEmail] = useState();
    let [chosenId, setChosenId] = useState();
    const buttonFunction = (id) => { return id === chosenId; };
    return (
        <div>
            <Paper elevation={3}>
                <div className="separator high" style={{ display: 'table' }}>
                    <h1 className="title big main-color" style={{
                        display: 'table-cell',
                        verticalAlign: 'middle'
                    }}>דף תרומה</h1>
                </div>
            </Paper>
            <center>
                <RtlMui>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 2, width: '25ch' },
                            marginTop: "2.5%",
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <RequiredField text="שם פרטי" />
                        <RequiredField text="שם משפחה" />
                        <RequiredField
                            altHelperText="מספר טלפון לא תקין"
                            errorCheck={(curText) => {
                                return curText === undefined || curText.length != 10 || curText.slice(0, 2) !== "05";
                            }}
                            text="טלפון" />
                        <TextField
                            error={!validateEmail(email)}
                            onChange={
                                (e) => {
                                    setEmail(e.target.value);
                                }
                            }
                            helperText={!validateEmail(email) ? "כתובת מייל לא תקינה" : ""}
                            id="outlined-basic" label="כתובת מייל" variant="outlined" />
                    </Box>
                    <Box sx={{
                        width: "75%",
                        marginLeft: mobileCheck() ? "0%" : "25%",
                        gap: "2.5%",
                        display: 'grid',
                        gridTemplateColumns: mobileCheck() ? 'repeat(2,0.5fr)' : 'repeat(3, 0.25fr)',
                    }}>
                        <DonationOptions buttonFunction={buttonFunction} setChosenId={setChosenId} />
                    </Box>
                    
                </RtlMui>
            </center>
        </div >
    );
}

export default PaymentPage;