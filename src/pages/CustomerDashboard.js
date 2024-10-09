import React from 'react';
import '../CustomerDashboard.css';
import handicraft1 from '../assets/photo_6339313596969894266_y.jpg'; // Replace with your actual image filenames
import handicraft2 from '../assets/photo_6339313596969894267_x.jpg';
import handicraft3 from '../assets/photo_6339313596969894289_y.jpg';

const CustomerDashboard = () => {
    const products = [
        {
            id: 1,
            name: 'Handicraft Item 1',
            price: 'Rs.250.00',
            stock: 'In Stock',
            image: handicraft1,
        },
        {
            id: 2,
            name: 'Handicraft Item 2',
            price: 'Rs.350.00',
            stock: 'In Stock',
            image: handicraft2,
        },
        {
            id: 3,
            name: 'Handicraft Item 3',
            price: 'Rs.150.00',
            stock: 'Out of Stock',
            image: handicraft3,
        },
    ];

    return (
        <div className="customer-dashboard">
            <h1>Customer Dashboard</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2 className="product-title">{product.name}</h2>
                        <p className="product-price">{product.price}</p>
                        <p className="product-stock">{product.stock}</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerDashboard;
