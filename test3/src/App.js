import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  margin: 0 1rem;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #2c3e50;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  padding: 80px 2rem 2rem;
`;

const BlogSection = styled(Section)`
  background-color: #f8f9fa;
`;

const BlockSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const scrollToBlog = (e) => {
    e.preventDefault();
    const blogSection = document.getElementById('blog');
    blogSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppContainer>
      <Navbar>
        <NavContent>
          <Logo>Bonura-Max</Logo>
          <NavLinks>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#blog" onClick={scrollToBlog}>Blog</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </NavLinks>
          <MobileMenuButton>
            <FaBars />
          </MobileMenuButton>
        </NavContent>
      </Navbar>

      <Section id="home">
        <h1>Welcome to Bonura-Max</h1>
        <p>Stronger Bones, Better Mobility</p>
      </Section>

      <BlogSection id="blog">
        <h2>What is Bonura-Max?</h2>
        <p>Bonura-Max is a bone health supplement packed with essential vitamins and minerals that work together to protect and nourish your bones and joints. Each softgel capsule combines a targeted formula that aids in calcium metabolism, improves bone density, and supports joint mobility.</p>
        
        <h3>Key Ingredients & Their Benefits:</h3>
        <ul>
          <li>Calcitriol (Active Vitamin D3): Helps your body absorb calcium effectively and regulates bone mineralization.</li>
          <li>Calcium Carbonate: Essential for building and maintaining strong bones and teeth.</li>
          <li>Zinc: Supports bone tissue growth and repair.</li>
          <li>Magnesium: Vital for bone structure and prevents calcium loss from bones.</li>
          <li>Vitamin K2-7: Directs calcium to the bones and prevents its accumulation in arteries.</li>
          <li>Vitamin B12: Supports bone marrow function and red blood cell formation.</li>
          <li>L-Methyl Folate: Active form of folic acid that aids in cell repair and bone regeneration.</li>
        </ul>
      </BlogSection>

      <Section id="about">
        <h2>Why Bonura-Max?</h2>
        <ul>
          <li>Developed and tested by Urena Pharma with a focus on complete skeletal support</li>
          <li>Ideal for all age groups, including elderly individuals and postmenopausal women</li>
          <li>Softgel form ensures better absorption and easier digestion</li>
          <li>Helps prevent osteoporosis, fractures, and calcium deficiency-related complications</li>
        </ul>
      </Section>

      <Section id="contact">
        <h2>Contact Us</h2>
        <p>Stay Strong, Stay Active — Choose Bonura-Max by Urena Pharma</p>
      </Section>
    </AppContainer>
  );
}

export default App; 
 