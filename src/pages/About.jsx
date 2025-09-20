import React from 'react'

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About PashuAI</h1>
          <p>AI-powered cattle breed recognition for Bharat Pashudhan App</p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          {/* Mission Section */}
          <section className="mission-section">
            <div className="mission-content">
              <div className="mission-text">
                <h2>Our Mission</h2>
                <p>
                  PashuAI is designed to support the Government of India's Bharat Pashudhan App (BPA) 
                  by providing accurate cattle and buffalo breed identification through advanced AI technology. 
                  Our goal is to minimize breed identification errors and improve data integrity for 
                  better genetic improvement, nutrition planning, and disease control programs.
                </p>
                <p>
                  We understand the challenges faced by Field Level Workers (FLWs) in correctly 
                  identifying diverse Indian cattle and buffalo breeds. Our AI-driven solution 
                  serves as a reliable decision-support tool, ensuring consistent and accurate 
                  breed identification across all regions of India.
                </p>
              </div>
              <div className="mission-image">
                {/* Empty space for mission image */}
                <div className="image-placeholder">
                  <span className="mission-icon">🎯</span>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Section */}
          <section className="technology-section">
            <h2>Our Technology</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <div className="tech-icon">🧠</div>
                <h3>Machine Learning</h3>
                <p>Advanced neural networks trained on thousands of Indian cattle and buffalo images</p>
              </div>
              <div className="tech-item">
                <div className="tech-icon">📱</div>
                <h3>Mobile Optimized</h3>
                <p>Lightweight AI models optimized for mobile devices used by field workers</p>
              </div>
              <div className="tech-item">
                <div className="tech-icon">☁️</div>
                <h3>Cloud Integration</h3>
                <p>Seamless integration with Bharat Pashudhan App infrastructure</p>
              </div>
              <div className="tech-item">
                <div className="tech-icon">🔒</div>
                <h3>Data Security</h3>
                <p>Secure handling of animal data with privacy protection measures</p>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section className="impact-section">
            <h2>Our Impact</h2>
            <div className="impact-stats">
              <div className="impact-stat">
                <div className="stat-number">94%</div>
                <div className="stat-label">Accuracy Rate</div>
                <div className="stat-description">In breed identification</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Indian Breeds</div>
                <div className="stat-description">Supported in our database</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Field Workers</div>
                <div className="stat-description">Using our system</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Images Processed</div>
                <div className="stat-description">Successfully identified</div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="team-section">
            <h2>Our Team</h2>
            <p className="team-description">
              We are a dedicated team of AI researchers, agricultural experts, and software developers 
              working together to improve livestock management in India through technology.
            </p>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  {/* Empty space for team member image */}
                  <div className="image-placeholder">
                    <span className="member-icon">👨‍💻</span>
                  </div>
                </div>
                <h4>AI Research Team</h4>
                <p>Machine Learning & Computer Vision Experts</p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  {/* Empty space for team member image */}
                  <div className="image-placeholder">
                    <span className="member-icon">👩‍🌾</span>
                  </div>
                </div>
                <h4>Agricultural Experts</h4>
                <p>Livestock & Breed Specialists</p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  {/* Empty space for team member image */}
                  <div className="image-placeholder">
                    <span className="member-icon">👨‍💼</span>
                  </div>
                </div>
                <h4>Development Team</h4>
                <p>Software Engineers & UI/UX Designers</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
