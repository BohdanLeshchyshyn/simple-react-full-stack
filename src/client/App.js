import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';

const About = lazy(() => import('./About'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/about"
          element={(
            <Suspense fallback={<>Loading...</>}>
              <About />
            </Suspense>
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
