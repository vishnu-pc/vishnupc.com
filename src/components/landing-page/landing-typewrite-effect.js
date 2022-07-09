import React from 'react';
import './landing-typewrite-effect.scss';
import Typewriter from "typewriter-effect";
import { useState } from 'react';

export function LandingTypewriteEffect() {

    const [showTypedText, setShowTypedText] = useState(false)
    const knowMoreAboutMe = () => setShowTypedText(true)

    return (<>
                <div className='landing-video-section'>
                    
                    {/* <video autoPlay loop muted>
                        <source src = "/assets/videos/hello-nihao.mp4" type='video/mp4' />
                    </video> */}
                    <p>
                    <div className='introduction'>
                        <div className='intro-heading'>Hello, I'm Vishnu.</div><br />
                        A Freelance Business Developer<br /> 
                        <div className="intro-more">
                            Click for more <input type="submit" className='know-more-button' 
                            value=">>" onClick={knowMoreAboutMe} />
                        </div>
                    </div>
                    <br></br><br></br>
                    { showTypedText ? <Results /> : null }
                    </p>
                </div>
            </>
        );
}

const Results = () => (
    <div id="results" className="search-results">
        <Typewriter
            options={{
                delay: 100,
            }}
            onInit={(typewriter)=> {
            typewriter
            // "I aspire to create simplistic and innovative solutions to known real world problems. "
            .typeString("Rethink what problem solving can mean for your business growth.")
            .pauseFor(2000)
            .deleteAll(0.01)
            .typeString("Stand out in this evolving world of work and reach your ideal customers witout a hassle.")
            .pauseFor(2000)
            .deleteAll(0.01)
            .typeString("I have helped global brands achieve their business transition goals through strategic problem solving and it's real world implementation.")
            .pauseFor(2000)
            .deleteAll(0.01)
            .typeString("Some key business problems may be limiting the scalability of your business.")
            .pauseFor(2000)
            .deleteAll(0.01)
            .typeString("Let me help you in this journey so that your time can be better utilized.")
            .pauseFor(2000)
            .deleteAll(0.01)
            .typeString("Contact me on WhatsApp and we can get started.")
            .pauseFor(2000)
            .start();
            }}
        />
    </div>
)