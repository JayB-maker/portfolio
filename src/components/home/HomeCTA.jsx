import resume from '../../resources/resume.pdf';

const HomeCTA = () => {
    return(
        <>
            <div className="home-cta">
                <a href= {resume} download className='btn-secondary' >Download CV</a>
                <a href="#" className='btn-primary'>Let's Talk</a>
            </div>
        </>
    )
}

export default HomeCTA;