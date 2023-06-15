

const Main = ({todoList}) => {

    return (
        <div className="main">

            {
                todoList.map(item => {
                    return <div key={item.id} className="main-item">
                        <button className="circle-btn"></button>
                        <p>{item.text}</p>
                    </div>
                })
            }
 
    



        </div>
    );
}

export default Main;
