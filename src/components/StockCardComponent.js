import React from "react";
import { Statistic, Card, Row, Col, Layout } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const { Content } = Layout;

class StockCard extends React.Component {
  render() {
    return (
        <Layout className="site-layout">
            <Content style={{ margin: '0 16px' }}>
      <div className="site-statistic-demo-card">
        <Row gutter={14}>
          <Col span={12}>
            <Card>
              <Statistic
                title="[STOCK]"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix="$"
                suffix={<ArrowUpOutlined />}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="[STOCK]"
                value={90.23}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix="$"
                suffix={<ArrowDownOutlined />}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="[STOCK]"
                value={112.65}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix="$"
                suffix={<ArrowDownOutlined />}
              />
            </Card>
          </Col>
        </Row>
      </div>
      </Content>
      </Layout>
    );
  }
}

export { StockCard };
