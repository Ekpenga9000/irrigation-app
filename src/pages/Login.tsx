const Login = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="shadow-md px-4 py-8 md:py-16 md:px-8 rounded-[1.5rem] lg:w-[30rem] border">
        <h1 className="font-bold text-4xl border-b py-4 mb-8">🔐Login</h1>
        <div className="mb-4 md:mb-8">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border p-4 rounded-md"
          />
        </div>
        <div className="mb-4 md:mb-8">
          <label htmlFor="Password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border p-4 rounded-md"
          />
        </div>
        <button className="bg-orange-400 w-full py-4 rounded-md font-semibold">Submit</button>
      </div>
    </section>
  );
};

export default Login;
