import React, { useState, useEffect } from 'react';
import { vansh } from './Firebase';
import { collection, getDocs,addDoc,deleteDoc,doc } from 'firebase/firestore';
import "./FindYourQuestion.css"

function FindQuestion() {
  const [questions, setQuestions] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    tag: '',
    desc: '',
  });
  const [expandedIndex, setExpandedIndex] = useState(null);

  const userQuestionsRef = collection(vansh, 'questions');
  const [filteredQuestions, setFilteredQuestions] = useState([]); // Separate filtered array

  useEffect(() => {
    const getQuestions = async () => {
      const data = await getDocs(userQuestionsRef);
      const questionData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setQuestions(questionData);
      setFilteredQuestions(questionData); // Initialize filtered array with all questions
    };
    getQuestions();
  }, []);

  const handleFilter = () => {
    const filteredQuestions = questions.filter(
      (question) =>
        question.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        question.tag.toLowerCase().includes(filterTag.toLowerCase())
    );
    setFilteredQuestions(filteredQuestions); // Update filtered array, not questions
  };

  const handleDeleteQuestion = async (id) => {
    
    //await deleteDoc(doc(vansh, 'questions', id));

    const updatedQuestions = filteredQuestions.filter((question) => question.id !== id);
    setFilteredQuestions(updatedQuestions);
  };

  const handleSubmitNewQuestion = async () => {
    // Add the new question to the database
    await addDoc(collection(vansh, 'questions'), newQuestion);

    // Update filteredQuestions with the new question
    setFilteredQuestions([...filteredQuestions, newQuestion]);

    // Clear the form fields
    setNewQuestion({ title: '', tag: '', desc: '' });
  };

  const handleExpand = (index) => {
    // Toggle the expanded state for the clicked question
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div>
      <h1>Filter Questions</h1>
      <div className='filter'>
        <h4>Title:</h4>
        <input
          type="text"
          placeholder="Filter by title"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
        />

        <h4>Tag:</h4>
        <input
          type="text"
          placeholder="Filter by tag"
          value={filterTag}
          onChange={(e) => setFilterTag(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
      </div>

      <h1>Add New Question</h1>
      <div className='nava-sawaal'>
      <h3>New Title:</h3>
        <input
          type="text"
          placeholder="New title"
          value={newQuestion.title}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, title: e.target.value })
          }
        />
        <h3>Description:</h3>
        <input
          type="text"
          placeholder="Description"
          value={newQuestion.desc}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, desc: e.target.value })
          }
        />
        <h3>Tag:</h3>
        <input
          type="text"
          placeholder="Tag"
          value={newQuestion.tag}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, tag: e.target.value })
          }
        />
        <button onClick={handleSubmitNewQuestion}>Submit</button>
      </div>

      <h1>Questions</h1>
      {filteredQuestions.map((question, index) => (
        <div className="card" key={question.id}>
          <h2>Question: {index + 1}</h2> 
          <h2>Title: {question.title}</h2>
          <button onClick={() => handleDeleteQuestion(question.id)}>Delete</button>
          <button onClick={() => handleExpand(index)}>
            {expandedIndex === index ? 'Collapse' : 'Expand'}
          </button>
          {expandedIndex === index && (
            <div>
              <h3>More Details:</h3>
              <p>Description: {question.desc}</p>
              <p>Tag: {question.tag}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FindQuestion;