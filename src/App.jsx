import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className='container'>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
