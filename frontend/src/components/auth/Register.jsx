import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegistrationSchema } from "../../schemas/userSchema";
import { useNavigate } from "react-router-dom";

export function Register() {
  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      avatar: "default.jpg",
    },
    resolver: zodResolver(userRegistrationSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // Manda solicitud POST al servidor con datos del usuario
    try {
      const res = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Si la respuesta no es válida, lanza un error
      if (!res.ok) {
        throw new Error("An error occurred while registering");
      }

      console.log(data);

      // Redirige al usuario a la página de inicio
      return navigate("/");
    } catch {
      // TODO: Mostar un mensaje de error si la solicitud falla
    }
  };

  return (
    <form
      className="flex md:grid grid-cols-2 gap-10 items-center md:h-screen md:p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Login Form */}
      <div className="flex flex-col justify-self-center w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-center">CREATE AN ACCOUNT!</h1>
        <div className="flex flex-col gap-4 pt-4">
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 p-4 bg-gray-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <label htmlFor="email" className="hidden"></label>
              <input
                {...register("email")}
                type="text"
                placeholder="Email"
                className="bg-gray-100 w-full"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 ml-2">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 p-4 bg-gray-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <label htmlFor="username" className="hidden"></label>
              <input
                {...register("username")}
                type="text"
                placeholder="Username"
                className="bg-gray-100 w-full"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 ml-2">{errors.username.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 p-4 bg-gray-100 rounded-full items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <label htmlFor="password" className="hidden"></label>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="bg-gray-100 w-full"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            {errors.password && (
              <p className="text-red-500 ml-2">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 p-4 bg-gray-100 rounded-full items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <label htmlFor="confirmPassword" className="hidden"></label>
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm password"
                className="bg-gray-100 w-full"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 ml-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white font-semibold hover:bg-primary-hover p-4 rounded-full drop-shadow-lg"
          >
            Register
          </button>
          {errors.root && (
            <p className="text-red-500 ml-2">{errors.root.message}</p>
          )}
          <div className="flex items-center gap-4">
            <hr className="w-full bg-gray-500 h-[2px]" />
            <p className=" text-gray-500 text-nowrap">or register with</p>
            <hr className="w-full bg-gray-500 h-[2px]" />
          </div>
          {/* Socialite Login */}
          <div className="flex gap-4 justify-center">
            <div className="border rounded-full p-4 ">
              <img
                src="/src/assets/social-media/google.png"
                alt="Google Icon"
              />
            </div>
            <div className="border rounded-full p-4 ">
              <img
                src="/src/assets/social-media/github.png"
                alt="GitHub Icon"
              />
            </div>
            <div className="border rounded-full p-4">
              <img
                src="/src/assets/social-media/facebook.png"
                alt="Facebook Icon"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="hidden bg-primary rounded-3xl md:flex items-center justify-center h-full">
        <img src="/src/assets/piggybank-logo.png" alt="Piggybank logo" />
      </div>
    </form>
  );
}
