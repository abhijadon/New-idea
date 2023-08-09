import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const For = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "mobile") {
      setMobile(e.target.value);
    }
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "!Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile is required!";
    } else if (values.mobile.length < 10) {
      errors.mobile = "More than 10 digits";
    } else if (values.mobile.length > 15) {
      errors.mobile = "less than 15";
    }
    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(name);
    }
  }, [formErrors]);

  const Submit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(validate(name));
    const data = { name, email, mobile };

    let res = await Promise.all([
      fetch("http://localhost:5000/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      fetch("http://localhost:5000/sheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    ]);
    
    setEmail("");
    setName("");
    setMobile("");
    toast("Your form data was success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section className="md:w-full min-w-full">
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{(name, undefined)}</pre>
        )}
        <form className="w-full form" onSubmit={Submit} method="POST">
          <div className="flex flex-wrap mx-10 mb-2 mt-4">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <p className="text-red-600 absolute ml-48  text-sm">
                {formErrors.name}
              </p>

              <input
                name="name"
                value={name}
                onChange={handleChange}
                className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                name="email"
                value={email}
                onChange={handleChange}
                className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="mobile"
              >
                Mobile
              </label>
              <input
                name="mobile"
                value={mobile}
                onChange={handleChange}
                className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5  px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="mobile"
                type="text"
                placeholder="Mobile"
              />
              <div className="relative md:mt-2 md:ml-10 py-6">
                <button className="cursor-pointer bg-[#009933] hover:bg-green-700 py-2 px-4 rounded text-white">
                  Proceed to pay
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default For;
