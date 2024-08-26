import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "@/reduxState/authSlice/authSlice";
import { fetchUser } from "../api/mockApi";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/reduxState/store";

const Login = () => {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  if (isAuthenticated && user) {
    navigate("/");
  }
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = form;

    if (email.trim() === "" || password.trim() === "") {
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const user = await fetchUser(email, password);
      if (user) {
        dispatch(
          loginSuccess({
            id: user.id,
            fullname: user.fullname,
            imageLink: user.imageLink,
          })
        );
        toast.success("Logged in Successfully!");
        setForm({
          email: "",
          password: "",
        });
        navigate("/dashboard");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("An error occured, please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
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
