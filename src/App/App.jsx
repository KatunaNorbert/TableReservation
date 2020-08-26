import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import React from "react";
import { Provider } from "react-redux";
import Dashboard from "../containers/Dashboard";
import store from '../store/store';
import "./App.css";
import theme from './theme';
import {Container} from '@material-ui/core';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Container className="app-container" maxWidth="md">
            <Router>
              <Route path="/" component={Dashboard}/>
            </Router>
          </Container>
        </div>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
