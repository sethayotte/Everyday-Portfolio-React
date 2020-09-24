import React from 'react';
import { PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import AddNewForm from './NewHoldingFormComponent';

class AddNew extends React.Component {
    render() {
        return (
            <React.Fragment>
        <div className="portfolio-header">
          <h1>Add New</h1>
          <Link to="/portfolio">
            <PlusCircleOutlined className="close-button" />
          </Link>
        </div>
        <div>
          <AddNewForm />
        </div>
      </React.Fragment>
        );
    }
}

export default AddNew;