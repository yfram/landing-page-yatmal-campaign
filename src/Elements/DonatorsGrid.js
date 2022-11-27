import { Box, Container } from "@mui/material";
import { Async } from "react-async";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import getPayments from "../Helpers/getPayments";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#e6e7f0",
  padding: "5px",
  margin: "2.5px",
  textAlign: "center",
  borderRadius: "20px",
}));

const DonatorsGrid = () => {
  return (
    <Container>
      <Async promiseFn={getPayments}>
        {({ data, error, isLoading }) => {
          if (isLoading) return "Loading...";
          if (error) return `Something went wrong: ${error.message}`;
          if (data)
            return (
              <div>
                <h1 style={{ textAlign: "right", direction: "rtl" }}>{data.length}  תורמים</h1>
                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 2,
                }}>

                  {data.map((payment) => (
                    <Item>
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
          return null;
        }}
      </Async>
    </Container>
  );
};

export default DonatorsGrid;
