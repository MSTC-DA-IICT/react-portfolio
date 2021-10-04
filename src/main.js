import mainimg from './image/mainimg.jpg'
function Main(){
    return(
        <>
            {/* MAIN */}
      
        <section className="main" id="main">
            <div className="main-container">
              <div className="center">
              <span id="lineintro"></span>
              </div>
              <div className="main-content">
                <h1 className="text-1">Hello, I am </h1>
                <h1 className="text-2">#ME</h1>
              </div>
              <div className="main-image">
                <img src={mainimg} alt="image" className="image" />
              </div>
            </div>
        </section>
        </>
    );
}

export default Main;
