import React from "react";
import { NavMenu } from "./NavComponent";
import Today from "./TodayComponent";
import Portfolio from "./PortfolioComponent";
import Profile from './ProfileComponent';
import { Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

class Main extends React.Component {

  render() {

    const TodayView = () => {
        return (
            <Today />
        );
    }

    return (
      <React.Fragment>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider>
            <NavMenu />
          </Sider>
          <Layout className="site-layout">
            <Content style={{ margin: "10px 16px" }}>
              <Switch>
                <Route path="/today" component={TodayView} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/profile" component={Profile} />
                <Redirect to="/" />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Main;
