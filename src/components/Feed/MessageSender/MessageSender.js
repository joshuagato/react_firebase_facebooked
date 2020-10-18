import React, { useState } from 'react';
import './MessageSender.scss';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { useStateValue } from '../../../context/StateProvider';
import db from '../../../firebase';
import firebase from 'firebase';

function MessageSender() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = event => {
    event.preventDefault();

    db.collection('posts').add({
      message: input, timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL, username: user.displayName, image: imageUrl
    })

    setInput('');
    setImageUrl('');
  }

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input type="text" placeholder={`What's on your mind? ${user.displayName}`} className="messageSender__input"
            value={input} onChange={e => setInput(e.target.value)} />
          <input type="text" placeholder="image URL (optional)"
            value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
          <button onClick={handleSubmit} type="submit">Hidden Submit</button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
