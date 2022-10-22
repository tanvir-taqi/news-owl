import React, { useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Profile = () => {
    const {user,updateUser ,setLoading} = useContext(AuthContext)
    const displayNameRef = useRef(user.displayName)
    const photoURLRef = useRef(user.photoURL)
    const navigate = useNavigate()

    const handleUpdate= (event)=>{
            event.preventDefault()
            const profile={
                displayName : displayNameRef.current.value,
                // photoURL : photoURLRef.current.value
            }
            updateUser(profile)
            .then(()=>{
                navigate('/')
            })
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))
    }



    return (
        <Form onSubmit={handleUpdate}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" defaultValue={user?.email} readOnly />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control ref={displayNameRef} type="text" defaultValue={user?.displayName}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control  ref={photoURLRef} type="text" defaultValue={user?.photoURL} />
      </Form.Group>

     
      
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
    );
};

export default Profile;