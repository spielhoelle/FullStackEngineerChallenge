import React, { useEffect } from "react";
import styled from 'styled-components/macro';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch, Redirect } from "react-router-dom";
import { GlobalStyle, feedbackTheme, AppContainer } from './styledComponents'
import Login from './Login'
import StaticPage from './StaticPage'
import Employees from './Employees'
import Reviews from './Reviews'
import { AppProvider } from "./AppProvider";
import Nav from './Nav'
const history = createBrowserHistory();
export const Content = styled.section`
  background-color: white;
  height: 100%;
`;
const App: React.FC<any> = () => {
  return (
    <AppContainer>
      <AppProvider>
        <GlobalStyle />
        <Router history={history}>
          <Content>
            <Nav />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/pages/:page" component={StaticPage} />
              <Route exact path="/" component={Employees} />
              <Route exact path="/reviews" component={Reviews} />
              <Redirect to="/" />
            </Switch>
          </Content>
        </Router>
      </AppProvider>
    </AppContainer >


  );
};
export default App;
