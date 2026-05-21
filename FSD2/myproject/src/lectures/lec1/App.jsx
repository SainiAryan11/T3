import './App.css'
import App2 from './App2.jsx' 
import Fruits from './Fruits.jsx'
import img1 from '../../assets/image1.jpg' 
import Task from './Task.jsx'

function App() {
  var name = "Aryan";  
  return (
    <>
      <h1>Hello {name}</h1>
      {/* this is comment */}
      <App2 />
      <Fruits />
      {/* To use images from the public folder , import not required */}
      <img src="image2.jpg" height={300} width={300} alt="" />
      {/* To use images from the assets folder , import is required */}
      <img src={img1} height={300} width={300} alt="" />
      <Task />
    </>
  )
}

export default App
