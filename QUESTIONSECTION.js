import './QuestionSection.css';
import Image from './UploadImage'
import {vansh } from "./Firebase";
import React, { useState } from 'react';
import{collection, addDoc} from "firebase/firestore"

function CustomBar() {

  const[title, setTitle] = useState("");
  const[desc, setDesc] = useState("");
  const[tag, setTag] = useState("");
  const userCollectionRef = collection(vansh, "questions");

  const writeUserData = async() => {
    await addDoc( userCollectionRef, {title: title, desc: desc, tag: tag}).then(() => {
         alert("Data Uploaded!");})
    } 
  return (
    <>
    <div className='articleHeader'>
      <h2>What do you want to share or ask?</h2>
      <div className="img">
        <h3>Add an image:</h3>
         <Image/> 
      </div>
      <div className='title'>
        <label>Title:</label>
        <input type="text" placeholder="Start your question with how, what, why, etc." onChange={(event) => {setTitle(event.target.value)}} />
      </div>
      <div className='Description'>
        <label>Description:</label>
        <input type="text" placeholder="Describe your Problem" onChange={(event) => {setDesc(event.target.value)}} />
      </div>
      <div className='Tag'>
        <label>Tags:</label>
        <input type="text" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java" onChange={(event) => {setTag(event.target.value)}}/>
      </div>
      <button onClick={writeUserData} className="Button">Post</button>
    </div>
    </>
    
  );
}

export default CustomBar;
// import React from 'react';
// import './QuestionSection.css';

// const CustomBar = () => {
//   return (
//     <div className="custom-section">
//       <h2>What do you want to share</h2>

//       <label className='class'>Title</label>
//       <input className='Question1' type="text" placeholder="Start your question with how, what, why, etc." />

//       <label className='class'>Describe your Problem</label>
//       <textarea className='Question2' placeholder="Describe your problem..." />

//       <label className='class'>Tags</label>
//       <input className='Question3' type="text" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java" />

//       <button className="post">Post</button>
//     </div>
//   );
// };

// export default CustomBar;