import data from "../../data/index.json";

export default function MySkills(){
    return(
        <section className="skills-section" id="MySkills">
            <div className="portfolio-container" style={{padding: "60px"}}>
                <div className="portfolio-container-box">
                    <h2 className="skills-section-heading" style={{paddingBottom: "50px"}}>
                        My Skills
                    </h2>
                    <div>
                        <a 
                            href="/Alyssa_Ingerson_Resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{textDecoration: "none"}}
                        >
                            <button className="btn btn-resume">View My Resume</button>
                        </a>
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
                                <p className="skills-section-description">{item.description}</p>
                                <h2 className="skills-section-skill-level">{item.skill}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}