import React from 'react';
import { Form, Input, Button, Select, InputNumber } from 'antd';

const AddNewForm = () => {
  return (
    <React.Fragment>
      <Form>
        <h5>Position Type</h5>
        <Select defaultValue="Select One" className="form-field-dropdown" size="large" bordered={false}>
      <Select.Option value="stock">Stock</Select.Option>
      <Select.Option value="etf">ETF</Select.Option>
      <Select.Option value="mutual-fund">Mutual Fund</Select.Option>
      <Select.Option value="other-asset">Other Asset</Select.Option>
    </Select>
        
    <h5>Name/Symbol</h5>
          <Input size="large" className="form-field" placeholder="AAPL" />

        <h5>Size of Holding</h5>
          <InputNumber size="large" className="form-field" placeholder="5" min={1} max={1000} />
        <span className="ant-form-text"> shares</span>
      <h3>Estimated Value</h3>
      <h2>$3,467.04</h2>
        
          <Button className="form-button" type="primary">Add</Button>
  
      </Form>
    </React.Fragment>
  );
};

export default AddNewForm;
