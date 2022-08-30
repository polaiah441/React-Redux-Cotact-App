import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { toast } from "react-toastify";
// import {useNavigate} from 'react-router-dom';

const Add = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = contacts.find(contact=>contact.email === email && email);
        const checkNumber = contacts.find(contact=>contact.number === parseInt(number) && parseInt(number));
        if(!email || !number || !name){
            return toast.warning("Please input all the fields");
        }

        if(checkNumber){
            return toast.error("This Number already exist!")
        }

        if(checkEmail){
            return toast.error("This email already exist!")
        }

        const data = {
            id : contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }

        //console.log(JSON.stringify(data));
        dispatch({type:"ADD_CONTACT", payload:data});
        toast.success("Student record added successfully!!");
        history("/");
    }

   

    return (
        <div className='container'>
            <h1 className='display-3 text-center'>Add Student</h1>
            <div className='row'>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder="Name" className="form-control my-2" value={name} onChange = {e=>setName(e.target.value)}/>
                        <input type='mail' placeholder="Email" className="form-control my-2" value={email} onChange={e=>setEmail(e.target.value)}/>
                        <input type='number' placeholder="Mobile no" className="form-control my-2" value={number} onChange={e=>setNumber(e.target.value)}/>
                        <input type='submit' value='Add Student' className="btn btn-block btn-dark my-2 form-control" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add;