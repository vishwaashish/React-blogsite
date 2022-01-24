import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './Redux/store';
// import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from 'react-redux';
const queryClient = new QueryClient();
// store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

