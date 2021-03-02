import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import emailjs from "emailjs-com";

class ContactMe extends Component {
  state = {
    username: "",
    email: "",
    subject: "",
    message: "",
  };

  usernameHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  emailHandler = (e) => {
    this.setState({ email: e.target.value });
  };

  subjectHandler = (e) => {
    this.setState({ subject: e.target.value });
  };

  messageHandler = (e) => {
    this.setState({ message: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    if (
      this.state.username &&
      this.state.email &&
      this.state.subject &&
      this.state.message
    ) {
      emailjs
        .sendForm(
          "service_p97o3bb",
          "template_6six8sl",
          e.target,
          "user_Z4HjQnIqfNSWtTTADZ87Y"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      alert("Email Sent!");
      this.setState({
        username: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Fields are required!");
    }
  };
  render() {
    return (
      <div className="container-fluid" id="contact">
        <div className="row justify-content-center">
          <div className="col-lg-5 p-3">
            <h1>Contact Me</h1>
            <form onSubmit={this.submitHandler}>
              <div className="form-group">
                <input
                  className="form-control"
                  name="username"
                  type="text"
                  placeholder="Your Name.."
                  onChange={this.usernameHandler}
                  value={this.state.username}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Your Email.."
                  onChange={this.emailHandler}
                  value={this.state.email}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="subject"
                  type="text"
                  placeholder="Subject.."
                  onChange={this.subjectHandler}
                  value={this.state.subject}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  type="text"
                  placeholder="Write something.."
                  onChange={this.messageHandler}
                  value={this.state.message}
                  required
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactMe;
