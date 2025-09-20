import React from 'react'
import UploadSection from '../components/UploadSection'

const Upload = () => {
  return (
    <div className="upload-page">
      <div className="page-header">
        <div className="container">
          <h1>Breed Identification</h1>
          <p>Upload an image of cattle or buffalo to identify its breed using AI technology</p>
        </div>
      </div>
      
      <UploadSection />
      
      {/* Instructions Section */}
      <section className="instructions-section">
        <div className="container">
          <h2>How to Get Best Results</h2>
          <div className="instructions-grid">
            <div className="instruction-item">
              <div className="instruction-number">1</div>
              <h3>Clear Image</h3>
              <p>Ensure the animal is clearly visible with good lighting</p>
            </div>
            <div className="instruction-item">
              <div className="instruction-number">2</div>
              <h3>Side View</h3>
              <p>Capture the animal from the side for better breed identification</p>
            </div>
            <div className="instruction-item">
              <div className="instruction-number">3</div>
              <h3>Full Body</h3>
              <p>Include the complete body of the animal in the frame</p>
            </div>
            <div className="instruction-item">
              <div className="instruction-number">4</div>
              <h3>Good Quality</h3>
              <p>Use high-resolution images for better accuracy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Upload
