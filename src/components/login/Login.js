import React from "react";
import "./login.css";
import TextFields from "./../textfield/TextField";

const Login = () => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
  });
  function onChangeHandler(event) {
    setValue((oldValue) => {
      return { ...oldValue, [event.target.name]: event.target.value };
    });
  }
  function onSubmitHandler(event) {
    event.preventDefault();
    setValue(() => ({ email: "", password: "" }));
  }
  return (
    <div className='login-container'>
      <h4 className='login-title'>Sign In</h4>
      <form className='login-form' onSubmit={onSubmitHandler}>
        <div className='legend'>
          Build your empire through{" "}
          <span className='legend-highlight'>Influencer Marketing.</span>
        </div>
        <TextFields
          label='Email'
          name='email'
          value={value.email}
          setValue={onChangeHandler}
        />
        <TextFields
          type='password'
          label='Password'
          name='password'
          value={value.password}
          child={<span className='forgetPassword'>Forgot Password?</span>}
          setValue={onChangeHandler}
        />
        <button type='submit' className='submit'>
          Sign In
        </button>
        <div className='subs'>
          Dont have an account?{" "}
          <span className='subs-hightlight'>Get started</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
