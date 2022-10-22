import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    //states
    const [error, setError] = useState('')
    const [accept, setAccept] = useState(false)

    //hooks and destructured data.
    const navigate = useNavigate()
    const { createUser, updateUserProfile, varifyEmail } = useContext(AuthContext)

    //handler 
    //1
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        //console.log(name, photoUrl, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/')
                // <Navigate to='/'></Navigate>
                setError('')
                handleUpdateUserProfile(name, photoUrl)
                handleEmailVerification()

            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }
    //2
    const handleUpdateUserProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl,
        }
        updateUserProfile(profile)
            .then(() => {
                console.log('profile updated');
            })
            .catch(error => {
                console.error(error);
            })
    }
    //3
    const handleEmailVerification = () => {
        varifyEmail()
            .then(() => {
                toast.success('An verificatin mail sent , please verify')
            })
            .catch(error => {
                console.error(error);
            })
    }
    //
    const handleAccepted = (e) => {
        setAccept(e.target.checked)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>Photo</Form.Label>
                <Form.Control name='photoUrl' type="text" placeholder="Enter PhotoURL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/terms'>terms and conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accept ? true : false}>
                Register
            </Button>
        </Form>
    );
};

export default Register;