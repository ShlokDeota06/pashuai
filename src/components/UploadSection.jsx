import React, { useState, useRef } from 'react'

const UploadSection = () => {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [breedResult, setBreedResult] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef(null)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target.result)
        setBreedResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const processImage = async () => {
    if (!uploadedImage) return

    setIsProcessing(true)
    
    // Simulate AI processing
    setTimeout(() => {
      // Placeholder result - replace with actual AI model
      const mockResult = {
        breed: "Gir",
        confidence: 94.5,
        description: "Gir is a famous dairy cattle breed from Gujarat, India. Known for its high milk production and distinctive appearance.",
        characteristics: [
          "High milk yield",
          "Disease resistant",
          "Adaptable to hot climate",
          "Distinctive red and white coloration"
        ]
      }
      
      setBreedResult(mockResult)
      setIsProcessing(false)
    }, 3000)
  }

  const resetUpload = () => {
    setUploadedImage(null)
    setBreedResult(null)
    setIsProcessing(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="upload-section">
      <div className="container">
        <div className="upload-content">
          <h2 className="section-title">Upload Cattle Image</h2>
          <p className="section-description">
            Upload an image of cattle or buffalo to identify its breed using AI technology
          </p>

          {!uploadedImage ? (
            <div 
              className={`upload-area ${dragActive ? 'drag-active' : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="upload-content-inner">
                <div className="upload-icon">📷</div>
                <h3>Drag & Drop Image Here</h3>
                <p>or click to browse files</p>
                <p className="upload-formats">Supports: JPG, PNG, JPEG</p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                style={{ display: 'none' }}
              />
            </div>
          ) : (
            <div className="image-preview">
              <div className="preview-container">
                <img src={uploadedImage} alt="Uploaded cattle" className="preview-image" />
                <button className="remove-image" onClick={resetUpload}>
                  ✕
                </button>
              </div>
              
              {!isProcessing && !breedResult && (
                <div className="process-actions">
                  <button className="btn-primary" onClick={processImage}>
                    Identify Breed
                  </button>
                  <button className="btn-secondary" onClick={resetUpload}>
                    Upload Different Image
                  </button>
                </div>
              )}

              {isProcessing && (
                <div className="processing">
                  <div className="processing-spinner"></div>
                  <h3>Analyzing Image...</h3>
                  <p>AI is identifying the cattle breed</p>
                </div>
              )}

              {breedResult && (
                <div className="breed-result">
                  <h3>Breed Identification Result</h3>
                  <div className="result-content">
                    <div className="breed-name">
                      <h4>{breedResult.breed}</h4>
                      <span className="confidence">{breedResult.confidence}% confidence</span>
                    </div>
                    <p className="breed-description">{breedResult.description}</p>
                    <div className="characteristics">
                      <h5>Key Characteristics:</h5>
                      <ul>
                        {breedResult.characteristics.map((char, index) => (
                          <li key={index}>{char}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button className="btn-primary" onClick={resetUpload}>
                    Identify Another Breed
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UploadSection
