import 'Css/Home.css'
import React from "react"
import LinkedInProfilePicture from "Images/linkedin_profile_picture.jpg"

class Home extends React.Component {


  render() {

    return (
      <div>

        <h1>Hello and welcome to my portfolio website</h1>
        <h3>Feel free to have a look around</h3>


        <space/>
        <space/>

        <div className="personal-summary">

          <div className="profile-picture">
            <img src={LinkedInProfilePicture} className="linkedin-profile-picture"/>
          </div>

          <div className="personal-info">
            <div className="my-name">Mirko Saiu</div>
            <i>Software Engineer</i>
            <space/>
            <div>Italy</div>
            <space/>
            I'm a passionate Software Engineer committed to deliver quality work. I love to work with the ultimate technologies and to get things done. I also often make personal projects that involve computer science and, recently, electronics skills.
            <space/>
            <b>Valuable skills</b>: I have 4 years experience working with the functional programming language <b><i>Scala</i></b> and its frameworks. Plus 2 years experience working on the front end with <b><i>ReactJs and Redux</i></b>.
          </div>

        </div>


      </div>
    )
  }
}

export default Home
