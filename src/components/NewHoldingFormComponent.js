import React, { useState } from 'react';
import { Form, Input, Button, Select, InputNumber, Statistic } from 'antd';

const AddNewForm = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
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
    formLayout === 'horizontal'
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
        <Form.Item label="Position Type">
          <Select placeholder="Select One">
            <Select.Option value="stock">Stock</Select.Option>
            <Select.Option value="etf">ETF</Select.Option>
            <Select.Option value="mutual-fund">Mutual Fund</Select.Option>
            <Select.Option value="other asset">Other Asset</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Name/Symbol">
          <Input placeholder="AAPL" />
        </Form.Item>
        <Form.Item label="Size of Holding">
        <Form.Item name="input-number" noStyle>
          <InputNumber placeholder="5" min={1} max={10} />
        </Form.Item>
        <span className="ant-form-text"> machines</span>
      </Form.Item>
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
