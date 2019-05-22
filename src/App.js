import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './styles/global';
import { Wrapper } from './styles/components';
import Header from './components/Header';
import Routes from './routes';
import store from './store';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <GlobalStyle />
          <Wrapper>
            <Header />
            <Routes />
          </Wrapper>
        </Fragment>
      </BrowserRouter>
      <ToastContainer autoclose={5000} />
    </Provider>
  );
}

export default App;
