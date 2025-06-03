import React, { useState } from 'react';

export default function Card(props) {
    const [quantity, setQuantity] = useState(1);
    const [selectedItem, setSelectedItem] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    let options = props.options;
    let priceOptions = Object.keys(options);

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleItemChange = (e) => {
        setSelectedItem(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Selected Item: ${selectedItem}, Quantity: ${quantity}`);

        // Show the alert
        setShowAlert(true);

        // Hide the alert after 3 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };
    console.log(props.imgSrc);
    // Get a random image from Unsplash
    const randomImageUrl = "https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=600";
    return (
        <div>
            <div className="card bg-dark text-light m-2 " style={{ "width": "13rem", "backgroundColor": "grey", }}>
                <img src={props.imgSrc} className="card-img-top" alt="Random" />
                
                <div className="card-body">
                    <h5 className="card-title">{props.foodName}</h5>
                    <p className="card-text">Some imp text</p>
                    <form onSubmit={handleSubmit}>
                        <div className="row g-2">
                            <div className="col-auto">
                                <label htmlFor="itemSelect" className="form-label visually-hidden">Select Item</label>
                                <select
                                    id="itemSelect"
                                    className="form-select text-light"
                                    value={selectedItem}
                                    onChange={handleItemChange}
                                    style={{
                                        width: "6rem",
                                        height: "2rem",
                                        backgroundColor: "#28a745",
                                        borderColor: "#28a745"
                                    }}
                                >
                                    {
                                        priceOptions.map((data) => {
                                            return <option key={data} value={data}>{data}</option>
                                            
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-auto">
                                <label htmlFor="quantity" className="form-label visually-hidden">Quantity</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="quantity"
                                    min="1"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    style={{ width: "4rem", height: "2rem" }}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Add to Cart</button>
                    </form>
                    {showAlert && (
                        <div className="alert alert-success mt-3" role="alert">
                            Item added to cart!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
