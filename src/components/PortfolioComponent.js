import React from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Holdings from './HoldingComponent';
import { Tooltip } from "antd";

class Portfolio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="portfolio-header">
          <h1>Portfolio</h1>
          <Link to="/add-new">
          <Tooltip placement="right" title="Add New">
            <PlusCircleFilled className="add-button" />
            </Tooltip>
          </Link>
        </div>
        <div>
            <Holdings />
        </div>
        <div>
            <Holdings />
        </div>
        <div>
            <Holdings />
        </div>
      </React.Fragment>
    );
  }
}

export default Portfolio;
