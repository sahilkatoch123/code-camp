import './App.css';
import Best from './components/Best';
// import Navbar from './components/Navbar';
// import Card from './components/Card';
import Data from './Data';
import Header from './components/Header';
// import Form from './components/Form';
// import Joke from './components/Joke';
// import Msg from './components/Msg';
// import Formal from './components/Formal';
import Login from './components/Login';

function App() {
  // const cards = Data.map((item)=>{
  //   return <Card
  //   key={item.id}
  //  {...item}
  //   />
  // })

  return (
    <>
      {/* 

<div className="flex px-8 space-x-2">
{cards}

</div> */}
      <Header />
      {/* <Navbar /> */}
      {/* <Form/> */}
      {/* <Joke/>
      <Msg/>
      
      {/* <Login /> */}
      {/* <Formal /> */}
      <Best/>
    </>
  );
}

export default App;
