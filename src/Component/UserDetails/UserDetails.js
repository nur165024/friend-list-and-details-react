import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {
    const {id} = useParams();
    const [userDetails,setUserDetails] = useState({});
    
    console.log();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUserDetails(data))
    },[]);

    const {name,phone,email,website,address,company} = userDetails;

    return (
        <div className="userDetails">
            <h3>User Name : {name}</h3>            
            <p>User id : {id}</p>
            <p>User Phone : {phone}</p>
            <p>User Email : {email}</p>
            <p>User Website : {website}</p>
        </div>
    );
};

export default UserDetails;