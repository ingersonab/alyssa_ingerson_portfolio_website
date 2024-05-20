import data from "../../data/index.json";

export default function MySkills(){
    /*<p className="skills-section-description">{item.description}</p>*/
    return(
        <section className="skills-section" id="MySkills">
            <div className="portfolio-container" style={{padding: "60px"}}>
                <div className="portfolio-container-box">
                    <h2 className="skills-section-heading" style={{paddingBottom: "50px"}}>
                        My Skills
                    </h2>
                    <div>
                        <button className="btn btn-resume">
                            View My Resume
                        </button>
                    </div>
                    
                </div>
                <div className="skills-section-container">
                    {data?.skills?.map((item, index) => (
                        <div key={index} className="skills-section-card">
                            <div className="skills-section-img">
                                <img src={item.src} alt="Product Chain"/>
                            </div>
                            <div className="skills-section-card-content">
                                <h3 className="skills-section-title">{item.title}</h3>
                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}