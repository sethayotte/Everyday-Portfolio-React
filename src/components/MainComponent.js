import React from "react";
import { NavMenu } from "./NavComponent";
import Today from "./TodayComponent";
import Portfolio from "./PortfolioComponent";
import Profile from './ProfileComponent';
import AddNew from './AddNewComponent';
import { Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";

const { Content, Footer, Sider } = Layout;

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
            <Content style={{ margin: "25px 15px" }}>
              <Switch>
                <Route path="/today" component={TodayView} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/add-new" component={AddNew} />
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
