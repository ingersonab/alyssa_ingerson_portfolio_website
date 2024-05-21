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
                        version="1.0" 
                        xmlns="http://www.w3.org/2000/svg"
                        width="32" 
                        height="32" 
                        viewBox="0 0 512 512"                 
                    >

                        <g 
                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#000000" 
                            stroke="none"
                        >
                            <path d="M593 4060 c-56 -12 -96 -33 -139 -77 -36 -36 -73 -104 -74 -135 0 -10 363 -256 1078 -726 593 -391 1085 -714 1093 -717 20 -8 2183 1416 2187 1439 5 25 -37 104 -76 143 -19 20 -56 45 -81 57 l-46 21 -1950 1 c-1072 1 -1969 -2 -1992 -6z"/>
                            <path d="M370 2560 c0 -523 3 -950 6 -950 3 0 334 208 736 462 592 374 727 463 716 474 -11 10 -828 551 -1300 860 l-158 104 0 -950z"/>
                            <path d="M4022 3029 c-398 -262 -728 -481 -733 -486 -6 -6 254 -176 722 -472 402 -254 733 -461 735 -458 2 2 3 429 2 949 l-3 944 -723 -477z"/>
                            <path d="M1238 1827 c-471 -298 -857 -546 -857 -552 -1 -24 49 -113 80 -144 19 -19 54 -44 79 -55 l45 -21 1985 0 1985 0 40 22 c75 40 145 133 145 192 0 14 -202 146 -837 547 -461 290 -848 534 -859 541 -20 13 -36 4 -213 -112 -210 -138 -251 -159 -291 -151 -15 3 -120 66 -234 140 -113 75 -207 136 -209 136 -1 0 -388 -245 -859 -543z"/>
                        </g>
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