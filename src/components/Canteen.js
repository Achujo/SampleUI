import React, { useEffect, useState } from 'react'
import "./Canteen.css";

function Canteen() {
    const [item, setItem] = useState([]);
    const [count, setCount] = useState(0)

    const increment=()=>{
        setCount(count + 1)
    }
    const decrement = ()=>{
        setCount(count - 1)
    }

    useEffect(()=>{
        fetch("http://localhost:4321/products").then(response=> response.json())
        .then(data=> setItem(data))
        .catch(err => console.log(err))
            
        

    },[])
  return (
    <div>
        <h5 className='text-center'>09 wed 2023</h5>
<h1 className='text-center'>Canteen</h1>
            {item.map((list, index)=>(
                 <div key={index} className="row">
                    <div  className="col-4" id='tit'>
                        <img width={100} height={100} src= {list.img} alt="" />
                    </div>
                    
                    <div className="col-4" >
                        <h5>{list.title}</h5>
                    </div>

                    <div className="col-4" >
                        <button className='buttons' onClick={decrement}>-</button>
                        <input className='inputs border border-rounded' type="text" value={count} />
                        <button className='buttons' onClick={increment}>+</button>
                        
                    </div>

                


                 </div>

                
               
            ))}
    
    <div className="footer">
                        <label> Total <span> Rs : 30</span></label>
                    </div>
    </div>
  )
}

export default Canteen