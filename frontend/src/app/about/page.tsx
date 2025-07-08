import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Discover Our Journey</h1>
        <p>Where Passion Meets Perfection</p>
      </section>

      {/* Our Story */}
      <section className="story">
        <h2>Our Story</h2>
        <div className="story-content">
          <p>
            Borcelle was founded with a vision to redefine modern fashion. Our journey began with a simple idea - to create timeless pieces that empower women to express their unique style. 
          </p>
          <p>
            Today, we stand as a beacon of elegance and innovation, combining traditional craftsmanship with contemporary design. Each piece in our collection is crafted with meticulous attention to detail, ensuring quality that lasts.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="values">
        <h2>Our Core Values</h2>
        <div className="values-list">
          <div className="value">
            <h3>Quality Excellence</h3>
            <p>Uncompromising commitment to superior craftsmanship and materials</p>
          </div>
          <div className="value">
            <h3>Innovation</h3>
            <p>Constantly pushing boundaries to create unique, trend-setting designs</p>
          </div>
          <div className="value">
            <h3>Sustainability</h3>
            <p>Environmentally conscious practices and ethical manufacturing</p>
          </div>
          <div className="value">
            <h3>Customer Focus</h3>
            <p>Personalized service and dedication to customer satisfaction</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Borcelle?</h2>
        <ul>
          <li>
            <span>Exclusive Collections</span>
            <p>Handpicked designs that set trends</p>
          </li>
          <li>
            <span>Expert Craftsmanship</span>
            <p>Every piece made with precision and care</p>
          </li>
          <li>
            <span>Global Inspiration</span>
            <p>Designs inspired by world cultures</p>
          </li>
          <li>
            <span>Personal Style Consultation</span>
            <p>Expert advice to enhance your wardrobe</p>
          </li>
        </ul>
      </section>

     
      {/* Timeline Section */}
      <section className="timeline">
        <h2>Our Journey</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2015 - Foundation</h3>
              <p>Established with a vision to create timeless fashion</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2017 - Global Expansion</h3>
              <p>Launched international e-commerce platform</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2020 - Sustainability Initiative</h3>
              <p>Implemented eco-friendly manufacturing practices</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2023 - Innovation Hub</h3>
              <p>Opened R&D center for sustainable fashion</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
