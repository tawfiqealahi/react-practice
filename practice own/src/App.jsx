
import './App.css'

function App() {
 

  return (
    <div>
      <button>my buttonnpm run dev
      </button>
      <br />
      <NewC></NewC>
    </div>
  )
}

function NewC(){
  const age = 30;
  const objetTest ={
    name: "razu",
    age: 20,
    education: 'PSTU'
  }
  return(
    <div>
      <h1>my name is tawfiq</h1>
      <p>i am {age} years old.</p>
      <br />
      <h2>another</h2>
      <br />
    <p>my friend {objetTest.name} is also a student</p>
    he is {objetTest.age} 
    </div>
  )

}



export default App
