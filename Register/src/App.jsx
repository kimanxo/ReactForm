import "./App.css";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

const App = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(16, "Must be 16 characters or less")
        .min(3, "Must be 03 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(32, "Must be 32 characters or less")
        .min(8, "Must be 08 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className="w-5/6 shadow-2xl rounded-xl h-5/6 m-auto mt-[3%] bg-teal-600 flex">
      <article className="w-2/5 h-full"></article>
      <article className="w-3/5 h-full bg-slate-300 flex flex-col items-center py-24 gap-8 rounded-tr-xl rounded-br-xl">
        <h1 className="text-4xl font-semibold text-teal-500">Create Account</h1>
        <div className="flex  justify-center items-center w-3/5 gap-16">
          <span className="border-[1px] border-slate-400 p-3 rounded-full cursor-pointer">
            <FaFacebookF />
          </span>
          <span className="border-[1px] border-slate-400 p-3 rounded-full cursor-pointer">
            <FaGoogle />
          </span>
          <span className="border-[1px] border-slate-400 p-3 rounded-full cursor-pointer">
            <FaGithub />
          </span>
        </div>
        <p className="text-lg">Or use your email for registration</p>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-8 w-3/5"
        >
          <div>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded-md bg-slate-100"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username ? (
              <small className="text-red-500 font-semibold">
                {formik.errors.username}
              </small>
            ) : null}
          </div>

          <div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-slate-100"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <small className="text-red-500 font-semibold">
                {formik.errors.email}
              </small>
            ) : null}
          </div>

          <div>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-md bg-slate-100"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <small className="text-red-500 font-semibold">
                {formik.errors.password}
              </small>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full font-medium p-3 Register text-zinc-900 text-2xl bg-teal-500 rounded-md cursor-pointer"
          >
            Register
          </button>
        </form>
      </article>
    </section>
  );
};
export default App;
