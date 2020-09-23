import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import {
  DollarCircleFilled,
  BankFilled,
  SettingFilled,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

class NavMenu extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<DollarCircleFilled />}>
              Today
            </Menu.Item>
            <Menu.Item key="2" icon={<BankFilled />}>
              Portfolio
            </Menu.Item>
            <Menu.Item key="3" icon={<SettingFilled />}>
              Profile
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Today View
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Everyday Portfolio</Footer>
        </Layout>
      </Layout>
    );
  }
}

export { NavMenu };
