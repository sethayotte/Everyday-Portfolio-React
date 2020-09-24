import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import {
  DollarCircleFilled,
  BankFilled,
  SettingFilled,
} from "@ant-design/icons";
import logo from "../shared/portfolio-coin.png";

const { Sider, Content } = Layout;

class NavMenu extends React.Component {
  state = {
    collapsed: true,
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
          <div className="logo">
            <Link to="/today">
              <img src={logo} alt="ep-logo" height="30" />
            </Link>
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<DollarCircleFilled />}>
              <Link to="/today">Today</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<BankFilled />}>
              <Link to="/portfolio">Portfolio</Link>
            </Menu.Item>

            <Menu.Item key="3" icon={<SettingFilled />}>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
           <div></div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export { NavMenu };
