function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login</h2>
        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Login;
