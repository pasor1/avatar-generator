import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm/UserForm';
import Cards from '../components/Cards/Cards';
import axios from 'axios';
import FullscreenLoader from '../components/FullscreenLoader/FullscreenLoader';

function App() {
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
  },[])

  return (
    <>
      <div className="my-10 p-10 mx-auto max-w-6xl items-center">
        <UserForm />
        {loading
          ? <FullscreenLoader/>
          : <Cards users={users} />
          }
      </div>
    </>
  );
}

export default App;
