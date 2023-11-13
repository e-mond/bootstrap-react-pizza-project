import React from 'react'



class  carousel extends React.Component{
    render(){
        return <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src="images/Pizza.jpg" height="700vh" className="d-block w-100" alt="Pizza" />
          </div>
          <div className="carousel-item">
          <img src="images/Pizza2.jpg" height="700vh" className="d-block w-100" alt="Pizza" />
          </div>
          <div className="carousel-item">
          <img src="images/Pizza1.jpg" height="700vh" className="d-block w-100" alt="Pizza" />
          </div>
        </div>
      </div>
    }
       
}

export default carousel;