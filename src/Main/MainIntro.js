import React from 'react';
import Inbox from './Inbox';
const MainIntro = () => {
  return (
    <div className="custom-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
      <div className="container"   style={{ borderRadius: '30px', border: '2px solid black' }}>
        <div className="row">
          <div className="col-md-3">
            <div className="btn-group-vertical w-100 mb-4" role="group" aria-label="Vertical button group">
          
              <a href="/Compose" className="btn btn-dark btn-block mb-2"  style={{ borderRadius: '20px' }}>Compose</a>
              <a href="/Main" className="btn btn-dark btn-block mb-2"  style={{ borderRadius: '20px' }}>Inbox</a>
              <a href="/SendBox" className="btn btn-dark btn-block mb-2"  style={{ borderRadius: '20px' }}>Send Box</a>
              <button type="button" className="btn btn-dark  btn-block mb-2"  style={{ borderRadius: '20px' }} >Button</button>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card-body">
                <Inbox />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default MainIntro;
