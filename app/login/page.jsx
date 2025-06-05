"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAddLoginMutation } from "../../store/services/loginSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/services/authSlice";
import { toast } from "react-hot-toast";

function page() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();

  const [addLogin, { isLoading, error }] = useAddLoginMutation();

  const onSubmit = async (data) => {
    try {
      const userData = await addLogin({
        username: data.username,
        password: data.password,
      }).unwrap();

      dispatch(setCredentials({ user: userData, token: userData.accessToken }));
      toast.success("Login successful!");
      router.push("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      toast.error(err?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/10 backdrop-blur-md shadow-xl rounded-xl px-10 pt-8 pb-10 w-full max-w-md border border-white/20 text-white animate-fade-in"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>

        <div className="mb-5">
          <label htmlFor="username" className="block mb-2 text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: true })}
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60 transition-all"
            placeholder="Enter username"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60 transition-all"
            placeholder="Enter password"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-6 rounded transition-all duration-300"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/register")}
            className="text-sm underline text-white/80 hover:text-white transition-all"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default page;
