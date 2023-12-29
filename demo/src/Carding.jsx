import React from 'react'

function Carding() {
  return (
    <div className="card" style={{ paddingTop: "100px", paddingBottom: "100px", border: "0" }}>
      <div classname="container" style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div className="row" style={{ justifyContent: "center", display: "flex" }}>
          <div className="info" style={{ textAlign: "center" }}>
            <h2 className='fonts-app' style={{ fontSize: "46px", fontWeight: "400", paddingBottom: "15px", lineHeight: "1.2" }}>OUR PRODUCTS</h2>
            <p style={{ color: "#8594b8", fontSize: "20px", paddingBottom: "15px", lineHeight: "2" }}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.<br></br> Voluptate exercitation incididunt</p>
          </div>
          <div className="card" style={{ width: '18rem', margin: "20px", cursor: "pointer" }}>
            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-8-500x625.jpg" style={{ height: "350px", objectFit: "contain" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ textAlign: "center" }}>
              <a className="card-text fonts-app" style={{ textDecoration: "none", color: "black", fontSize: "23px" }}>Brownie</a>
              <h3 style={{ paddingTop: "10px", paddingBottom: "10px" }}>$4.99</h3>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', margin: "20px", cursor: "pointer" }}>
            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-7-500x625.jpg" style={{ height: "350px", objectFit: "contain" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ textAlign: "center" }}>
              <a className="card-text fonts-app" style={{ textDecoration: "none", color: "black", fontSize: "23px" }}>Red Velvet</a>
              <h3 style={{ paddingTop: "10px", paddingBottom: "10px" }}>$5.00</h3>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', margin: "20px", cursor: "pointer" }}>
            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-6-500x625.jpg" style={{ height: "350px", objectFit: "contain" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ textAlign: "center" }}>
              <a className="card-text fonts-app" style={{ textDecoration: "none", color: "black", fontSize: "23px" }} >Cream Muffin</a>
              <h3 style={{ paddingTop: "10px", paddingBottom: "10px" }}>$4.55</h3>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', margin: "20px", cursor: "pointer" }}>
            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-5-500x625.jpg" style={{ height: "350px", objectFit: "contain" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ textAlign: "center" }}>
              <a className="card-text fonts-app" style={{ textDecoration: "none", color: "black", fontSize: "23px" }} >Macaron Cake</a>
              <h3 style={{ paddingTop: "10px", paddingBottom: "10px" }}>$8.35</h3>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', margin: "20px", cursor: "pointer" }}>
            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-4-500x625.jpg" style={{ height: "350px", objectFit: "contain" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ textAlign: "center" }}>
              <a className="card-text fonts-app" style={{ textDecoration: "none", color: "black", fontSize: "23px" }} >No-bake chocolate</a>
              <h3 style={{ paddingTop: "10px", paddingBottom: "10px" }}>$9.45</h3>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', margin: "20px", cursor: "pointer" }}>
            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-3-500x625.jpg" style={{ height: "350px", objectFit: "contain" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ textAlign: "center" }}>
              <a className="card-text fonts-app" style={{ textDecoration: "none", color: "black", fontSize: "23px" }} >Chocolate Bake</a>
              <h3 style={{ paddingTop: "10px", paddingBottom: "10px" }}>$7.55</h3>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', margin: "20px", cursor: "pointer" }}>
            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-2-500x625.jpg" style={{ height: "350px", objectFit: "contain" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ textAlign: "center" }}>
              <a className="card-text fonts-app" style={{ textDecoration: "none", color: "black", fontSize: "23px" }} >Red Velvet</a>
              <h3 style={{ paddingTop: "10px", paddingBottom: "10px" }}>$6.55</h3>
            </div>
          </div>
          <div className="card" style={{ width: '18rem', margin: "20px", cursor: "pointer" }}>
            <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-1-500x625.jpg" style={{ height: "350px", objectFit: "contain" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ textAlign: "center" }}>
              <a className="card-text fonts-app" style={{ textDecoration: "none", color: "black", fontSize: "23px" }} >Italian Loaf</a>
              <h3 style={{ paddingTop: "10px", paddingBottom: "10px" }}>$1.55</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Carding
