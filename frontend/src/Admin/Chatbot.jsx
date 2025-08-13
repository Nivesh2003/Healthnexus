import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [unanswered, setUnanswered] = useState([]);
  const [answered, setAnswered] = useState([]);
  const [editAnswer, setEditAnswer] = useState({}); // store answers typed by admin keyed by question id

  // Fetch unanswered questions
  const fetchUnanswered = async () => {
    const res = await axios.get('http://localhost:8000/api/questions/unanswered');
    setUnanswered(res.data);
  };

  // Fetch answered questions
  const fetchAnswered = async () => {
    const res = await axios.get('http://localhost:8000/api/questions/answered');
    setAnswered(res.data);
  };

  useEffect(() => {
    fetchUnanswered();
    fetchAnswered();
  }, []);

  // Handle answer when input will change
  const handleInputChange = (id, value) => {
    setEditAnswer(prev => ({ ...prev, [id]: value }));
  };

  // Submit answer for a question
  const handleSubmitAnswer = async (id) => {
    const answer = editAnswer[id];
    if (!answer || answer.trim() === '') return alert("Answer cannot be empty");
    try {
      await axios.put(`http://localhost:8000/api/questions/${id}`, {
        adminReply: answer,
        status: 'answered'
      });
      setEditAnswer(prev => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
      // Refresh lists
      fetchUnanswered();
      fetchAnswered();
    } catch  {
      alert("Error submitting answer");
    }
  };

  // Delete question
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/questions/${id}`);
      // Refresh lists
      fetchUnanswered();
      fetchAnswered();
    } catch {
      alert("Error deleting question");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Panel</h2>

      <div style={{ display: 'flex', gap: '40px' }}>
        {/* Unanswered Section */}
        <div style={{ flex: 1 }}>
          <h3>Unanswered Questions</h3>
          {unanswered.length === 0 && <p>No unanswered questions</p>}
          {unanswered.map(q => (
            <div key={q._id} style={{ border: '1px solid gray', marginBottom: '10px', padding: '10px' }}>
              <p><b>Question:</b> {q.message}</p>
              <textarea
                rows={3}
                placeholder="Write your answer here"
                value={editAnswer[q._id] || ''}
                onChange={e => handleInputChange(q._id, e.target.value)}
                style={{ width: '100%' }}
              />
              <button onClick={() => handleSubmitAnswer(q._id)}>Submit Answer</button>
              <button onClick={() => handleDelete(q._id)} style={{ marginLeft: '10px', color: 'red' }}>Delete</button>
            </div>
          ))}
        </div>

        {/* Answered Section */}
        <div style={{ flex: 1 }}>
          <h3>Answered Questions</h3>
          {answered.length === 0 && <p>No answered questions</p>}
          {answered.map(q => (
            <div key={q._id} style={{ border: '1px solid gray', marginBottom: '10px', padding: '10px' }}>
              <p><b>Question:</b> {q.message}</p>
              <p><b>Answer:</b> {q.adminReply}</p>
              <button onClick={() => handleDelete(q._id)} style={{ color: 'red' }}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chatbot;