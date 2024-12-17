

const Stacks = () => {
  return (
    <section className="stacks-secion" id="stacks-section">
        <div className="section-container">
            <h1 className="title">Stacks</h1>
            <div className="stacks-content">
                <div className="box left">
                    <h5 className="text-title">Hello! I am Fabrice Karenzi, a <span>.NET Web Developer. </span></h5>
                    <p className="paragraph">
                     I have so far worked and still acquiring a great a number of skills that explains the versatility 
                     and highligts both of my frontend and backend expertise, while I try to stay updated with modern development tools.
                    </p>
                    <a href="#">
                        Read more
                    </a>
                </div>
                <div className="box right">
                    <div className="tech-bars">
                        <h5 className="tech-title">Technologies</h5>
                        <div className="tech-type">
                            <span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                            </span>
                            <span className="percentage">90%</span>
                            <div className="progress-bar html"></div>
                        </div>
                    </div>
                    <div className="tech-bars">
                        <div className="tech-type">
                            <span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
                            </span>
                            <span className="percentage">60%</span>
                            <div className="progress-bar css-sass"></div>
                        </div>
                    </div>
                    <div className="tech-bars">
                        <div className="tech-type">
                            <span>                                
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />          
                            </span>
                            <span className="percentage">60%</span>
                            <div className="progress-bar javasript-react"></div>
                        </div>
                    </div>
                    <div className="tech-bars">
                        <div className="tech-type">
                            <span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                            </span>
                            <span className="percentage">50%</span>
                            <div className="progress-bar c#"></div>
                        </div>
                    </div>
                    <div className="tech-bars">
                        <div className="tech-type">
                            <span>
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg" />                       
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" />          
                            </span>
                            <span className="percentage">50%</span>
                            <div className="progress-bar azureDevOps-jira"></div>
                        </div>
                    </div>
                    <div className="tech-bars">
                        <div className="tech-type">
                            <span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                            </span>
                            <span className="percentage">00%</span>
                            <div className="progress-bar azuresqldatabase"></div>
                        </div>
                    </div>
                    <div className="tech-bars">
                        <div className="tech-type">
                            <span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                            </span>
                            <span className="percentage">60%</span>
                            <div className="progress-bar python"></div>
                        </div>
                    </div>
                    <div className="tech-bars">
                        <div className="tech-type">
                            <span> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" />
                            </span>
                            <span className="percentage">60%</span>
                            <div className="progress-bar django"></div>
                        </div>
                    </div>
                    <div className="tech-bars">
                        <div className="tech-type">
                            <span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg" />
                            </span>
                            <span className="percentage">60%</span>
                            <div className="progress-bar git"></div>
                        </div>
                    </div>
                    <div className="tech-bars">
                        <div className="tech-type">
                            <span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                            </span>
                            <span className="percentage">70%</span>
                            <div className="progress-bar figma"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stacks;