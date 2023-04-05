import CarForm from "./Components/CarForm"
import CarList from './Components/CarList'
import CarValue from './Components/CarValue'
import CarSearch from './Components/CarSearch'
function App() {

  return (
    <div className="container is-fluid">
  <CarForm/>
  <CarSearch />
  <CarList />
 
  <CarValue />  


    </div>

  )
}

export default App
