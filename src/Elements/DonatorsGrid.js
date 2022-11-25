import { Grid, Container } from "@mui/material";
import { Async } from "react-async";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import getPayments from "../Helpers/getPayments";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f1c232",
  padding: "5px",
  margin: "2.5px",
  textAlign: "center",
  borderRadius: "20px",
}));

const DonatorsGrid = ({ donators }) => {
  return (
    <Container>
      <Async promiseFn={getPayments}>
        {({ data, error, isLoading }) => {
          if (isLoading) return "Loading...";
          if (error) return `Something went wrong: ${error.message}`;
          if (data)
            return (
              <Grid
                container
                justifyContent="flex-end"
                spacing={{ xs: 4, md: 6 }}
              >
                {data.map((payment, index) => (
                  <Grid item xs={2} sm={4} md={3} key={index}>
                    <Item>
                      <div
                        style={{
                          textAlign: "right",
                          backgroundColor: "#f1c232",
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
                        <hr style={{ width: "100%" }}></hr>
                        <span
                          style={{
                            textAlign: "right",
                            color: "#626262",
                            fontSize: "2em",
                            fontFamily: "Assistant",
                          }}
                          className="hebrew-text"
                        >
                          ₪{payment.amount_donated}
                        </span>
                        <br />
                        <br />
                        <span
                          style={{
                            textAlign: "right",
                            color: "#000",
                            fontSize: "1.5em",
                            fontFamily: "Assistant",
                          }}
                          className="hebrew-text"
                        >
                          {payment.comments}
                        </span>
                      </div>
                    </Item>
                  </Grid>
                ))}
              </Grid>
            );
          return null;
        }}
      </Async>
    </Container>
  );
};

export default DonatorsGrid;
