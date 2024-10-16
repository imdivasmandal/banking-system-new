import React, {useState, useEffect} from 'react'
import axios from 'axios';

function History() {
  const [users, setUsers] = useState([]);
  const [lodaer, setLodaer] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const {data}  = await axios.get("http://localhost:4000/api/v2/message/transactions",{
          withCredentials: true
        });
        setUsers(data.data);
        console.log(data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  },[]);
  return (
    <div className='py-5'>
        {users.map((d) => (          
        <div className="card bg-gray-400 text-black mx-7 my-3" key={d._id}>
          <div className="card-body items-center text-center">
            <h2 className="card-title">"{d.userOne}" transfred {d.amount} Rs. to "{d.userTwo}"</h2>
            <p>  Time & Date : {(d.date)}  </p>
          </div>
        </div>
        ))}
    </div>
  )
}

export default History