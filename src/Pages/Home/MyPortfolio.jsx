import data from "../../data/index.json"

export default function MyPortfolio() {
    return <section className="portfolio-section" id="MyPortfolio">
        <div className="portfolio-container-box">
            <div className="portfolio-container">
                <p className="sub-title">Recent Projects</p>
                <br/>
               <h2 className="section-heading">My Portfolio</h2>
            </div>
            <div>
                <a href="https://github.com/ingersonab" style={{textDecoration: "none"}}>
                    <button className="btn btn-github">View My GitHub</button>
                </a>
            </div>
        </div>
        <div className="portfolio-section-container">
            {data?.portfolio?.map((item, index) =>
                <div key={index} className="portfolio-section-card">
                    <div className="portfolio-section-img">
                        <img src={item.src} alt="Placeholder"/>
                    </div>
                    <a href={item.href} style={{textDecoration: "none"}}>
                    <div className="portfolio-section-card-content">
                        <div>
                            <h3 className="portfolio-section-title">{item.title}</h3>
                            <p className="text-md">{item.description}</p>
                            <br/>
                            <p className="text-sm" style={{color: "gray"}}>{item.tech}</p>
                        </div>
                        <p className="text-sm portfolio--link">
                            {item.link} &nbsp;
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 20 19"
                                fill="none"
                            >
                                <path
                                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                    stroke="currentColor"
                                    stroke-width="2.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </p>
                    </div>
                    </a>
                </div>
                
            )}
        </div>
    </section>
}