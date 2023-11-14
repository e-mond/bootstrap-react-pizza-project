import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <div className="row type-box">
                <div className="col-md-3 box2">
                    <div className="thumbnail">
                        <img src={this.props.imgSrc} className="card-img-top" alt="Pizza" />
                        <h1 className="item-title">{this.props.title}</h1>
                        <div className="card-body">
                            <p className="card-text item-text">{this.props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
