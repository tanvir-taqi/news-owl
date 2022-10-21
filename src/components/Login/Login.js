import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {

    const { signIn,setLoading } = useContext(AuthContext)
    const [showpass, setShowpass] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
            .then(res => {
                const user = res.user
                if(user.emailVerified){
                    
                    navigate(from, { replace: true })
                }else{
                    toast.error(' Your Email Is Not Verified')
                    form.reset()
                }
            })
            .catch(err => {
                console.log(err);
                setError("Wrong email or password")
            })
            .finally(()=>{
                setLoading(false)
            })
    }

    return (
        <div>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name='password' type={showpass ? 'text' : 'password'} placeholder="Password" />
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setShowpass(!showpass)} type="checkbox" label="Show password" />
                    </Form.Group>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <div className='my-3'>
                    <Form.Text className="text-danger">
                        {
                            error && error
                        }
                    </Form.Text>
                </div>
                <div className="my-3">
                    <Form.Text >
                        Don't have an account? <Link to='/register'>Create Now</Link>
                    </Form.Text>
                </div>

            </Form>
        </div>
    );
};

export default Login;