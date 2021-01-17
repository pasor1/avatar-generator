import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import axios from 'axios';
import FullscreenLoader from '../FullscreenLoader/FullscreenLoader';

const Cards = props => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get('https://burger-builder-6a382-default-rtdb.europe-west1.firebasedatabase.app/users.json')
      .then(response => {
        let responseToArray = Object.keys(response.data).map(key => response.data[key]);
        setUsers(responseToArray.reverse());
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      })
  }, [])

  return (
    loading
      ? <FullscreenLoader />
      : (
      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-items-stretch">
        { 
          users.map(user => (
            <Card key={user.username} username={user.username} avatarType={user.avatarType} />
          ))
        }
      </div>)
)}

export default Cards;