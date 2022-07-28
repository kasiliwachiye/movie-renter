import Joi from 'joi-browser'
import Form from './common/Form'

class RegisterForm extends Form {
  state = { 
    data: { username: "", password: "" },
    errors: {}
  }
   
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  }
  
  render() { 
    return (
      <div className="d-flex justify-content-center">
        <form className="w-50 p-5 border" onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          {this.renderInput("name", "Full Name")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}
 
export default RegisterForm;