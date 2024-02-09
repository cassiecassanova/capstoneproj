import Img1 from "./assets/carousel-img1.jpg";
import Img2 from "./assets/carousel-img2.jpg";
import Img3 from "./assets/carousel-img3.jpg";
import Img4 from "./assets/carousel-img4.jpg";
import Img5 from "./assets/carousel-img5.jpg";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="homepage-container">
      <div className="homepage-header-container">
        <h1 className="homepage-header">
          You Have the Fluff, We Have the Stuff!
        </h1>
      </div>
      <div
        className="carousel-container"
        data-ride="carousel"
        data-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="carousel-img" src={Img1} />
          </div>
          <div className="carousel-item">
            <img className="carousel-img" src={Img2} />
          </div>
          <div className="carousel-item">
            <img className="carousel-img" src={Img3} />
          </div>
          <div className="carousel-item">
            <img className="carousel-img" src={Img4} />
          </div>
          <div className="carousel-item">
            <img className="carousel-img" src={Img5} />
          </div>
        </div>
      </div>
      <div className="homepage-desc-container">
        <p className="homepage-desc">
          We have an assortment of products to cater to every want, need, or
          desire for your furry, feathery, or scaly companion.
        </p>
        <p className="homepage-desc">
          Peruse our fine selection of pet oriented products on our <a href="Products">Products</a> page!
        </p>
        <p className="homepage-desc">
          {`Don't forget to checkout your <a href="Cart">Cart</a> at the end of
          your visit.`}
        </p>
      </div>
    </div>
  );
}

export default Home;
