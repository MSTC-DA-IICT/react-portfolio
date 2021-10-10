
import master from '../master'
import Services_box from '../Services_box';

function Services(){
    return(
        <>
        {/* SERVICES SECTION */}
            <section className="services" id="services">
                <div className="container">
                <h2 className="title">My Services</h2>
                <div className="services-content">
                    {master.services.map((servicenum,count=0)=>{
                        console.log(servicenum.name);
                        console.log(servicenum.desc);
                        count = count + 1;
                     return (<Services_box name={servicenum.name} desc={servicenum.desc} key={count}/>)
                    })}
                </div>
                </div>
            </section>
            <hr></hr>
        </>
    );
}

export default Services;