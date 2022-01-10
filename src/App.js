import './App.scss';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import Routes from './router/Routes';
import store from "./redux/store";
import { ToastContainer } from 'react-toastify';

function App() {
  return (

    <Provider store={store}>
      <HashRouter>
        <LastLocationProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover theme='colored' />
          <Routes />
        </LastLocationProvider>
      </HashRouter>
    </Provider>
  );
}

export default App;
