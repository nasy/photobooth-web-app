import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageViewComponent from './components/ImageViewComponent';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import ImageListComponent from './components/ImageListComponent';

function App() {
  let navigate = useNavigate();
  return(
    <div>
      <Routes>
        <Route path="/image/:id" element={<ImageViewComponent navigate={navigate}/>}>
        </Route>
        <Route path="/" element={<ImageListComponent navigate={navigate}/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
