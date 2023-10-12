import React, { useState } from 'react';
//import './ArticleForm.css';
//import { getDatabase, reference, set } from "firebase/database";
import{collection, addDoc} from "firebase/firestore"
import {vansh } from "./Firebase";
import Image from './UploadImage'
import './Article.css';

function ArticleSection() {
const[title, setTitle] = useState("")
const[abstract, setAbstract ] = useState("")
const[article, setArticle ] = useState("")
const[tag, setTag ]= useState("")

const userCollectionRef = collection(vansh, "article");

const writeUserData = async() => {
await addDoc( userCollectionRef, {title: title, abstract: abstract, article: article, tag: tag}).then(() => {
     alert("Data Uploaded!");})
}
  
  
  return (
    <>
    <div className='Article-section'>
      <h2>What do you want to share as an article?</h2>
      <div className="img">
        <h3>Add an image:</h3>
         <Image/> 
      </div>
      <div className='A1'>
        <label>Title:</label>
        <input type="text" placeholder="Enter a suitable title" onChange={(event) => {setTitle(event.target.value)}}  />
      </div>
      <div className='A2'>
        <label>Abstract:</label>
        <input type="text" placeholder="Start your article title with how, what, why, etc." onChange={(event) => {setAbstract(event.target.value)}} />
      </div>
      <div className='A3'>
        <label>Article Text:</label>
        <input type="text" placeholder="Enter the article text" onChange={(event) => {setArticle(event.target.value)}}/>
      </div>
      <div className='A4'>
        <label>Tags:</label>
        <input type="text" placeholder="Please add up to three tags to describe what your article is about, e.g., Technology" onChange={(event) => {setTag(event.target.value)}}/>
      </div>
      <button className= "post" onClick={writeUserData}>Post</button>
    </div>
    </>
    
  );
  }

export default ArticleSection;
// import React from 'react';
// import './Article.css'; 

// const ArticleSection = () => {
//   return (
//     <div className="Article-section">
//       <h2>What do you want to ask or share</h2>

//       <label className='A0'>Upload Photu</label>

//       <label className='A1'>Title</label>
//       <input className='Article1' type="text" placeholder="Start your article title with how, what, why, etc." />

//       <label className='A2'>Abstract</label>
//       <textarea placeholder='Enter a 1-paragraph Abstract'/>

//       <label className='A3'>Article Text</label>
//       <textarea placeholder="Enter the article text" />

//       <label className='A4'>Tags</label>
//       <input className='Article2' type="text" placeholder="Please add up to three tags to describe what your article is about, e.g., Technology" />

//       <button className="post">Post</button>
//     </div>
//   );
// };

// export default ArticleSection;
