import React from 'react';
import './App.css';

function App() {
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];
    return (
        <div className="App">
            <header className="App-header">
                <h1>E-commerce App</h1>
            </header>
            <main>
                <section className="product-list">
                    <h2>Products</h2>
                    <div className="products">
                        {products.map(product => (
                            <div key={product.id} className="product">
                                <h3>{product.name}</h3>
                                <p>Price: ${product.price}</p>
                                <button>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 E-commerce App</p>
            </footer>
        </div>
    );
}

export default App;
