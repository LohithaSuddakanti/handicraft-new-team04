import React from 'react';
import '../ArtisanDashboard.css';

const ArtisanDashboard = () => {
    // Example data
    const artisanData = {
        name: 'Kumar',
        id: 'ART12345',
        gender: 'Male',
        totalItemsSold: 150,
        itemTypes: ['Handicrafts', 'Woodwork', 'Pottery'],
        rating: 4.8,
        location: 'Prakasam',
    };

    return (
        <div className="dashboard-container">
            <h1>Welcome, {artisanData.name}</h1>
            <div className="basic-info">
                <h2>Basic Information</h2>
                <p><strong>ID:</strong> {artisanData.id}</p>
                <p><strong>Gender:</strong> {artisanData.gender}</p>
                <p><strong>Location:</strong> {artisanData.location}</p>
            </div>

            <div className="stats">
                <h2>Artisan Stats</h2>
                <p><strong>Total Items Sold:</strong> {artisanData.totalItemsSold}</p>
                <p><strong>Item Types:</strong> {artisanData.itemTypes.join(', ')}</p>
                <p><strong>Rating:</strong> {artisanData.rating} / 5</p>
            </div>

            <div className="inventory">
                <h2>Inventory</h2>
                <ul>
                    {artisanData.itemTypes.map((type, index) => (
                        <li key={index}>{type}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ArtisanDashboard;
