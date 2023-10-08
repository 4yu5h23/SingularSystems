import React from 'react'
import './Support.css'

function Support() {
  return (
    <div className='container-fluid' id='supportId'>
      <div className="support-element" id='support-text'>
        <img src="/images/supportimg-1.png" alt="not found" />
        <img src="/images/supportimg-2.png" alt="not found" />
      </div>
      <div className="support-element" id='warranty'>
        <h1 className='warranty-head'>Warranty Terms*</h1>
        <p className='warranty-para'>All <span>SingularSystems</span> PCs come with a base warranty of one year that includes on-site repairs, software support over call and part replacements.</p>
        <p className='warranty-para'>You should not worry about contacting individual companies for the replacement part for the term of your warranty.</p>
        <p className='warranty-para'>The warranty does not cover damage caused by misuse, accidents, or natural disasters.
          If a certain part warranty does offer free replacement for any of the reasons that our warranty does not cover, we will replace the part free of cost, but service charges may apply.</p>
      </div>
      <div classNameName="support-element container-fluid" id="contact">
        <h1>Contact Us</h1>
        <form>
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form3Example1">First name</label>
                <input type="text" id="form3Example1" class="form-control" />
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form3Example2">Last name</label>
                <input type="text" id="form3Example2" class="form-control" />
              </div>
            </div>
          </div>

          {/* <!-- Email input --> */}
          <div className="row mb-4">
            <div className="col">
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">Email address</label>
                <input type="email" id="form3Example3" class="form-control" />
              </div>
            </div>
            {/* Phone input  */}
            <div className="col">
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">Phone Number</label>
                <input type="number" id="form3Example3" class="form-control" />
              </div>
            </div>
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example4">Address</label>
            <input type="text" id="form3Example4" class="form-control" />
          </div>

          {/* Subject input  */}
          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example4">Subject</label>
            <input type="text" id="form3Example4" class="form-control" />
          </div>

          {/* Description input  */}
          <div class="form-outline mb-4">
            <label class="form-label" for="form4Example3">Description</label>
            <textarea class="form-control" id="form4Example3" rows="4"></textarea>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" class="btn btn-block mb-4">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Support
