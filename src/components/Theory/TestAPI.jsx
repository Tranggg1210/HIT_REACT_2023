import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const TestAPI = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const getPosts = async() => {
        try{
            const resPost = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(resPost.data);
            setPosts(resPost.data);
        }catch(err) {
            console.log(err);
        }
    }
    //useRef phải chấm current
    const getUsers = async() => {
        try{
            const {data: userData} = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(userData);
            setUsers(userData);
        }catch(err) {
            console.log(err);
        }
    }
    useEffect( () => {
        getPosts();
        getUsers();
    }, [])
    return (
        <div>
            {
                posts.length > 0 && posts.map(
                    (p) => (
                        <div key = {p.id}>
                            <h1>
                                {
                                    p.id
                                }
                            </h1>
                            <p>
                                {p.title}
                            </p>
                        </div>
                    )
                )
            }
        </div>
    );
};

export default TestAPI;