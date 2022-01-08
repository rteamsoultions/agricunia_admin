import './App.scss';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import Routes from './router/Routes';
import store from "./redux/store";

function App() {
  return (

    <Provider store={store}>
      <HashRouter>
        <LastLocationProvider>
          <Routes />
        </LastLocationProvider>
      </HashRouter>
    </Provider>
  );
}

export default App;
