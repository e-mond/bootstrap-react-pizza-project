import React from 'react';
import Item from './item'; 

class Types extends React.Component {
    render() {
        return (
            <div>
                <hr />
                <h1 className="text-center" style={{ color: 'rgb(5, 147, 5)' }}>PIZZA TYPES</h1>
                <hr />
                <div className="row type-box">
                    <div className="col-md-3">
                        <Item imgSrc="images/Family.jpg" title="Family Pizza" text="Some quick example text to build on the card" />
                    </div>
                    <div className="col-md-3">
                        <Item imgSrc="images/Cheese.jpg" title="Cheezy Pizza" text="Some quick example text to build on the card" />
                    </div>
                    <div className="col-md-3">
                        <Item imgSrc="images/Pepperoni.jpg" title="Pepperoni Pizza" text="Some quick example text to build on the card" />
                    </div>
                    <div className="col-md-3">
                        <Item imgSrc="images/Veggie.jpg" title="Vegetable Pizza" text="Some quick example text to build on the card" />
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Types;
