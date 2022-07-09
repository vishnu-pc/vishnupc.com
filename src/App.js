import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { LandingTypewriteEffect } from './components';
import { LandingBackgroundEffect } from './components';
import { LandingContact } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<>< LandingBackgroundEffect /><LandingTypewriteEffect /><LandingContact /></>} />
          {/* <Route path='/documents' element={<><DocumentsPage /></>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
