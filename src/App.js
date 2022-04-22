import { BrowserRouter, Routes, Route   } from 'react-router-dom';
import { useState } from 'react';
import Netflix from "./netflix";
import Login from './login';
import Browse from './browse';

function App() {
  const [user, setUser] = useState(null)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Netflix />} />
          <Route path='login' element={<Login setUser={setUser}/>}/>
          <Route path='home-page' element={<Browse user={user}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
