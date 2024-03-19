import profilePic from "../assets/images/profilePic.png";

function About() {
    

    return (
      <div className="container">
        <h1>About Me</h1>
        <img className="img" style={{height: "200px"}} src={profilePic} alt="author image" />
        <p>
          An ambitious and collaborative Full-Stack Developer with a passion for creating unique and intuitive applications that engage and delight users.
        </p>
      </div>
    );
  };

  export default About;

