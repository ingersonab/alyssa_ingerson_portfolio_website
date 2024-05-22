export default function ContactMe() {
    /*
    <form className="contact-form-container">
                <div className="container">
                    <label htmlFor="first-name" className="contact-label">
                        <span className="text-md">First Name</span>
                        <input
                            type="text"
                            className="contact-input text-md"
                            name="first-name"
                            id="first-name"
                            required
                        />
                    </label>
                    <label htmlFor="last-name" className="contact-label">
                        <span className="text-md">Last Name</span>
                        <input
                            type="text"
                            className="contact-input text-md"
                            name="last-name"
                            id="last-name"
                            required
                        />
                    </label>
                    <label htmlFor="email" className="contact-label">
                        <span className="text-md">Email</span>
                        <input
                            type="text"
                            className="contact-input text-md"
                            name="email"
                            id="email"
                            required
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact-label">
                        <span className="text-md">Phone Number</span>
                        <input
                            type="number"
                            className="contact-input text-md"
                            name="phone-number"
                            id="phone-number"
                            required
                        />
                    </label>
                </div>
                <label htmlFor="message" className="contact-label">
                    <span className="text-md">Message</span>
                    <textarea
                        className="contact-input text-md"
                        id="message"
                        rows="8"
                        placeholder="Type your message..."
                    />
                </label>
                <div>
                    <button className="btn btn-primary contact-form-btn">
                        Submit
                    </button>
                </div>
            </form>
    */ 
    return (
        <section id="Contact" className="contact-section">
            <img src="./img/ContactMe_Photo.jpg" alt="About Me" height="300" width="300"/>
            <div className="sub-title">
                <p className="sub-title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">
                    I'm looking for new projects to work on, so please reach out if you have any ideas!
                </p>    
            </div>
            <div>
                <div className="contact-info">
                    <svg 
                        fill="#000000" 
                        width="32" 
                        height="32" 
                        viewBox="0 0 32 32" 
                        style={{fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2"}}
                        version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" 
                    >
                        <path d="M31,10c0,-1.326 -0.527,-2.598 -1.464,-3.536c-0.938,-0.937 -2.21,-1.464 -3.536,-1.464c-5.322,0 -14.678,0 -20,0c-1.326,-0 -2.598,0.527 -3.536,1.464c-0.937,0.938 -1.464,2.21 -1.464,3.536c0,3.486 0,8.514 0,12c-0,1.326 0.527,2.598 1.464,3.536c0.938,0.937 2.21,1.464 3.536,1.464c5.322,-0 14.678,-0 20,-0c1.326,0 2.598,-0.527 3.536,-1.464c0.937,-0.938 1.464,-2.21 1.464,-3.536c0,-3.486 0,-8.514 0,-12Zm-26.556,-0.221c-0,-0 5.145,4.237 8.372,6.894c1.849,1.523 4.519,1.52 6.365,-0.007c3.237,-2.677 8.413,-6.959 8.413,-6.959c0.425,-0.352 0.485,-0.983 0.133,-1.408c-0.351,-0.425 -0.982,-0.485 -1.408,-0.133c0,-0 -5.176,4.281 -8.412,6.959c-1.108,0.916 -2.71,0.918 -3.82,0.004c0,0 -8.372,-6.894 -8.372,-6.894c-0.426,-0.351 -1.056,-0.29 -1.407,0.136c-0.351,0.426 -0.29,1.057 0.136,1.408Z"/>
                                    
                        <g id="Icon"/>
                    </svg>       
                    <p>aingerson121@gmail.com</p>
                </div>
                <br/>
                <a
                    href="mailto:aingerson121@gmail.com"
                    className="navbar-content"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="btn btn-primary contact-form-btn">
                        Reach Out
                    </button>
                </a>
            </div>
            
        </section>
    )
}