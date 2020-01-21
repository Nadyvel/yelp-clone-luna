import React, { useState } from "react";
import { connect } from 'react-redux';
import './newRestaurantForm.css';
import InputAndLabel from "../InputAndLabel/InputAndLabel";
import OrangeButton from "../OrangeButton/OrangeButton";

const NewRestaurantForm = props => {
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
    <div className="restaurantForm">
        <div>
        <h5 className="restaurantTitle">CREATE NEW RESTAURANT</h5>
        <span className="headLine"></span>
        </div>

        <form className="formWrapper">

            <p className="mainTitle">Basic</p>
            <div className="row1">   
                <InputAndLabel name="name" label="Name *" value={state.name} onChange={handleChange}/>
                <InputAndLabel name="category" label="Category *" value={state.category} onChange={handleChange}/>
                <InputAndLabel name="country" label="Country *" value={state.country} onChange={handleChange}/>
            </div>

            <p className="mainTitle">Address</p>
            <div className="row2">   
                <InputAndLabel name="street" label="Street *" value={state.street} onChange={handleChange}/>
                <InputAndLabel name="city" label="City *" value={state.city} onChange={handleChange}/>
                <InputAndLabel name="zip" label="Zip" value={state.zip} onChange={handleChange}/>
            </div>

            <p className="mainTitle">Contact</p>
            <div className="row3">   
                <InputAndLabel name="website" label="Website" value={state.website} onChange={handleChange}/>
                <InputAndLabel name="phone" label="Phone *" value={state.phone} onChange={handleChange}/>
                <InputAndLabel name="email" label="Email" value={state.email} onChange={handleChange}/>
            </div>

            <p className="mainTitle">Details</p>
            <div className="row4">   
                <InputAndLabel name="opening_hours" label="Opening Hours *" value={state.opening_hours} 
                onChange={handleChange}/>
                <InputAndLabel name="price_level" label="Price level" value={state.price_level} 
                onChange={handleChange}/>

             <div className="imageButton">   
                <label className="labelImage">Image</label>
                <button className="buttonImage" value={state.image} onChange={handleChange}>CHOOSE A FILE..</button>
             </div>
            </div>
            
            <div className="submitButton">
                <OrangeButton content="SUBMIT"/> 
            </div>
        </form>
    </div>
)

}

export default connect()(NewRestaurantForm);