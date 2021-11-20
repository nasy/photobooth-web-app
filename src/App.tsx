import {
  Route, Routes, useNavigate
} from "react-router-dom";
import './App.css';
import ImageListComponent from './components/ImageListComponent';
import ImageViewComponent from './components/ImageViewComponent';

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
