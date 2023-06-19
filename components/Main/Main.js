import Btns from "./Btns";


const Main = ({todoList, setKey, status}) => {

    return (
        <div className="main">

            {
                todoList.map(item => {
                    return <div key={item.id} className="main-item">
                        <div className="main-item-left">
                        <button onClick={()=>{
                            setKey('completed', item.id)
                        }} className="circle-btn">{
                            item.completed ? '+' : ''
                        }</button>
                        <p>{item.text}</p>

                        </div>


                        <div className="main-item-right">
                            <Btns item={item} setKey={setKey} status={status}/>
                            
                            
                        </div>
                    </div>
                })
            }
 
    
 


        </div>
    );
}

export default Main;
