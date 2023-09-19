import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <div className='pagina'>
        <Routes>
          <Route>
            path="/"
            element={}
          </Route>
        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

