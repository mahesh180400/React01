import React from 'react';
import Inbox from './Inbox';
const MainIntro = () => {
  return (
    <div>
      <h1 className="text-center mt-4 mb-4">House For Email</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="btn-group-vertical w-100 mb-4" role="group" aria-label="Vertical button group">
              <a href="/Compose" className="btn btn-primary btn-block mb-2">Compose</a>
              <a href="/Main" className="btn btn-primary btn-block mb-2">Inbox</a>
              <button type="button" className="btn btn-primary btn-block mb-2">Spam</button>
              <button type="button" className="btn btn-primary btn-block mb-2">Button</button>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card bg-light h-100">
              <div className="card-body">
                <Inbox></Inbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainIntro;
