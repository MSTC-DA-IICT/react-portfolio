import mainImage from './image/mainimg.png';
function Main() {
  return (
    <>
      {/* MAIN */}

      <section className="main" id="main">
        <div className="main-container">
          <div className="main-content">
            <h1 className="text-1">Hello, I am </h1>
            <h1 className="text-2">#ME</h1>
          </div>
          <div className="main-image">
            <img src={mainImage} alt="image" className="image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
