import React, { useState } from 'react';
import axios from '../../axiosConfig';
import Card from '../Cards/Card/Card';
import FullscreenLoader from '../FullscreenLoader/FullscreenLoader';

const UserForm = (props) => {
  const [saving, setSaving] = useState(false);
  const [username, setUsername] = useState('');
  const [avatarType, setAvatarType] = useState('set1');

  const usernameChangeHandler = e => {
    setUsername(e.target.value);
  }

  const avatarTypeChangeHandler = e => {
    setAvatarType(e.target.value)
  }

  const saveAvatarHandler = () => {
    if (username) {
      setSaving(true);
      const data = {
        username: username,
        avatarType: avatarType
      };
      axios.post('/avatars.json', data)
        .then(response => { 
          props.history.push('/');
        })
    }
  }

  return (
      saving
        ? <FullscreenLoader />
    : (
    <div className="mb-10 flex flex-wrap justify-center">
        <div>
          <div className="mx-2 md:mb-10">
            <label htmlFor="username" className="text-gray-500">Name</label><br/>
            <input
              name="username"
              value={username}
              onChange={usernameChangeHandler}
              className="w-72 sm:w-auto p-3 text-2xl border border-purple-300 bg-white rounded-lg shadow outline-none focus:outline-none focus:border-purple-500" placeholder="Name..." />
          </div>
          <div className="mx-2 my-3 md:my-10">
            <label htmlFor="avatarType" className="text-gray-500">Avatar type</label><br />
            <select
              name="avatarType"
              value={avatarType}
              onChange={avatarTypeChangeHandler}
              className="w-full p-3 text-2xl border border-purple-300 bg-white rounded-lg shadow outline-none focus:outline-none focus:border-purple-500">
              <option value="set1">Robot</option>
              <option value="set2">Monster</option>
              <option value="set3">Roboface</option>
              <option value="set4">Cat</option>
              <option value="set5">Human</option>
            </select>
          </div>
          <div className="mx-2 my-7 md:my-10 text-center">
            {username
              ? <button onClick={saveAvatarHandler} className="bg-purple-900 text-white outline-none p-3 rounded-lg focus:outline-none hover:bg-purple-800 shadow-lg transform duration-75 ease-in-out active:shadow-sm active:translate-y-0.5 focus:ring;">Save you Avatar</button>
              : <button disabled className="bg-purple-900 text-white outline-none p-3 rounded-lg focus:outline-none shadow-lg opacity-30 cursor-not-allowed">Save your Avatar</button>
            }
          </div>
        </div>
        <div className="w-80">
          <div className="mx-1 sm:mx-7">
            <span className="text-gray-500">Preview</span><br/>
            <Card username={username} avatarType={avatarType} />
          </div>
        </div>
    </div >
    )
  )
}
export default UserForm;