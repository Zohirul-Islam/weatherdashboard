
import Header from './components/header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import WeatherBoard from './components/weatherBoard/WeatherBoard';
import { WeatherProvider ,FavouriteProvider} from './provider';
function App() {

  return (
    <WeatherProvider>
      <FavouriteProvider>
    <div>
      <Header/>
      <WeatherBoard/>
    </div>
    </FavouriteProvider>
    </WeatherProvider>
  )
}

export default App
