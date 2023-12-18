import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/App'
// import { Provider } from 'react-redux';
// import store from './components/store';
import NewApp from './NewApp';
import TodoProvider from './components/context/TodoProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoProvider>
       <NewApp />
    </TodoProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <TodoProvider>
//     <NewApp/>
//   </TodoProvider>, document.getElementById("root")
// )


// ReactDOM.render(<App/>, document.getElementById("root"));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//        <App />
//     </Provider>
//   </React.StrictMode>
// );
