import { Paper, Button } from "@mui/material";
import { useState } from "react";
import '../assets/style/style.scss';

const OptionButton = ({ id, enabled, onClick, content }) => {
    return (
        <Paper
            sx={{
                marginTop: "2.5%",
                maxWidth: "150px",
                minHeight: "70px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                backgroundColor: enabled(id) ? "#d58f28" : "white",
            }}
            elevation={3} >
            {
                content ?
                    content :
                    <Button
                        onClick={onClick}
                        sx={{ width: '100%', height: '100%' }}>
                        <h1>{id}</h1>
                    </Button>
            }
        </Paper >
    );
}

export default OptionButton;