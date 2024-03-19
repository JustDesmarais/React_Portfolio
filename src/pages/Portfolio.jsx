import notes from '../assets/images/notes.jpg'
import techBlog from '../assets/images/techBlog.jpg'
import weather from '../assets/images/weather.jpg'
import coding from '../assets/images/coding.jpg'

import monitor from '../assets/images/monitor.jpg'

import gitIcon from '../assets/images/github-mark.svg'

export default function Portfolio () {
    return (
        <div className="container">
            <h1>Portfolio</h1>
            <section className="row row-cols-2 justify-content-evenly">
                <a href='https://project-too-82a944373894.herokuapp.com/' target="_blank" className="col-4 m-3">
                    <div id="createLab">
                        <h2>CreateLab</h2>
                          <span> 
                            <a href='https://github.com/Kthao29/create-lab/' target="_blank">
                                <img src={gitIcon} alt="GitHub Icon" />
                            </a>
                          </span>
                    </div>
                </a>
                <a href='https://justdesmarais.github.io/Monitor-the-Monitor/' target="_blank" className="col-4 m-3">
                    <div id="monitor">
                        <h2>Monitor the Monitor</h2>
                        <span> 
                            <a href='https://github.com/JustDesmarais/Monitor-the-Monitor' target="_blank">
                                <img src={gitIcon} alt="GitHub Icon" />
                            </a>
                          </span>
                    </div>
                </a>
                <a href='https://code-snippets-6mtb.onrender.com/' target="_blank" className="col-4 m-3">
                    <div id="coding" className="col-4 ">
                        <h2>Just Another Text Editor</h2>
                        <span> 
                            <a href='https://github.com/JustDesmarais/My_Notes' target="_blank">
                                <img src={gitIcon} alt="GitHub Icon" />
                            </a>
                          </span>
                    </div>
                </a>
                <a href='https://stark-harbor-37907-50961bb66833.herokuapp.com/' target="_blank" className="col-4 m-3">
                    <div id="techBlog" className="col-4 ">
                        <h2>TechnoloBlog</h2>
                        <span> 
                            <a href='https://github.com/JustDesmarais/TechnoloBlog' target="_blank">
                                <img src={gitIcon} alt="GitHub Icon" />
                            </a>
                          </span>
                    </div>
                </a>
                <a href='https://cryptic-dusk-35907-97b76dd3d06b.herokuapp.com/ ' target="_blank" className="col-4 m-3">
                    <div id="notes" className="col-4 ">
                        <h2>Daily Notetaker</h2>
                        <span> 
                            <a href='https://github.com/JustDesmarais/Express-Note-Taker' target="_blank">
                                <img src={gitIcon} alt="GitHub Icon" />
                            </a>
                          </span>
                    </div>
                </a>
                <a href='https://justdesmarais.github.io/Weather-Checker/' target="_blank" className="col-4 m-3">
                    <div id="weather" className="col-4 ">
                        <h2>Weather Checker</h2>
                        <span> 
                            <a href='https://github.com/JustDesmarais/Weather-Checker' target="_blank">
                                <img src={gitIcon} alt="GitHub Icon" />
                            </a>
                          </span>
                    </div>
                </a>
            </section>
        </div>
    )
}