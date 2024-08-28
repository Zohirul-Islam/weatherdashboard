import React from 'react'
import Header from './components/header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import WeatherBoard from './components/weatherBoard/WeatherBoard';

function App() {
  return (
    <div>
      <Header/>
      <WeatherBoard/>
    </div>
  )
}

export default App
