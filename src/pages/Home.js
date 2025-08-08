import "./Home.css"

function Home() {
    return (
        <div className="Home">
            <h1>Laurel Sun</h1>
            <p>Hi! 👋</p>
            <p>I'm Laurel, a CS major at the <a href="https://www.cs.umd.edu/" target='_blank'>
                University of Maryland</a>.
                I'm broadly interested in the field of computer vision and robotics.
                I'm also interested in software engineering and big data processing.
                Feel free to reach out!</p>
            <div className='contact'>
                <p>✉️ laurel.sun.06@gmail.com</p>
                <p>🌐 lsun2006@umd.edu</p>
                <p>🔗 <a href="https://www.linkedin.com/in/laurel-sun/">https://www.linkedin.com/in/laurel-sun/</a></p>
                <p>💻 <a href="https://github.com/sunlaurel/">https://github.com/sunlaurel/</a></p>
            </div>
        </div>
    );
}

export default Home;