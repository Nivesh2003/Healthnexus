import React from 'react'

export default function TestCard({ test, onBook }){
  return (
    <div className="card h-100 test-card shadow-sm">
      <img src={test.image} className="card-img-top" style={{height: '200px', objectFit: 'cover'}} alt={test.name} />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{test.name}</h6>
        <p className="card-text text-muted small mb-2">{test.description}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <div>
            <div className="fw-bold">₹{test.price}</div>
            <small className="text-success">{test.turnaround} turnaround</small>
          </div>
          <div>
            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => alert('Added to cart')}>Add</button>
            <button className="btn btn-sm btn-primary" onClick={onBook}>Book</button>
          </div>
        </div>
      </div>
    </div>
  )
}
