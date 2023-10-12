import React, { useState } from 'react';
import './App.css';
import Options from './OPTIONS';
import QuestionForm from './QUESTIONSECTION';
import ArticleForm from './ARTICLE';
import FindQuestion from './FindYourQuestion';
import "firebase/firestore";
function App() {
  const [postType, setPostType] = useState('question');

  return (
    <div className="App">
      <h1>New Post</h1>
      <Options postType={postType} setPostType={setPostType} />
      {postType === 'question' ? <QuestionForm /> : null}
      {postType === 'article' ? <ArticleForm /> : null}
      <div className="Find"> 
      {postType === 'FindQuestion' ? <FindQuestion /> : null} 
      </div>
     
    </div>
  );
}

export default App;