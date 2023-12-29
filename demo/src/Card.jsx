import React from 'react'

function Card() {
  return (
    <div className="card" style={{ paddingTop: "100px", paddingBottom: "100px", border: "0" }}>
      <div classname="container" style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div className="row" style={{ justifyContent: "center", display: "flex" }}>
          <div className="info" style={{ textAlign: "center" }}>
            <h2 className='fonts-app' style={{ fontSize: "46px", fontWeight: "400", paddingBottom: "15px", lineHeight: "1.2" }}>FOR A SWEET DAY</h2>
            <p style={{ color: "#8594b8", fontSize: "20px", paddingBottom: "15px", lineHeight: "2" }}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.<br></br> Voluptate exercitation incididunt</p>
          </div>
          <div className="card" style={{ width: '25rem', margin: "20px", cursor: "pointer" }}>
            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-1.jpg" style={{ height: "350px", objectFit: "contain" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ textAlign: "center" }}>
              <a className="card-text fonts-app" style={{ textDecoration: "none", color: "black", fontSize: "23px" }}>Italian Loaf</a>
              <h3 className='fonts-app' style={{ paddingTop: "10px", paddingBottom: "10px" }}>$4.99</h3>
              <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/arrow.svg" alt="" />
            </div>
          </div>
          <div className="card" style={{ width: '25rem', margin: "20px", cursor: "pointer" }}>
            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-2.jpg" style={{ height: "350px", objectFit: "contain" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ textAlign: "center" }}>
              <a className="card-text fonts-app" style={{ textDecoration: "none", color: "black", fontSize: "23px" }}>Croissant Italy Cake</a>
              <h3 className='fonts-app' style={{ paddingTop: "10px", paddingBottom: "10px" }}>$5.00</h3>
              <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/arrow.svg" alt="" />
            </div>
          </div>
          <div className="card" style={{ width: '25rem', margin: "20px", cursor: "pointer" }}>
            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-3.jpg" style={{ height: "350px", objectFit: "contain" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ textAlign: "center" }}>
              <a className="card-text fonts-app" style={{ textDecoration: "none", color: "black", fontSize: "23px" }} >Chocolate Muffin</a>
              <h3 className='fonts-app' style={{ paddingTop: "10px", paddingBottom: "10px" }}>$7.55</h3>
              <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Card
