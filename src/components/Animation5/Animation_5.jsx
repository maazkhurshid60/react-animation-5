//Main Imports
import React, { useEffect } from 'react'

// Anime.JS import
import anime from 'animejs/lib/anime.es'

//Style Imports
import './animation_5.style.scss';

export default function Animation5Component() {
    const iconSize = 50

    //Function to animate on scroll
    function animateOnScroll(element, speed=100, offset=0) {
        const scrollPercent = window.scrollY - element.offsetTop;
        return (scrollPercent + offset) / speed;
    }

    useEffect(() => {

        // Created a separate function for the animation so it can be called when needed and it returns anime.js object
        function setUpDesktopSlideUpAnimation(id) {
            return anime({
                targets: [`#${id}`],
                translateY: [50, 0],
                opacity: [0, 1],
                autoplay: false,
                easing: 'easeInOutCubic'
            });
        }

        //Storing Dom Parent Element For
        const parentContainer = window.document.querySelector('.animation-5');

        // Adding an event listener of scroll type to handle the animation
        window.addEventListener('scroll', () => {
            
            // This will trigger the slide up animation for the title
            const dkTitleCont = setUpDesktopSlideUpAnimation('t-heading');
            dkTitleCont.seek((animateOnScroll(parentContainer, 200, 700)) * dkTitleCont.duration);

            // This will trigger the slide up animation for the container 1
            const dkFirstCont = setUpDesktopSlideUpAnimation('r1-c1');
            dkFirstCont.seek((animateOnScroll(parentContainer, 200, 600)) * dkFirstCont.duration);

            // This will trigger the slide up animation for the container 2
            const dkSecondCont = setUpDesktopSlideUpAnimation('r1-c2');
            dkSecondCont.seek((animateOnScroll(parentContainer, 200, 550)) * dkSecondCont.duration);

            // This will trigger the slide up animation for the container 3
            const dkThirdCont = setUpDesktopSlideUpAnimation('r2-c1');
            dkThirdCont.seek((animateOnScroll(parentContainer, 200, 500)) * dkThirdCont.duration);

            // This will trigger the slide up animation for the container 4
            const dkFourthCont = setUpDesktopSlideUpAnimation('r3-c1');
            dkFourthCont.seek((animateOnScroll(parentContainer, 200, 400)) * dkFourthCont.duration);

            // This will trigger the slide up animation for the container 5
            const dkFifthCont = setUpDesktopSlideUpAnimation('r3-c2');
            dkFifthCont.seek((animateOnScroll(parentContainer, 200, 350)) * dkFifthCont.duration);

            // This will trigger the slide up animation for the container 6
            const dkSixthCont = setUpDesktopSlideUpAnimation('r4-c1');
            dkSixthCont.seek((animateOnScroll(parentContainer, 200, 250)) * dkSixthCont.duration);

            // This will trigger the slide up animation for the container 7
            const dkSeventhCont = setUpDesktopSlideUpAnimation('r5-c1');
            dkSeventhCont.seek((animateOnScroll(parentContainer, 200, 100)) * dkSeventhCont.duration);

            // This will trigger the slide up animation for the container 8
            const dkEigthCont = setUpDesktopSlideUpAnimation('r5-c2');
            dkEigthCont.seek((animateOnScroll(parentContainer, 200, 50)) * dkEigthCont.duration);

            // const dkNinthCont = setUpDesktopSlideUpAnimation(null);
            // dkNinthCont.seek((animateOnScroll(parentContainer, 200, )))
        });
       
    }, []);

    return (
        <>
            <div className='star-end-div' /> 
            <div className='animation-5'>

                {/* Row 1 */}
                <div className='row' id='r1'>
                    <div className='container' id='r1-c1'>
                        <h4 className='cont-num'>01</h4>
                        <h3 className='cont-heading'>Include All Voices</h3>
                        <p className='cont-paragraph'>We actively seek and value diverse perspective, ensuring that all voices are heard and respected in our organization at same level.</p>
                    </div>
                    <div className='title-cont' id='t-c'>
                        <h1 className='title' id='t-heading'>Core Values</h1>
                    </div>
                    <div className='container' id='r1-c2'>
                        <h4 className='cont-num'>02</h4>
                        <h3 className='cont-heading'>Supportive Culture</h3>
                        <p className='cont-paragraph'>We foster a supportive and inclusive culture where every team member's growth and well-being matter.</p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className='row' id='r2'>
                    <div className='container' id='r2-c1'>
                        <h4 className='cont-num'>03</h4>
                        <h3 className='cont-heading'>Unlocking Oppurtunities</h3>
                        <p className='cont-paragraph'>We see challenges as opportunities and are dedicated to helping our clients unlock their full potential.</p>
                    </div>
                </div>

                {/* Row 3 */}
                <div className='row' id='r3'>
                    <div className='container' id='r3-c1'>
                        <h4 className='cont-num'>04</h4>
                        <h3 className='cont-heading'>Protecting Users</h3>
                        <p className='cont-paragraph'>We are committed to safeguarding user data and privacy, ensuring a secure and trusted experience.</p>
                    </div>
                   
                    <div className='container' id='r3-c2'>
                        <h4 className='cont-num'>05</h4>
                        <h3 className='cont-heading'>Innovation</h3>
                        <p className='cont-paragraph'>We thrive on pushing boundaries, embracing change, and staying at the forefront of technological advancements.</p>
                    </div>
                </div>

                {/* Row 4 */}
                <div className='row' id='r4'>
                    <div className='container' id='r4-c1'>
                        <h4 className='cont-num'>06</h4>
                        <h3 className='cont-heading'>Client-Centric Approach</h3>
                        <p className='cont-paragraph'>Our clients are our partners. We prioritize your goals, listen to your needs, and work collaboratively to achieve your vision.</p>
                    </div>
                </div>

                {/* Row 5 */}
                <div className='row' id='r5'>

                    <div className='container' id='r5-c1'>
                        <h4 className='cont-num'>07</h4>
                        <h3 className='cont-heading'>Change Management</h3>
                        <p className='cont-paragraph'>We embrace change and adapt quickly to new challenges and opportunities. Adaptability is in our DNA.</p>
                    </div>
                   
                    <div className='container' id='r5-c2'>
                        <h4 className='cont-num'>08</h4>
                        <h3 className='cont-heading'>Teamwork</h3>
                        <p className='cont-paragraph'>Collaboration is key to our success. We believe that diverse perspectives and skills lead to the most innovative solutions.</p>
                    </div>

                </div>
                
            </div>
            <div className='star-end-div' /> 
        </>
    );

}
