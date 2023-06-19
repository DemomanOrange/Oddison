// import Header from "./components/Headers/Header";
// import Main from "./components/Main/Main";
// import Footer from "./components/Footer/Footer";
// import './style.css';
// import { useState, useEffect } from "react";
// import React from "react";

// const App = () => {
//     const [data, setData]=useState([])
//     const [todoList, setTodoList]=useState([])

// useEffect(()=>{
// setTodoList(data.filter(item =>{
//     return !item.deleted
// }))
// }, [data])

//     return (
//         <div className="todo">
            
// <Header data={data} setData={setData}/>
// <Main todoList={todoList} />
// <Footer />


//         </div>
//     );
// }

// export default App;


import Header from "./components/Headers/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import './style.css';
import { useState, useEffect } from "react";
import React from "react";


function App() {
  const [data, setData] =useState([])
  const [todoList, setTodoList] = useState([])
  const [status, setStatus] = useState('all');
  const setKey = (key, id) =>{
    setData(data.map( item =>{
      if(item.id === id){
        return {
          ...item,
          [key]: !item[key]
        }
      } else{
        return item
      }  
    }))
  }


const handleAddTodo = (text) => {
  if (text.trim() !== "") {
    setData(prevData => [...prevData, { text, deleted: false }]);
  }
};




  useEffect(()=>{
setTodoList(data.filter(item =>{
    return !item.deleted
}))
switch(status){
  case 'completed':{
     
      return setTodoList(data.filter(item=>{
        return !item.deleted && item.completed
      }))
    }

    case 'active':{
      return setTodoList(data.filter(item=>{
        return !item.deleted && !item.completed
      }))
    }
    
    case 'cart':{
      return setTodoList(data.filter(item=>{
        return item.deleted 
      }))
    }

    default :{
      setTodoList(data.filter(item =>{
        return !item.deleted
      }))
    }
  
}
}, [data, status])

    return (
    <div className="todo">
      <Header data={data} setData={setData} handleAddTodo={handleAddTodo} />
      <Main status={status} setKey={setKey} todoList={todoList} />
      <Footer status={status} setStatus={setStatus } todoList={todoList}/>
    </div>
  );
}

export default App;




























