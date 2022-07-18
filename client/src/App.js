import React from 'react';
import Home from './container/Home';
import Success from './components/Success';
import { Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
