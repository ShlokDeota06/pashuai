import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  
  const backgroundImages = [
    './image1.png',
    './image2.png',
    './image3.png',
    './image4.png'
  ]
  
  const slides = [
    {
      id: 1,
      title: "Identify Cattle Breeds",
      subtitle: "With AI Technology",
      description: "Advanced image recognition for Indian cattle and buffalo breeds",
      buttonText: "Start Recognition",
      buttonLink: "/upload"
    },
    {
      id: 2,
      title: "Accurate Breed Detection",
      subtitle: "For Field Workers",
      description: "Supporting Bharat Pashudhan App with reliable breed identification",
      buttonText: "Learn More",
      buttonLink: "/about"
    }
  ]

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto-change background image every 5 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(imageInterval)
  }, [backgroundImages.length])

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            {slides[currentSlide].title}
          </h1>
          <h2 className="hero-subtitle">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="hero-description">
            {slides[currentSlide].description}
          </p>
          <div className="hero-buttons">
            <Link to={slides[currentSlide].buttonLink} className="btn-primary">
              {slides[currentSlide].buttonText}
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Background - VIDEO IMPLEMENTATION AREA */}
      <div className="hero-background">
        {/* 
        ========================================
        🎬 ADD YOUR VIDEO HERE - REPLACE THIS DIV
        ========================================
        
        Example implementation:
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/videos/your-video.mp4" type="video/mp4" />
        </video>
        
        ========================================
        */}
        <div 
          className="hero-background-image"
          style={{
            backgroundImage: `url(${backgroundImages[currentImage]})`
          }}
        >
          {/* Dynamic background images with smooth transitions */}
        </div>
        <div className="hero-overlay"></div>
      </div>

      {/* Carousel Controls */}
      <div className="carousel-controls">
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero
