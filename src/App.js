import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Onboarding from './layouts/Onboarding'
import { Provider } from 'react-redux';
import store from '../src/redux/store'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Onboarding />} />
          </Routes>
        </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
