export default function Dashboard(){
  return(
    <>
    <h1 className="reg-heading">Register Yourself to use LisaBot </h1>
      <div className="reg">
        <form >
          <div className="mail">

          <label htmlFor="mail">Enter your email</label>
          <input type="email" required />
          </div>
          <div className="pass">
            <label htmlFor="pass">Enter Password</label>
            <input type="password" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="devider">
        <hr />
        <span>or</span>
        <hr />
      </div>
      <div className="google">
        <button>Continue with Google</button>
      </div>
    </>
  )
}