import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitch, FaTwitter, FaYoutube, } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import { AuthContext } from '../../context/AuthProvider';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import './RightSide.css'

const RightSide = () => {

    const {providerLogin,setLoading} = useContext(AuthContext)
    
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider()
  

    const socialLogIn = (googleProvider)=>{
        providerLogin(googleProvider)
        .then((result) => {
            const user = result.user
            // const credential = FacebookAuthProvider.credentialFromResult(result);
            // const accessToken = credential.accessToken;
            console.log(user);
          })
          .catch((error) => {
            console.log(error);
          })  
          .finally(()=>setLoading(false))
    }
 

    return (
        <div className='fixed '>
            <ButtonGroup vertical>
                <button onClick={()=>socialLogIn(googleProvider)}  className='my-1 sign-in-btn'><FaGoogle /> Sign In With Google</button>
                <button onClick={()=>socialLogIn(facebookProvider)}   className='my-1 sign-in-btn'><FaFacebook /> Sign In WIth Facebook</button>
            </ButtonGroup>
            <div className='py-4'>
                <h4 className='py-2'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-1 bg-dark text-primary social'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-1 bg-dark text-primary social'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-1 bg-dark text-primary social'><FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-1 bg-dark text-primary social'><FaYoutube/> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-1 bg-dark text-primary social'><FaLinkedin/> LinkedIn</ListGroup.Item>
                </ListGroup>
            </div>
            
        </div>
    );
};

export default RightSide;