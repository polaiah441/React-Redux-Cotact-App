import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Home = () => {

    const contacts = useSelector(state=>state);
    const dispatch = useDispatch();
    const deleteContact = (id) => {
        dispatch({type:"DELETE-CONTACT", payload:id})
        toast.success("Contact successfully Deleted!!");
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12  m-2 text-right'>
                    <Link to="/add" className='btn btn-outline-dark mx-1'>Add Contact</Link>
                    {/* <Link to="/edit" className='btn btn-outline-dark'>Edit Contact</Link> */}
                </div>
               
                <div className='col-md-20 mx-auto'>
                    <h1>Welome to React Redux contact Book</h1>
                    <table className='table table-hover'>
                        <thead className='text-white bg-dark text-center'>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Number</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, id)=>(
                                <tr>
                                    <td>{id+1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.number}</td>
                                    <td>
                                        <Link to={`/edit/${contact.id}`} className='btn btn-small btn-primary mx-2'>Edit</Link>
                                        <button type='button' onClick={()=>deleteContact(contact.id)} className='btn tn-small btn-danger'>Delete</button>
                                    </td>
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Home;