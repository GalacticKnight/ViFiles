import React from 'react';
const fund = require('../images/TrustFund.jpg')
const BCCC = require('../images/BCCC.jpg')
const Esports = require('../images/Esports.jpg');
const websiteIcon = require('../images/website.png')
const githubIcon = require('../images/github.png')

const Freelance = () => {
    return (
        <section className='darkSection'>
            <div className='freelanceBox'>
                <h3 className='siteTitles siteHeadings '>Freelance Projects</h3>
                <div className='freelanceProjects'>
                    <div className='freelanceCard'>
                        <img src={BCCC}  alt="website image" />
                        <div>
                            <h6>Brooklyn Community Christian Church</h6>
                            <p>Funding Website <br/> <span className='wordpress'>HTML / CSS / JavaScript </span></p>
                            <div className='projectIcons'>
                                <img src={websiteIcon} onClick={() => window.open('http://bccc-ny.org/')} alt="web icon" />
                            </div>
                        </div>
                    </div>
                    <div className='freelanceCard'>
                        <img src={fund}  alt="website image" />
                        <div>
                            <h6>Trust Fund Registry</h6>
                            <p>Funding Website <br/> <span className='wordpress'>Wordpress / Figma / Flask / Python</span></p>
                            <div className='projectIcons'>
                                <img src={websiteIcon} onClick={() => window.open('https://trustfundregistry.com/')} alt="web icon" />
                            </div>
                        </div>
                    </div>
                    <div className='freelanceCard'>
                        <img src={Esports}  alt="website image" />
                        <div>
                            <h6>Brooklyn College Esports Website</h6>
                            <p>Funding Website <br/> <span className='wordpress'>HTML / CSS / JavaScript/ React.js </span></p>
                            <div className='projectIcons'>
                                <img src={githubIcon} onClick={() => window.open('https://github.com/GalacticKnight/Deploy-React-Esports-Site')} alt="web icon" />
                                <img src={websiteIcon} onClick={() => window.open('https://cunybcesports.onrender.com/')} alt="web icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='freelanceProjects'>
                    
                </div>
            </div>
        </section>
    );
}

export default Freelance;
