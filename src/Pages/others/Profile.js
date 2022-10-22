import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Profile = () => {
    const { user } = useContext(AuthContext)
    const [name, setName] = useState(user.displayName)
    const photURLRef = useRef(user.photoURL)

    //handlers
    const handleSubmit = e => {
        e.preventDefault()
        console.log(photURLRef.current.value);
    }
    //handle
    const handleNameChange = e => {
        setName(e.target.value)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" placeholder='your email' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>Your name</Form.Label>
                <Form.Control onChange={handleNameChange} defaultValue={user?.displayName} type="text" placeholder='your name' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control ref={photURLRef} defaultValue={user?.photoURL} type="text" placeholder='your photourl' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Profile;