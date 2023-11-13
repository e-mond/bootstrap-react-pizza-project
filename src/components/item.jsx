import React from 'react';


class Item extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="card" style="position: absolute, top:50%, left:50%, transform: translate(-50%, -50%)">
                        <img src={this.props.imgSrc} className="card-img-top item-image" alt="Pizza" />
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
