import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import axios from 'axios';

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [lodaer, setLodaer] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v2/user/allusers",{
          withCredentials: true
        });
        setUsers(data.users);
        setLodaer(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  },[]);

  return (
  <div className=''>
    {!lodaer ? (
        <div className=''>
          {users.map((user) => (
            <div className="card bg-slate-600 text-white my-4 mx-7 px-40" key={user._id}>
            <div className="card-body mx-10">
                <div className='content-center'>
                  <h2 className="card-title justify-center">{user.firstName} {user.lastName}</h2>
                  <div className='content-center flex justify-center' >DOB : {(user.DOB).slice(0,10)}</div>
                  <div className='content-center flex justify-center'>Amount : {user.amount} INR</div>
                  <div className='content-center flex justify-center'  >Phone: {user.phone}</div>
                  <div className='content-center flex justify-center' >Email : {user.email} </div>
                </div>
                  <div  className=' card-actions content-center flex justify-center' >
                    <button className="btn"> <Link to={user._id}>Transfer Money</Link> </button>
                  </div>
            </div>
          </div>
          ))}
        </div>
    ) : (<div className='w-screen h-screen justify-center'><h1>Loading...</h1></div>)} 
  </div>
)



}

export default AllUsers


