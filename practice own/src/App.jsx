
import './App.css'

function App() {
  function handleClick(){
    alert('BUTTON CLICKED');
  }

  return (
   <>
  <button onClick={handleClick} > click me</button>
   </>
  )
}



export default App
