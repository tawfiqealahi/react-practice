
import './App.css'
import Counter from './Counter';
import CounterNew from './CounterNew';
import Users from './Users';


function App() {
  function handleClick(){
    alert('BUTTON CLICKED');
  }
  const clickMe=(num)=>{
    alert(num*2);
  }

  return (
   <>
   <br />
<Users>

</Users>

  <br /><br />  
  <button onClick={handleClick} > click me</button> 
  <button onClick={()=>{clickMe(5)}}> yes</button> <br />
 <Counter></Counter> <br />
 <CounterNew></CounterNew>
   </>
  )
}



export default App
