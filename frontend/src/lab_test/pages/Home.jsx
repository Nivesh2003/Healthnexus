import React, { useState } from 'react'
import HeroCarousel from '../shared/HeroCarousel'
import SearchBar from '../shared/SearchBar'
import TestCard from '../shared/TestCard'
import BookingModal from '../shared/BookingModal'
import tests from '../data/tests'

export default function Home(){
  const [query, setQuery] = useState('')
  const [selectedTest, setSelectedTest] = useState(null)

  const filtered = tests.filter(t => t.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <>
      <div className="container mt-4">
        <div className="py-4">
          <SearchBar query={query} setQuery={setQuery} />
        </div>
        <HeroCarousel />


        <h5 className="mb-3">Recommended Tests</h5>
        <div className="row g-3">
          {filtered.map(test => (
            <div key={test.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <TestCard test={test} onBook={() => setSelectedTest(test)} />
            </div>
          ))}
        </div>

        <footer className="mt-5 py-4 text-center text-muted">
          © {new Date().getFullYear()} Health Nexus Lab Test
        </footer>
      </div>

      {selectedTest && (
        <BookingModal test={selectedTest} onClose={() => setSelectedTest(null)} />
      )}
    </>
  )
}
