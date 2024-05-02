const MainIntro=()=>{
    return <>
    <h1>Jio Mere Sher</h1>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-primary">
          <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
          <a href="/Compose" class="btn btn-primary">
        <button type="button" className="btn btn-primary">Compose</button></a>
         <a href="/Inbox" class="btn btn-primary">
         <button type="button" className="btn btn-primary">Inbox</button></a>
            <button type="button" className="btn btn-primary">Spam</button>
            <button type="button" className="btn btn-primary">Button</button>
          </div>
        </div>
        <div className="col-md-9 bg-light">
        <p>Lele</p>
        </div>
      </div>
    </div>
    </>
};
export default MainIntro;