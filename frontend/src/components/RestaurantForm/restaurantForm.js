import React, { useState } from "react";
import { connect } from 'react-redux';
import './restaurantForm.css';

const RestaurantForm = props => {
    let [state, setState] = useState({
      name: "",
      category: "",
      country: "",
      street: "",
      city: "",
      zip: "",
      website: "",
      phone: "",
      email: "",
      opening_hours: "",
      price_level: "",
      image: ""
    });

    const handleChange = e =>
        setState({ ...state, [e.target.name]: e.target.value });



return(
    <div>
        <h5>CREATE NEW RESTAURANT</h5>
        <form >
            <p>Basic</p>
                <div>
                    <label>Name *</label>
                    <input name="name" value={state.name} onChange={handleChange}/>
                </div>

            <label>Category *</label>
            <input name="category" placeholder="select a value..." value={state.category} onChange={handleChange}/>

            <label>Country *</label>
            <input name="country" placeholder="select a value..." value={state.country} onChange={handleChange}/>

            <p>Address</p>
            <label>Street *</label>
            <input name="street" value={state.street} onChange={handleChange}/>

            <label>City *</label>
            <input name="city" value={state.city} onChange={handleChange}/>

            <label>Zip</label>
            <input name="zip" value={state.zip} onChange={handleChange}/>

            <p>Contact</p>
            <label>Website</label>
            <input name="website" value={state.website} onChange={handleChange}/>

            <label>Phone *</label>
            <input name="phone" value={state.phone} onChange={handleChange}/>

            <label>Email</label>
            <input name="email" value={state.email} onChange={handleChange}/>

            <p>Details</p>
            <label>Opening hours *</label>
            <input name="opening_hours" value={state.opening_hours} onChange={handleChange}/>

            <label>Price level</label>
            <input name="price_level" value={state.price_level} onChange={handleChange}/>

            <label>Image</label>
            <button>CHOOSE A FILE..</button>

            <button> SUBMIT </button>

        </form>
    </div>
)

}

export default connect()(RestaurantForm);