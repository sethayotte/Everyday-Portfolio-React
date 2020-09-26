import React, { useState } from 'react';
import { Form, Input, Button, Select, InputNumber, Statistic } from 'antd';

const AddNewForm = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'vertical'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'vertical'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <>
      <Form className="add-new-form"
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
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
      <Statistic
                value={13073.12}
                valueStyle={{ color: "#0FBE00", fontFamily: 'Calistoga', fontSize: '48px' }}                
                prefix="$"
              />
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Add</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddNewForm;
