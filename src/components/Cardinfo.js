import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

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
    },
    container: {
      border: '2px solid aqua',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
      width: '80%',
      maxWidth: '600px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      position: 'relative',
    },
    header: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '15px',
      fontSize: '24px',
    },
    subHeader: {
      color: '#555',
      fontSize: '16px',
      margin: '5px 0',
    },
    label: {
      fontWeight: 'bold',
      fontSize: '18px',
      color: '#007BFF',
    },
    bottomImageContainer: {
      border: '2px solid aqua',
      width: '100%',
      height: '200px',
      margin: '10px 0 0',
      padding: '5px',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '8px',
      overflow: 'hidden',
    },
    bottomImageContainerImg: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'cover',
    },
  };

  return (
    <>
    <Navbar />
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.header}>Product Details</h1>
        <h4 style={styles.subHeader}>
          <span style={styles.label}>Item Name:</span> {cardData.title}
        </h4>
        <h4 style={styles.subHeader}>
          <span style={styles.label}>Description:</span> {cardData.description}
        </h4>
        <h4 style={styles.subHeader}>
          <span style={styles.label}>Category:</span> {cardData.itemc}
        </h4>
        <h4 style={styles.subHeader}>
          <span style={styles.label}>Name of the Person:</span> {cardData.person}
        </h4>
        <h4 style={styles.subHeader}>
          <span style={styles.label}>Contact Number:</span> {cardData.contact}
        </h4>
        <h4 style={styles.subHeader}>
          <span style={styles.label}>Email:</span> {cardData.email}
        </h4>
        <h4 style={styles.subHeader}>
          <span style={styles.label}>Address:</span> {cardData.address}
        </h4>
        <div style={styles.bottomImageContainer}>
          <img src={cardData.image} alt="Product" style={styles.bottomImageContainerImg} />
        </div>
      </div>
    </div>
    </>
  );
}
