import React, { useState } from 'react'
import Input from '../components/Input.jsx'
import Select from '../components/Select.jsx'
import {useForm} from "react-hook-form";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function NewUser() {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const createUser = async(data) => {
        setError("")
        try {
            await axios.post(
                "http://localhost:4000/api/v2/user/add",
                {
                    firstName : data.firstName, 
                    lastName : data.lastName, 
                    DOB: data.DOB, 
                    email: data.email, 
                    phone: data.phone, 
                    gender: data.gender, 
                    accountType: data.accountType, 
                    amount: data.amount, 
                    employment: data.employment
                },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
            ).then((res) => {
                navigate("/allusers");
                console.log("User created sucessfully",res);
            })
        } catch (error) {
            setError(error);
            console.log(error);
        }
    }
  return (
    <div className='p-5 justify-center w-full md:px-40 sm: px-0'>
        <form onSubmit={handleSubmit(createUser)} className='px-6'>
            <div className='space-y-5'>
                
                <Input
                    label="First Name:"
                    placeholder="Enter your first name"
                    type="text"
                    {...register("firstName", {
                        required: true,
                    })}
                />
                <Input
                    label="Last Name:"
                    placeholder="Enter your last name"
                    type="text"
                    {...register("lastName", 
                    )}
                />
                <Input
                    label="Email:"
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required: true,
                    })}
                />
                <Select
                options={["Male", "Female", "Others"]}
                label="Select your gender"
                {...register("gender", {
                    required: true,
                })}
                />
                <Input
                    label="Date of birth:"
                    placeholder="Enter your date of birth"
                    type="date"
                    {...register("DOB", {
                        required: true,
                    })}
                />
                <Input
                    label="Phone No:"
                    placeholder="Enter your Phone No"
                    type="text"
                    {...register("phone", {
                        required: true,
                    })}
                />
                <Select
                options={["Saving", "International", "Regional"]}
                label="Account type:"
                {...register("accountType", {
                    required: true,
                })}
                />
                <Input
                    label="Amount:"
                    placeholder="Enter amount"
                    type="number"
                    {...register("amount", {
                        required: true,
                    })}
                />
                
                <Select
                options={["Student", "Farmer", "Others"]}
                label="Employment:"
                {...register("employment", {
                    required: true,
                })}
                />
                <button type="submit" className='bg-blue-800 text-white h-9 w-36 rounded-full'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default NewUser