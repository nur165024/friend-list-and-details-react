import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [user,setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    return (
        <div className="homepage">
            {
                user.map(ur => {
                    return (
                        <div key={ur.id} className="homeContent">
                            <h3>User Name : {ur.name}</h3>
                            <p>user email : {ur.email}</p>
                            <p>user phone : {ur.phone}</p>
                            <Link to={`/user/details/${ur.id}`}>
                                <button>View Detils</button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
        
    );
};

export default Home;