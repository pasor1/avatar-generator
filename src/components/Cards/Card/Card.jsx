import React, { useState, useEffect } from 'react';
import axios from 'axios';
import avatarPlaceholder from '../../../assets/images/avatarPlaceholder.png'

const AVATAR_SIZE = {
  width: 200,
  height: 200
};

const Card = props => {
  const [loading, setLoading] = useState(true);
  const [imgBase64, setImgBase64] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get(
        `https://robohash.org/${props.username}?set=${props.avatarType}&size=${AVATAR_SIZE.width}x${AVATAR_SIZE.height}`,
        { responseType: 'arraybuffer' }
      ).then(response => {
        const resImg = Buffer.from(response.data, 'binary').toString('base64');
        setImgBase64(`data:image/png;base64, ${resImg}`)
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      })
  }, [props.username,props.avatarType])

  return (
    <div className="flex flex-wrap flex-col justify-center items-center bg-white border p-5 w-full min-w-full rounded-lg shadow-lg transition duration-100 transform hover:shadow-2xl hover:scale-110 text-center overflow-hidden">
      <div style={{ width: `${AVATAR_SIZE.width}px`, height: `${AVATAR_SIZE.height}px` }} className="flex justify-center items-center mx-auto">
          {
          loading
          ? (<div className="loader"></div>)
          : props.username
          ? <img style={{ width: `${AVATAR_SIZE.width}px`, height: `${AVATAR_SIZE.height}px` }} alt={props.username} src={imgBase64} />
          : <img style={{ width: `${AVATAR_SIZE.width}px`, height: `${AVATAR_SIZE.height}px` }} alt={props.username} src={avatarPlaceholder} />
        }
      </div>
      {
        props.username
          ? <h3 className="mt-3">{props.username}</h3>
          : <h3 className="mt-3 text-gray-300">username</h3>
      }
    </div>
  )
}

export default Card;