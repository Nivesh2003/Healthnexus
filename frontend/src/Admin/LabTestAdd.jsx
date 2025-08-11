import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function LabTestAdd() {
  const [testName, setTestName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [turnaround, setTurnaround] = useState('');
  const [imageUrl, setImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
  const formData = new FormData();
formData.append('testName', testName);
formData.append('description', description);
formData.append('price', price);
formData.append('turnaround', turnaround);
formData.append('image', imageUrl); 

const response = await axios.post('http://localhost:8000/lab/add', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
        if (response.data.msg == "success") {
            window.alert("added successfully");
        } else {
            window.alert("Failed to add news");
        }
  }

    return (
      <div className="d-flex justify-content-center align-items-center min-vh-80">
        <div className="card shadow p-4" style={{maxWidth: '500px', width: '100%'}}>
          <h2 className="mb-4 text-center">Add Lab Test</h2>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="mb-3">
              <label htmlFor="testName" className="form-label">Test Name</label>
              <input type="text" className="form-control" onChange={(e) => setTestName(e.target.value)} id="testName" placeholder="Enter test name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} id="description" placeholder="Enter description" rows={3} required></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)} id="price" placeholder="Enter price" min="0" required />
            </div>
            <div className="mb-3">
              <label htmlFor="turnaround" className="form-label">Turnaround Time</label>
              <input type="text" className="form-control" onChange={(e) => setTurnaround(e.target.value)} id="turnaround" placeholder="e.g. 24 hours" required />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image</label>
              <input type="file" name='image' className="form-control" id="image" accept="image/*" onChange={e => setImage(e.target.files[0])} required />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Add Lab Test</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  export default LabTestAdd
