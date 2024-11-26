import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';
import StoreContextProvider from './context/StoreContext';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './common/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StoreContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StoreContextProvider>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>
);
