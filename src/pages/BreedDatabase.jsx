import React, { useState } from 'react'

const BreedDatabase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const breeds = {
    cattle: [
      {
        name: "Gir",
        origin: "Gujarat",
        type: "Dairy",
        description: "Famous for high milk production and distinctive red and white coloration",
        characteristics: ["High milk yield", "Disease resistant", "Adaptable to hot climate"]
      },
      {
        name: "Sahiwal",
        origin: "Punjab",
        type: "Dairy",
        description: "Excellent dairy breed known for heat tolerance and milk quality",
        characteristics: ["Heat tolerant", "High butterfat content", "Good temperament"]
      },
      {
        name: "Red Sindhi",
        origin: "Sindh",
        type: "Dairy",
        description: "Red colored breed with good milk production and disease resistance",
        characteristics: ["Disease resistant", "Good milk yield", "Red coloration"]
      },
      {
        name: "Tharparkar",
        origin: "Rajasthan",
        type: "Dual Purpose",
        description: "White colored breed suitable for both milk and draught purposes",
        characteristics: ["Dual purpose", "White color", "Hardy"]
      }
    ],
    buffalo: [
      {
        name: "Murrah",
        origin: "Haryana",
        type: "Dairy",
        description: "Premium buffalo breed with highest milk production",
        characteristics: ["Highest milk yield", "High butterfat", "Black color"]
      },
      {
        name: "Nili-Ravi",
        origin: "Punjab",
        type: "Dairy",
        description: "Excellent dairy buffalo with distinctive white markings",
        characteristics: ["High milk production", "White markings", "Good temperament"]
      },
      {
        name: "Surti",
        origin: "Gujarat",
        type: "Dairy",
        description: "Medium-sized buffalo breed with good milk quality",
        characteristics: ["Medium size", "Good milk quality", "Adaptable"]
      },
      {
        name: "Jaffarabadi",
        origin: "Gujarat",
        type: "Dairy",
        description: "Large-sized buffalo breed with high milk production",
        characteristics: ["Large size", "High milk yield", "Strong build"]
      }
    ]
  }

  const allBreeds = [...breeds.cattle, ...breeds.buffalo]

  const filteredBreeds = selectedCategory === 'all' 
    ? allBreeds 
    : breeds[selectedCategory] || []

  return (
    <div className="breed-database-page">
      <div className="page-header">
        <div className="container">
          <h1>Indian Cattle & Buffalo Breeds</h1>
          <p>Comprehensive database of Indian cattle and buffalo breeds</p>
        </div>
      </div>

      <div className="breed-database-content">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Breeds
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'cattle' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('cattle')}
            >
              Cattle Breeds
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'buffalo' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('buffalo')}
            >
              Buffalo Breeds
            </button>
          </div>

          {/* Breeds Grid */}
          <div className="breeds-grid">
            {filteredBreeds.map((breed, index) => (
              <div key={index} className="breed-card">
                <div className="breed-image">
                  {/* Empty space for breed image */}
                  <div className="image-placeholder">
                    <span className="breed-icon">
                      {selectedCategory === 'cattle' ? '🐄' : '🐃'}
                    </span>
                  </div>
                </div>
                <div className="breed-info">
                  <h3 className="breed-name">{breed.name}</h3>
                  <div className="breed-meta">
                    <span className="breed-origin">📍 {breed.origin}</span>
                    <span className="breed-type">{breed.type}</span>
                  </div>
                  <p className="breed-description">{breed.description}</p>
                  <div className="breed-characteristics">
                    <h4>Key Features:</h4>
                    <ul>
                      {breed.characteristics.map((char, idx) => (
                        <li key={idx}>{char}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredBreeds.length === 0 && (
            <div className="no-breeds">
              <p>No breeds found for the selected category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BreedDatabase
