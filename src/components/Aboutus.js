import React from 'react';
import Navbar from './Navbar';


const Aboutus = () => {
  return (
    <>
    <Navbar/>
    <div style={styles.container}>
      <div className="headi">
        <h2 style={styles.heading}>ABOUT THE DEVELOPER</h2>
        <div className="image-container" style={styles.imageContainer}>  
          <div>
            <img src="https://wallpapers.com/images/hd/cartoon-kohli-cricket-4k-3ae01vjqfye2xnn8.jpg" alt="" style={styles.image} />
            <h6 style={{textAlign:"center"}}><b>AKSHAY KIREET</b></h6>
          </div>
        </div>
      </div>
      <div className="content" style={styles.content}>
        <div className="main main-theme">
          <p>
            At CARE GIVE SHARE, we believe in the power of sharing knowledge, skills, and resources to empower individuals and communities. Whether you're a student, educator, professional, or hobbyist, our platform is designed to facilitate seamless sharing and collaboration.
          </p>
        </div>
        <div className="aboutus">
          <h6 style={{textAlign:"center"}}><b>What We Offer:</b></h6>
          <ul>
            <li>Resource Sharing: Explore a vast collection of resources including educational materials, project templates, guides, and more. Share your own resources to contribute to the community.</li>
            <li>Community Collaboration: Connect with like-minded individuals and experts. Join discussions, ask questions, and collaborate on projects in our interactive forums.</li>
            <li>User-Friendly Interface: Our intuitive interface ensures easy navigation and seamless browsing, making it effortless to find and share resources.</li>
          </ul>
          <h6 style={{textAlign:"center"}}><b>Why Choose Us:</b></h6>
          <ul>
            <li>Diverse Content: From academic resources to DIY projects, we cater to a wide range of interests and disciplines.</li>
            <li>Community Driven: Built by a community of enthusiasts, educators, and professionals passionate about sharing knowledge and skills.</li>
            <li>Free and Open: Access resources and participate in discussions for free. Contribute to the community and gain recognition for your expertise.</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Aboutus;

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '20px auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  imageContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    border: '2px solid grey',
    padding: '10px',
    paddingTop: '100px',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  content: {
    flex: '1',
    marginLeft: '20px',
    backgroundColor: '#fff',
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  mainTheme: {
    lineHeight: '1.6',
    color: '#555',
  },
  aboutus: {
    marginTop: '20px',
  },
  h6:{
    textAlign:"center",
  }
};
