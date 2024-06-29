import axios from "axios";
import { Link } from "react-router-dom";

const SignIn = () => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    if (!data.email || !data.password) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/signin",
        data
      );
      const { token } = response.data;
      console.log(token);
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("There was an error signing up:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col md:w-1/2 w-full p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit} action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Don't have an account yet?
              <Link to="/signup" className="text-violet-400">
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
