import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { Async } from "react-async";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { getPaymentsWhere, getAmbassadorTable } from "../Helpers/getPayments";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#e6e7f0",
  padding: "5px",
  margin: "2.5px",
  textAlign: "center",
  borderRadius: "20px",
}));

const DonatorsGrid = ({ ambassador }) => {

  let [curAmbassador, setCurAmbassador] = useState(ambassador);

  return (
    <Container>
      <AppBar dir="rtl" position="static" style={{ backgroundColor: "#e6e7f0" }}>
        <Toolbar variant="dense">
          <Async promiseFn={getAmbassadorTable}>
            {({ data, err, isLoading }) => {
              if (isLoading) return "Loading...";
              if (err) return `Something went wrong: ${err.message}`;
              if (data) {
                console.log(data)
                return (
                  data.map((item) => (
                    <Button sx={{
                      backgroundColor: curAmbassador === item.id ? "#ffffff" : "#e6e7f0",
                      width: "200px",
                    }}
                      key={item.id}
                      onClick={() => setCurAmbassador(item.id)}>
                      <h1>{item.name}</h1>
                    </Button>
                  ))
                );
              }
            }}
          </Async>
        </Toolbar>
        <Async promiseFn={() => getPaymentsWhere(curAmbassador)}>
          {({ data, error, isLoading }) => {
            if (isLoading) return "Loading...";
            if (error) return `Something went wrong: ${error.message}`;
            if (data) {
              console.log(data)
              return (
                <div>
                  <h1 style={{ color: 'black', textAlign: "right", direction: "rtl" }}>{data.length}  תורמים סה"כ</h1>
                  <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 2,
                  }}>

                    {data
                      .sort((a, b) => b.amount_donated - a.amount_donated)
                      .map((payment, index) => (
                        <Item key={index}>
                          <div
                            style={{
                              textAlign: "right",
                              backgroundColor: "#e6e7f0",
                            }}
                          >
                            <span
                              style={{
                                textAlign: "right",
                                color: "#000",
                                fontSize: "2em",
                                fontFamily: "Assistant",
                              }}
                              className="hebrew-text"
                            >
                              {payment.name}
                            </span>
                            <span
                              style={{
                                textAlign: "right",
                                color: "#626262",
                                fontSize: "2em",
                                fontFamily: "Assistant",
                                float: "left"
                              }}
                              className="hebrew-text"
                            >
                              ₪{payment.amount_donated}
                            </span>
                            <hr style={{ width: "100%" }}></hr>
                            <br />
                            <span
                              style={{
                                color: "#000",
                                fontSize: "1.5em",
                                fontFamily: "Assistant",
                              }}
                              className="hebrew-text"
                            >
                              {payment.comments}
                            </span>
                            <br />
                            <br />
                          </div>
                        </Item>
                      ))}
                  </Box>
                </div>
              );
            }
          }}
        </Async>
      </AppBar>
    </Container>
  );
};

export default DonatorsGrid;
