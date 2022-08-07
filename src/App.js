import './App.css';
import NavBar from './components/NavBar';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import MoviesList from './components/MoviesList';
import Search from './components/Search';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact index element={<MoviesList />} />
          <Route exact path="/" element={<MoviesList />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
