import React, { useEffect, useState } from 'react'
import Input from '../components/Input.jsx'
import {useForm} from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';


function Show() {

  const navigate = useNavigate();
  const {register, handleSubmit} = useForm()
  const [user, setUser] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const showUsers = async() => {
      try {
        const user1 = await axios.get(`http://localhost:4000/api/v2/user/${id}`,{
          withCredentials: true,
        });
        setUser(user1.data);
      } catch (error) {
        console.log(error);
      }
    }
    showUsers();
  },[]);

  const submit = async(data) => { 
    console.log(data,user._id);   
      try {
        await axios.post(
            "http://localhost:4000/api/v2/user/transmoney",
            {
                id : user._id, 
                count : data.amount, 
                email: data.email, 
            },
            {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            }   
         ).then(() => {
           navigate("/history");
          console.log("Transfred money sucessfully");
      })
    } catch (error) {
        console.log(error);
    }   
  }
  return (
    <form onSubmit={handleSubmit(submit)}>


    <div className='flex my-10 justify-evenly flex-col '>
      <div className='border-blue-300 border p-4 rounded-xl mx-5 my-10 md:mx-20'>From:
        <div className='py-4'>Name: {user.firstName} {user.lastName}</div>
        <div className='py-4'>Email: {user.email}</div>
        <div className='py-3'>Amount: {user.amount}</div>       
      </div>

      <div className='border border-blue-300 rounded-xl p-4 mx-5 md:mx-20'>To: 
                <Input
                    label="Email:"
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required: true,
                    })}
                />
                <Input
                    label="Amount:"
                    placeholder="Enter Transfer Amount"
                    type="number"
                    {...register("amount", {
                        required: true,
                    })}
                />
              <button type="submit" className='bg-blue-800 text-white h-7 w-20 m-5 rounded-full'>Submit</button>
      </div>
    </div>
          </form>
  )
}

export default Show