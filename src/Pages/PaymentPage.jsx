import { DonationOptions } from '../Elements/DonationOptions.jsx';
import { Box, Button, Checkbox, FormControlLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField } from "@mui/material";
import { useState } from "react";
import '../assets/style/style.scss';
import RequiredField from "../Components/RequiredField";
import RtlMui from "../Components/RtlMui";
import validateEmail from "../Helpers/validateEmail";
import mobileCheck from "../Helpers/mobileCheck";
import { Link } from 'react-router-dom';



const PaymentPage = () => {
    document.dir = "rtl";
    let [rules, setRules] = useState(false);
    let [email, setEmail] = useState();
    let [firstName, setFirstName] = useState();
    let [lastName, setLastName] = useState();
    let [phone, setPhone] = useState();
    let [otherSum, setOtherSum] = useState();
    let [chosenId, setChosenId] = useState();
    let [hok, setHok] = useState(false);

    const checkRequiredFields = () => {
        if (firstName === undefined || lastName === undefined || phone === undefined) {
            alert("אנא מלא את כל השדות הדרושים");
            return false;
        }
        if (phone.length != 10 || phone.slice(0, 2) !== "05") {
            alert("מספר טלפון לא תקין");
            return false;
        }
        if (!validateEmail(email)) {
            alert("כתובת מייל לא תקינה");
            return false;
        }
        if (chosenId === undefined) {
            alert("אנא בחר סכום");
            return false;
        }
        if (chosenId === "other" && (otherSum === undefined || otherSum === "")) {
            alert("אנא הכנס סכום");
            return false;
        }
        if (!rules) {
            alert("אנא אשר את תנאי השימוש");
            return false;
        }
        return true;
    }
    const sendToPayment = async () => {
        if (!checkRequiredFields())
            return;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: firstName + " " + lastName,
                email: email,
                phone: phone,
                sum: chosenId == 'other' ? otherSum : chosenId,
                pageCode: hok ? "bab4ef22513d" : "86610ee12a4e",
                description: "test",
                t: 14
            })
        };
        let resp = await fetch('https://us-central1-tonal-run-357512.cloudfunctions.net/createPaymentProcess', options);
        let data = await resp.json();
        window
            .open(data, "_self")
            .focus();
    }

    const sendToPaymentBit = async () => {
        if (!checkRequiredFields())
            return;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: firstName + " " + lastName,
                email: email,
                phone: phone,
                sum: chosenId == 'other' ? otherSum : chosenId,
                pageCode: "b149a926d84b",
                description: "test",
                t: 14
            })
        };
        let resp = await fetch('https://us-central1-tonal-run-357512.cloudfunctions.net/createPaymentProcess', options);
        let data = await resp.json();
        window
            .open(data, "_self")
            .focus();
    }

    const buttonFunction = (id) => { return id === chosenId; };
    return (
        <>
            <Paper elevation={3}>
                <div className="app-bar">
                    <div className="flex-box" style={{ textAlign: "center" }}>
                        <h1 style={{ color: '#d58f28' }} className="title big hebrew-text">דף תשלום מאובטח</h1>
                    </div>
                    <img
                        style={{
                            height: "100px",
                            float: "left",
                            marginLeft: "2%"
                        }}
                        src={require("./../assets/images/logo-main.png")}
                        alt="TOM logo"
                    />
                </div>
            </Paper >
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
                        <RequiredField onChange={setFirstName} text="שם פרטי" />
                        <RequiredField onChange={setLastName} text="שם משפחה" />
                        <RequiredField
                            onChange={setPhone}
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
                        <DonationOptions setOtherSum={setOtherSum} buttonFunction={buttonFunction} setChosenId={setChosenId} />
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="one time"
                            name="radio-buttons-group"
                            row
                            style={{ marginTop: "2.5%", marginBottom: "2.5%" }}

                        >
                            <FormControlLabel value="one time" control={<Radio />} label="תשלום חד פעמי"
                                checked={!hok}
                                onChange={e => setHok(!e.target.checked)} />
                            <>
                                <FormControlLabel value="every month" control={<Radio />} label="הוראת קבע"
                                    checked={hok}
                                    onChange={e => setHok(e.target.checked)} />
                            </>
                        </RadioGroup>
                        <FormControlLabel control={<Checkbox onChange={e => setRules(e.target.checked)} />} label={<span>
                            אני מאשר/ת את התנאים
                            <Link to={'/takanon'}>
                                <a style={{ color: "blue" }}>והתקנון</a>
                            </Link>
                        </span>} />
                    </Box>
                    <Box>
                        <Button variant="contained"
                            onClick={sendToPayment}
                            style={{
                                backgroundColor: "blue",
                                color: "white",
                                width: "10%",
                                minWidth: "200px",
                                minHeight: "100px",
                                fontSize: "1.5em",
                                borderRadius: "10px",
                                marginBottom: "5%",
                                fontWeight: "bold",
                                fontFamily: "Assistant",
                                float: mobileCheck() ? "unset" : "left",
                                marginLeft: mobileCheck() ? "0%" : "30%",
                            }}
                        >לתשלום באשראי</Button>
                        <Button variant="contained"
                            onClick={sendToPaymentBit}
                            style={{
                                background: "linear-gradient(#2b5586, #3ebec0)",
                                color: "white",
                                width: "10%",
                                minWidth: "200px",
                                minHeight: "100px",
                                fontSize: "1.5em",
                                borderRadius: "10px",
                                marginBottom: "10%",
                                fontWeight: "bold",
                                fontFamily: "Assistant",
                                float: mobileCheck() ? "unset" : "left",
                                marginLeft: mobileCheck() ? "0%" : "7%"
                            }}>
                            <img
                                style={{
                                    height: "50px",
                                    float: "left",
                                    marginLeft: "2%"
                                }}
                                src={require("./../assets/images/bit.png")}
                                alt="לתרומה בביט"
                            />
                        </Button>
                    </Box>
                </RtlMui>
            </center>
        </>
    );
}

export default PaymentPage;