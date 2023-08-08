import React, { useState, useEffect } from "react";

const Form = () => {
  const [formValues, setFormValues] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    const data = {
      setFormValues,
    };

    await fetch("http://localhost:5000/api/sheet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Create Success: ", data);
      })
      .catch((error) => {
        console.error("ERROR: ", error);
      });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
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
    }
    else if (values.mobile.length < 10) {
      errors.mobile = "More than 10 digits";

    } else if (values.mobile.length > 15) {
      errors.mobile = "less than 15";
    }
    return errors;
  };

  return (
    <section className="md:w-full min-w-full">
      <div className="md:mx-auto rounded-lg bg-[#ffffff] shadow-2xl drop-shadow-xl mt-4 md:w-[70%]">
        <div className="mt-6 ml-4 mr-10 md:ml-20">
          <div className="text-center">
            <h3 className="text-gray-800 font-[600] text-lg leading-5 tracking-wide">
              <span>Application Form for Degree Delivery</span>
              <hr className="md:w-[60vw] mt-1" />
            </h3>
          </div>
        </div>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{(formValues, undefined)}</pre>
        )}
        <form className="w-full form" onSubmit={handleSubmit}>
          {/* ==========section-1=========== */}

          <div className="">
            <div className="mt-6 ml-9 md:ml-12">
              <div className="">
                <h3 className="text-gray-800 font-[600] text-lg leading-5 tracking-wider">
                  <span>Certificate & University select</span>
                  <hr className="md:w-[29%] w-1/5" />
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-10 mb-2 mt-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                University
              </label>
              <div className="relative">
                <select
                  name="University"
                  value={formValues.username}
                  onChange={handleChange}
                  className="block appearance-none w-full border border-gray-400 text-gray-700 py-1.5 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Certificate
              </label>
              <div className="relative">
                <select
                  name="Certificate"
                  value={formValues.username}
                  onChange={handleChange}
                  className="block appearance-none w-full border border-gray-400 text-gray-700 py-1.5 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ===============Section-2=================== */}

          <div className="mt-6 ml-9 md:ml-12">
            <div className="">
              <h3 className="text-gray-800 font-[600] text-lg leading-5 tracking-wider">
                <span>Personal Information</span>
                <hr className="w-1/5" />
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap mx-10 mb-2 mt-4">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <p className="text-red-600 absolute ml-48  text-sm">
                {formErrors.name}
              </p>
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Name
              </label>

              <input
                name="name"
                value={formValues.username}
                onChange={handleChange}
                className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Name"
              />
            </div>


            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Mother Name
              </label>
              <input
                name="MotherName"
                value={formValues.username}
                onChange={handleChange}
                className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Mother-Name"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Father Name
              </label>
              <input
                name="FatherName"
                value={formValues.username}
                onChange={handleChange}
                className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5  px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="FatherName"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-4">
              <p className="text-red-600 absolute ml-48  text-sm">
                {formErrors.mobile}
              </p>
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Mobile number
              </label>
              <input
                name="mobile"
                value={formValues.mobile}
                onChange={handleChange}
                className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5  px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="Enter your number"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-4">
              <p className="text-red-600 absolute ml-48 text-sm">{formErrors.email}</p>
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Email-id
              </label>
              <input
                name="email"
                value={formValues.username}
                onChange={handleChange}
                className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5  px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="Enter your email"
              />

            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                alternate number
              </label>
              <input
                name="AlternateNumber"
                value={formValues.username}
                onChange={handleChange}
                className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5  px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="Enter your alternate-number"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Date of Birth
              </label>
              <input
                name="DOB"
                value={formValues.username}
                onChange={handleChange}
                className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5  px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="date"
                placeholder="Enter your DOB"
              />
            </div>
          </div>

          {/* =========Section-3=========== */}
          <div className="">
            <div className="mt-6 ml-9 md:ml-12">
              <div className="">
                <h3 className="text-gray-800 font-[600] text-lg leading-5 tracking-wider">
                  <span>Academic Details</span>
                  <hr className="w-1/6" />
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap mx-10 mb-2 mt-4">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Course
                </label>
                <input
                  name="Course"
                  value={formValues.username}
                  onChange={handleChange}
                  className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Enter your course"
                />
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-zip"
                >
                  Sub-course
                </label>
                <input
                  name="SubCourse"
                  value={formValues.username}
                  onChange={handleChange}
                  className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5  px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="Enter your subcourse"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-zip"
                >
                  Enrollment number
                </label>
                <input
                  name="ErollmentNumber"
                  value={formValues.username}
                  onChange={handleChange}
                  className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5  px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="Enter your alternate-number"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-zip"
                >
                  Passing year
                </label>
                <input
                  name="PassingYear"
                  value={formValues.username}
                  onChange={handleChange}
                  className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5  px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="date"
                  placeholder="Enter your DOB"
                />
              </div>
            </div>
          </div>
          {/* =============section-4 =============== */}

          <div className="w-full">
            <div className="mt-6 ml-9 md:ml-12">
              <div className="">
                <h3 className="text-gray-800 font-[600] text-lg leading-5 tracking-wider">
                  <span>Delivery Address</span>
                  <hr className="w-1/6" />
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap mx-10 mb-2 mt-4">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  House No./apartment/street
                </label>
                <input
                  name="HouseNumber"
                  value={formValues.username}
                  onChange={handleChange}
                  className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Enter your house-no."
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  State
                </label>
                <div className="relative">
                  <select
                    name="State"
                    value={formValues.username}
                    onChange={handleChange}
                    className="block appearance-none w-full border border-gray-400 text-gray-700 py-1.5 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  City
                </label>
                <div className="relative">
                  <select
                    name="City"
                    value={formValues.username}
                    onChange={handleChange}
                    className="block appearance-none w-full border border-gray-400 text-gray-700 py-1.5 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Zipcode
                </label>
                <input
                  name="Zipcode"
                  value={formValues.username}
                  onChange={handleChange}
                  className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Enter your zipcode"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  post-office
                </label>
                <input
                  name="PostOffice"
                  value={formValues.username}
                  onChange={handleChange}
                  className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Enter your postoffice"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  country
                </label>
                <input
                  name="Country"
                  value={formValues.username}
                  onChange={handleChange}
                  className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Enter your country "
                />
              </div>
            </div>
          </div>

          {/* =============section-5========== */}
          <div className="mt-8">
            <div className="text-[#f85] text-justify tracking-tight leading-5 mb-2 md:mb-0 font-[500] text-base relative md:left-12 md:mt-2 space-x-2">
              <span>Note:</span>
              <span className="text-black text-sm md:text-[1em] leading-3">
                The online application fee for degree delivery is ₹1000, which
                includes tax and delivery charges.
              </span>
            </div>
            <div className="relative md:left-24 pl-3.5 md:pl-2 mt-6">
              <label>
                <input
                  type="checkbox"
                  className="absolute top-1.5 -left-1 md:-left-2 cu"
                />
                <span className="text-xs tracking-tight md:text-sm font-[400] ">
                  I hereby declare that the information provided is true and
                  correct.
                </span>
              </label>
            </div>
            <div className="relative md:mt-2 md:ml-10 py-6">
              <button className="cursor-pointer bg-[#009933] hover:bg-green-700 py-2 md:w-1/6 w-1/2 rounded text-white">
                Proceed to pay
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
