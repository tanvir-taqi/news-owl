import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Registration = () => {
    const {createUser,updateUser,emailVerification} = useContext(AuthContext)
    const [error , setError] = useState(null)
    const [accepted, setAccepted] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleRegistration = (event) =>{
            event.preventDefault()
            const form = event.target
            const email = form.email.value
            const password = form.password.value
            const confirm = form.confirm.value
            const name = form.name.value

            if(password !== confirm){
                setError("Password Doesn't match")
                return
            }else{
                createUser(email,password)
                .then(res =>{
                    const user = res.user
                    handleProfile(name)
                    handleVerify(email)
                    toast.success('Please Verify Your Email')
                    navigate(from , {replace:true})
                })
                .catch(err => console.log(err))
               
            }
    }

    const handleProfile = (name)=>{
        const profile = {
            displayName:name
        }
        updateUser(profile)
    }

    const handleVerify = ()=>{
        emailVerification()
        .then(res => {})
        .catch(err => console.log(err))
        
    }

    return (
        <div>
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control name='name' type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' required type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirm' type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={()=>setAccepted(!accepted)}  type="checkbox" label={<>Accept <Link to='/terms'>Terms And Condition</Link></>}/>
                    </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Submit
                </Button>
                <div className='my-3'>
                    <Form.Text className="text-danger">
                       {
                        error && error
                       }
                    </Form.Text>
                </div>
                <div className='my-3'>
                    <Form.Text className="">
                        Already have an account? <Link to='/login'>Sign In</Link>
                    </Form.Text>
                </div>
            </Form>
        </div>
    );
};

export default Registration;