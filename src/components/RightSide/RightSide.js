import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitch, FaTwitter, FaYoutube, } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import { AuthContext } from '../../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSide = () => {

    const {providerLogin} = useContext(AuthContext)
    
    const googleProvider = new GoogleAuthProvider();

    const googleLogIn = (googleProvider)=>{
        providerLogin(googleProvider)
        .then((result) => {
            const user = result.user
         
          }).catch((error) => {
            console.log(error);
          });
    }

    return (
        <div className='fixed '>
            <ButtonGroup vertical>
                <Button onClick={()=>googleLogIn(googleProvider)} variant="outline-primary" className='my-1'><FaGoogle /> Sign In With Google</Button>
                <Button variant="outline-primary" className='my-1'><FaGithub /> Sign In WIth Github</Button>
                <Button variant="outline-primary" className='my-1'><FaFacebook /> Sign In WIth Facebook</Button>
            </ButtonGroup>
            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item><FaYoutube/> Youtube</ListGroup.Item>
                    <ListGroup.Item><FaLinkedin/> LinkedIn</ListGroup.Item>
                </ListGroup>
            </div>
            
        </div>
    );
};

export default RightSide;