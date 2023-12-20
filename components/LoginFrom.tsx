import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Error from "./Error";

interface LoginFormProps {
  onLogin: (isCorrect: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password == process.env.NEXT_PUBLIC_Password) {
      onLogin(true);
      setErrorMessage("");
    } else {
      onLogin(false);
      setErrorMessage("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="text-white">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Password Required</h1>
        <p className="text-lg mb-4">
          Please enter the password to access the file.
        </p>
      </div>

      {errorMessage && <Error errorMessage={errorMessage} />}

      <form onSubmit={handleFormSubmit}>
        <label className="block mb-2 mt-4">Password:</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-3 border text-white bg-[#212020]"
            required
            placeholder="Enter Your Password"
          />
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full p-3  bg-[#d13337] transition duration-300 mt-3 font-semibold hover:bg-[#0e1319]"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
