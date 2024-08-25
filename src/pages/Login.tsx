import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (form.email.trim() === "" || form.password.trim() === "") {
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }
    toast.success("Logged in Successfully!");
    setForm({
      email: "",
      password: "",
    });
    setLoading(false);
  };

  return (
    <section className="h-[83vh] flex justify-center items-center">
      <form
        onSubmit={handleFormSubmit}
        className="shadow-md px-4 py-8 md:py-16 md:px-8 rounded-[1.5rem] lg:w-[30rem] border">
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
            value={form.email}
            onChange={(e) => handleInputChange(e)}
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
            name="password"
            value={form.password}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <button
          className="bg-orange-400 w-full py-4 rounded-md font-semibold"
          disabled={loading}>
          {!loading ? "Submit" : "Submitting..."}
        </button>
      </form>
    </section>
  );
};

export default Login;
