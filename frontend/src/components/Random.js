import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Random = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://via.placeholder.com/150" className="img-fluid" alt="Your Image" />
        </div>
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput2">Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput3">Phone Number</label>
              <input type="tel" className="form-control" id="exampleFormControlInput3" placeholder="+1 (555) 555-5555" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Random;
