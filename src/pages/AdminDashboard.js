import React from 'react';
import '../AdminDashboard.css';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-section">
                <div className="dashboard-card">
                    <h2>Staff Overview</h2>
                    <p>Total Staff: 25</p>
                    <p>Departments: 5</p>
                    <p>Active Staff: 23</p>
                </div>
                <div className="dashboard-card">
                    <h2>Artisan Details</h2>
                    <p>Total Artisans: 120</p>
                    <p>Active Artisans: 100</p>
                    <p>Inactive Artisans: 20</p>
                </div>
            </div>

            <div className="dashboard-section">
                <div className="dashboard-card">
                    <h2>Profit Overview</h2>
                    <p>Total Profits: Rs.50,000</p>
                    <p>Last Month's Profits: Rs.5,000</p>
                </div>
                <div className="dashboard-card">
                    <h2>Deals & Spreads</h2>
                    <p>Ongoing Deals: 15</p>
                    <p>New Deals: 4</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
