import React from "react";
import { NavMenu } from "./NavComponent";
import Today from "./TodayComponent";
import Portfolio from "./PortfolioComponent";
import Profile from './ProfileComponent';
import AddNew from './AddNewComponent';
// import finnhub from 'finnhub';
import { Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";

const { Content, Sider } = Layout;

const finnhub = require('finnhub');
 
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "btmgh5v48v6uocf2o8mg" // Replace this
const finnhubClient = new finnhub.DefaultApi()


class Main extends React.Component {


componentDidMount() {
  finnhubClient.quote("AAPL", (error, data, response) => {
    console.log(data)
});

// finnhubClient.stockSymbols("US", (error, data, response) => {
//   console.log(data)
// });

// finnhubClient.companyNews("AAPL", "2020-01-01", "2020-05-01", (error, data, response) => {
//   if (error) {
//       console.error(error);
//   } else {
//       console.log(data)
//   }
// });
}

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
