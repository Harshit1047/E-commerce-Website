import React from 'react'


const ContactUs = () => {
    return (
        <div id="contact">
       
          <h1>Need Help? Don't forget to Contact With Us</h1>
          <p className="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s</p>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="item mb-4">
                <div className="row">
                  <div className="col-4">
                    <div className="icon">
                      <i className="fa fa-phone" />
                    </div>
                  </div>
                  <div className="col-8">
                    <span>+234 81400 83755</span>
                    <span>+234 8140083755</span>
                  </div>
                </div>
              </div>
              <div className="item mb-4">
                <div className="row">
                  <div className="col-4">
                    <div className="icon">
                      <i className="fa fa-envelope" />
                    </div>
                  </div>
                  <div className="col-8">
                    <span>ehizeextech@email.com</span>
                    <span>ehizeextech@email.com</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-4">
                    <div className="icon">
                      <i className="fa fa-send" />
                    </div>
                  </div>
                  <div className="col-8">
                    <span>67/A Lake View</span>
                    <span>New York, USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <form>
                <div className="row">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Name" name="name" id="name" />
                  </div>
                  <div className="col">
                    <input type="email" className="form-control" placeholder="Email" name="email" id="email" />
                  </div>
                </div>
                <input type="text" className="form-control" placeholder="Subject" name="subject" id="subject" />
                <textarea placeholder="Message" name="message" rows={7} className="form-control" defaultValue={""} />
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
       
      
      </div>
    )
}

export default ContactUs
