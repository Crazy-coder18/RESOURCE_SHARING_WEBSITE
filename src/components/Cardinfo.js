import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Cardinfo() {
  const location = useLocation();
  const { cardData } = location.state || { cardData: {} };
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      marginBottom:'10px',
    },
    container: {
      border: '2px solid aqua',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '80%',
      maxWidth: '600px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      position: 'relative',
    },
    
    h1: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px',
    },
    h4: {
      margin: 0,
      color: '#555',
    },
    topRightImageContainer: {
      border: '1px solid yellow',
      padding: '5px',
      position: 'absolute',
      top: '60px', /* Adjusted to position below the Product Details heading */
      right: '20px',
      width: '150px',
      height: '150px',
      boxSizing: 'border-box',
      backgroundColor: '#fff',
    },
    topRightImageContainerImg: {
      maxWidth: '100%',
      maxHeight: '100%',
      height: 'auto',
      objectFit: 'cover',
    },
    bottomImageContainer: {
      border: '2px solid aqua',
      width: '380px',
      height: '200px',
      margin: '7px auto 0',
      padding: '5px',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomImageContainerImg: {
      maxWidth: '100%',
      maxHeight: '100%',
      height: 'auto',
      objectFit: 'cover',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={{"textAlign":"center","color":"grey"}}> Product Details</h1>
        <h4 style={{"fontSize":"15px"}}><b style={{"fontSize":"20px"}}>Item Name:</b>:{cardData.title}</h4>
        <h4 style={{"fontSize":"15px"}}><b style={{"fontSize":"20px"}}>Description:</b>{cardData. description}</h4>
        <h4 style={{"fontSize":"15px"}}><b style={{"fontSize":"20px"}}>Category:</b>{cardData.itemc}</h4>
        <h4 style={{"fontSize":"15px"}}> <b style={{"fontSize":"20px"}}>Name of the Person:</b>{cardData.person}</h4>
        <h4 style={{"fontSize":"15px"}}> <b style={{"fontSize":"20px"}}>Contact Number of the Person:</b>{cardData.contact}</h4>
        <h4 style={{"fontSize":"15px"}}> <b style={{"fontSize":"20px"}}>Email of the Person:</b>{cardData.email}</h4>
        <h4 style={{"fontSize":"15px"}}><b style={{"fontSize":"20px"}}>Address:</b>{cardData.address}</h4>
        <div style={styles.bottomImageContainer}>
          <img src={cardData.image} alt="Bottom Image" style={styles.bottomImageContainerImg} />
        </div>
      </div>
    </div>
  );
}

