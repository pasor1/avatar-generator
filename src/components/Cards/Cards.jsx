import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import axios from 'axios';
import FullscreenLoader from '../FullscreenLoader/FullscreenLoader';

const Cards = props => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    getUsers();
  }, [])

  const getUsers = () => {
    axios.get('https://burger-builder-6a382-default-rtdb.europe-west1.firebasedatabase.app/users.json')
      .then(response => {
        let responseToArray = []
        for (const item in response.data) {
          responseToArray.push({
            avatarType: response.data[item].avatarType,
            username: response.data[item].username,
            id: item
          })
        }
        setUsers(responseToArray.reverse());
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      })
  }


  const clickDeleteHandler = (id) => {
    axios.delete(`https://burger-builder-6a382-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`)
      .then(response => {
        getUsers();
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      })
  }

  return (
    loading
      ? <FullscreenLoader />
      : (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-items-stretch">
        { 
          users.map(user => (
            <Card interactive key={user.id} id={user.id} username={user.username} avatarType={user.avatarType} onclickProp={clickDeleteHandler} />
          ))
        }
      </div>)
)}

export default Cards;