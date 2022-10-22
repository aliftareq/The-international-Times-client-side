import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaDiscord, FaFacebook, FaGithub, FaGoogle, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FcRules } from 'react-icons/fc';
import { MdOutlinePrivacyTip } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    const navigate = useNavigate()
    const { signInwithGoogle, setUser } = useContext(AuthContext)

    //handlers 
    const handlerGoogleSignIn = () => {
        signInwithGoogle()
            .then(result => {
                setUser(result.user)
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handlerGoogleSignIn} variant="outline-primary">
                    <FaGoogle /> <small>Login with Google</small>
                </Button>
                <Button className='mt-1' variant="outline-dark">
                    <FaGithub /> <small>Login with Github</small>
                </Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h5>Find us</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube /> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaDiscord /> discord</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><MdOutlinePrivacyTip /> Privacy & Policy</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FcRules /> Terms & Condition</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-3'>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;