import React, { useState, useEffect } from 'react';
import axios from 'axios';
import avatarPlaceholder from '../../../assets/images/avatarPlaceholder.png';
import { FaTrashAlt } from 'react-icons/fa';

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
    <div className="flex flex-wrap flex-col justify-center items-center bg-white border pt-2 w-full min-w-full rounded-lg shadow-lg text-center overflow-hidden transition duration-100 transform hover:scale-110">
      <div style={{ width: `${AVATAR_SIZE.width}px`, height: `${AVATAR_SIZE.height}px` }} className="flex justify-center items-center mx-auto">
          {
          loading
          ? (<div className="loader"></div>)
          : props.username
              ? <img style={{ width: `${AVATAR_SIZE.width}px`, height: `${AVATAR_SIZE.height}px` }} alt={props.username} src={imgBase64} className="" />
          : <img style={{ width: `${AVATAR_SIZE.width}px`, height: `${AVATAR_SIZE.height}px` }} alt={props.username} src={avatarPlaceholder} />
        }
      </div>
      {
        props.username
          ? <h3 className="my-3">{props.username}</h3>
          : <h3 className="my-3 text-gray-300">username</h3>
      }
      {props.interactive
        ? (<>
          {/* <button className="" onClick={() => props.onclickProp(props.id)}>edit</button>  */}
          <button className="flex items-center mt-3 mb-1 text-sm py-0 px-3 rounded bg-gray-400 bg-opacity-70 text-white shadow" onClick={() => props.onclickProp(props.id)}><FaTrashAlt className="mr-1"/>Remove</button>
          </>
        )
      : null}

    </div>
  )
}

export default Card;