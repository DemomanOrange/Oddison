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

const App = () => {
  const [data, setData] = useState([]);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(data.filter(item => !item.deleted));
  }, [data]);

  const handleAddTodo = (text) => {
    if (text.trim() !== "") {
      setData(prevData => [...prevData, { text, deleted: false }]);
    }
  };

  return (
    <div className="todo">
      <Header data={data} setData={setData} handleAddTodo={handleAddTodo} />
      <Main todoList={todoList} />
      <Footer />
    </div>
  );
}

export default App;




























