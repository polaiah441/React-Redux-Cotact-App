import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";


const Edit = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const dispatch = useDispatch();
    const history = useNavigate();

    const { id } = useParams();
    const contacts = useSelector(state => state);

    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    }, [currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = contacts.find(contact=>contact.id !== parseInt(id) &&  contact.email === email);
        const checkNumber = contacts.find(contact=> contact.id !== parseInt(id) && contact.number === parseInt(number));
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
            id : parseInt(id),
            name,
            email,
            number
        }

        //console.log(JSON.stringify(data));
        dispatch({type:"UPDATE_CONTACT", payload:data});
        toast.success("Student record Updated successfully!!");
        history("/");
    }

    return (
        <div className='container'>
            {currentContact ? (
                <>
                    <h1 className='display-3 text-center'>Edit Student {id}</h1>
                    <div className='row'>
                        <div className='col-md-6 shadow mx-auto p-5'>
                            <form onSubmit={handleSubmit}>
                                <input type='text' placeholder="Name" value={name} className="form-control my-2" onChange={e => setName(e.target.value)} />
                                <input type='mail' placeholder="Email" value={email} className="form-control my-2" onChange={e => setEmail(e.target.value)} />
                                <input type='number' placeholder="Mobile no" value={number} className="form-control my-2" onChange={e => setNumber(e.target.value)} />
                                <input type='submit' value='Update Student' className="btn btn-dark " />
                                <Link to='/' className="btn btn-danger mx-2">Cancel</Link>
                                {/* <input type='submit' value='Cancel' className="btn btn-danger mx-2 " /> */}
                            </form>
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    <h1 className='display-3 text-center'>Student record with id {id} not exists!!</h1>
                </div>

            )}
        </div>
    )
}

export default Edit;