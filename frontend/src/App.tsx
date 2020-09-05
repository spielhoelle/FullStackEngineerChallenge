import React, { useEffect } from "react";
import styled from 'styled-components/macro';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch, Redirect } from "react-router-dom";
import { GlobalStyle, tommyCupTheme, AppContainer } from './styledComponents'
import Login from './Login'
import StaticPage from './StaticPage'
import { AppProvider } from "./AppProvider";
import Nav from './Nav'
const history = createBrowserHistory();
export const Content = styled.section`
  background-color: ${tommyCupTheme.colors.main};
  height: 100%;
`;
const App: React.FC<any> = (props) => {
  useEffect(() => {
  }, []);
  return (
    <AppContainer>
      <AppProvider>
        <GlobalStyle />
        <Router history={history}>
          <Content>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/pages/:page" component={StaticPage} />
              <Redirect to="/" />
            </Switch>
            <Nav />
          </Content>
        </Router>
      </AppProvider>
    </AppContainer >


  );
};
export default App;