import './App.css'
// import Home from './components/Home'
// import User from './User'
import HomeContainer from './containers/HomeContainer'

function App () {
  return (
    <div className='App'>
      {/* <h1>App Component</h1> */}
      {/* <User data={{ name: 'John Doe', age: 27 }} /> */}
      <HomeContainer />
    </div>
  )
}

export default App
