import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-lg-5 p-3 m-3">
        <div className="col-lg-6 col-md-12 p-lg-5 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browser help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do i activate F&Q, why is my order getting rejected." />
          <br />
          <div className="mt-4">
            <a href="">Track account opening</a> &nbsp; &nbsp;
            <a href="">Track segment activation</a> &nbsp; &nbsp;
            <a href="">Intraday margins</a> &nbsp; &nbsp;
            <a href="">Kite user manual</a> &nbsp; &nbsp;
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-lg-5 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol className="p-2">
            <li className="mb-2">
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
