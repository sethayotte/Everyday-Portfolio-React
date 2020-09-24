import React from "react";
import { StockCard } from "./StockCardComponent";

class Today extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Today</h1>
        <StockCard />
      </React.Fragment>
    );
  }
}

export default Today;
