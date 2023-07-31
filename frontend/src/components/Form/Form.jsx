import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [fathername, setFatherame] = useState("");
  const [course, setCourse] = useState("");
  const [university, setUniversity] = useState("");
  const [enroll, setEnroll] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [dob, setDob] = useState("");
  const [passingyear, setPassinyear] = useState("");
  const [mothername, setMothername] = useState("");
  const [alternate, setAlternate] = useState("");
  const [house, setHouse] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [postoffice, setPostoffice] = useState("");
  const [country, setCountry] = useState("");
  const [degree, setDegree] = useState("");

  const savedata = async () => {
    let std = await fetch("http://localhost:8001/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        degree,
        fathername,
        course,
        university,
        enroll,
        mobile,
        email,
        state,
        dob,
        passingyear,
        mothername,
        alternate,
        house,
        city,
        zipcode,
        postoffice,
        country,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    std = await std.json();
    console.log(std);
  };

  return (
    <section className="md:w-full min-w-full">
      <div className="md:mx-auto rounded-lg bg-[#ffffff] shadow-2xl drop-shadow-xl mt-4">
        <div className="mt-6 ml-4 mr-10 md:ml-20">
          <div className="text-center">
            <h3 className="text-gray-800 font-[600] text-lg leading-5 tracking-wide">
              <span>Application Form for Degree Delivery</span>
              <hr className="md:w-[60vw] mt-1" />
            </h3>
          </div>
        </div>
        <form className="grid w-full">
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

          <div className="grid place-content-center place-items-center">
            <div className="grid md:grid-cols-2 gap-5 md:gap-3 mt-4">
              <div className="relative w-64 md:w-[26rem] md:px-1">
                <select
                  value={degree}
                  onChange={(e) => {
                    setDegree(e.target.value);
                  }}
                  className="block appearance-none w-full bg-gray-100 border border-gray-600 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Select certificate type</option>
                  <option>Degree</option>
                  <option>Migration</option>
                  <option>WES Transcription</option>
                  <option>Others</option>
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
              <div className="relative md:w-[26rem] w-64 md:px-1">
                <select
                  value={university}
                  onChange={(e) => {
                    setUniversity(e.target.value);
                  }}
                  className="block appearance-none w-full bg-gray-100 border border-gray-600 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Select University</option>
                  <option>SPU</option>
                  <option>Himalayan</option>
                  <option>Sabarmati</option>
                  <option>Others</option>
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
          <div className="">
            <div className="mt-6 ml-9 md:ml-12">
              <div className="">
                <h3 className="text-gray-800 font-[600] text-lg leading-5 tracking-wider">
                  <span>Personal Information</span>
                  <hr className="w-1/5" />
                </h3>
              </div>
            </div>
            <div className="grid place-content-center place-items-center">
              <div className="grid md:grid-cols-3 grid-rows-3  mt-3 gap-1">
                <div className="w-full px-2 md:mb-0  ">
                  <label
                    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Name <span className="text-red-500 leading-5"> *</span>
                  </label>
                  <input
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="appearance-none  w-full bg-gray-100 text-gray-700 border border-gray-600 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder=""
                  />
                </div>

                <div className="w-full px-2 md:mb-0 ">
                  <label
                    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Mobile Number{" "}
                    <span className="text-red-500 leading-5"> *</span>
                  </label>
                  <input
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-600 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="w-full px-2 md:mb-0 ">
                  <label
                    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Email ID<span className="text-red-500 leading-5"> *</span>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-600 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder=""
                  />
                </div>

                <div className="w-full px-2 md:mb-0 mt-2 md:mt-0">
                  <label
                    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    {" "}
                    Date of Birth
                    <span className="text-red-500 leading-5"> *</span>
                  </label>
                  <input
                    value={dob}
                    onChange={(e) => {
                      setDob(e.target.value);
                    }}
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-600 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="date"
                    placeholder=""
                  />
                </div>

                <div className="w-full px-2 md:mb-0 ">
                  <label
                    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Father Name
                    <span className="text-red-500 leading-5"> *</span>
                  </label>
                  <input
                    value={fathername}
                    onChange={(e) => {
                      setFatherame(e.target.value);
                    }}
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-600 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="w-full px-2 md:mb-0 ">
                  <label
                    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Mother Name
                    <span className="text-red-500 leading-5"> *</span>
                  </label>
                  <input
                    value={mothername}
                    onChange={(e) => {
                      setMothername(e.target.value);
                    }}
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-600 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="w-full px-2  md:mb-0 ">
                  <label
                    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Alternate Contact No.
                    <span className="text-red-500 leading-5"> *</span>
                  </label>
                  <input
                    value={alternate}
                    onChange={(e) => {
                      setAlternate(e.target.value);
                    }}
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-600 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
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
            <div className="grid place-content-center place-items-center">
              <div className="grid md:grid-cols-2 grid-rows-4 md:grid-rows-2 mt-3 gap-3">
                <div className="md:w-[26rem] w-64 md:mb-0  ">
                  <label
                    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Course <span className="text-red-500 leading-5"> *</span>
                  </label>
                  <input
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="appearance-none  w-full bg-gray-100 text-gray-700 border border-gray-600 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder=""
                  />
                </div>

                <div className="md:w-[26rem] w-64 md:mb-0 ">
                  <label
                    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Sub-Course
                    <span className="text-red-500 leading-5">*</span>
                  </label>
                  <input
                    value={enroll}
                    onChange={(e) => {
                      setEnroll(e.target.value);
                    }}
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-600 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder=""
                  />
                </div>

                <div className="md:w-[26rem] w-64 md:mb-0 ">
                  <label
                    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Passing Year
                    <span className="text-red-500 leading-5"> *</span>
                  </label>
                  <input
                    value={passingyear}
                    onChange={(e) => {
                      setPassinyear(e.target.value);
                    }}
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-600 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="date"
                    placeholder=""
                  />
                </div>

                <div className="md:w-[26rem] w-64 md:mb-0 ">
                  <label
                    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Enrollment Number
                    <span className="text-red-500 leading-5"> *</span>
                  </label>
                  <input
                    value={alternate}
                    onChange={(e) => {
                      setAlternate(e.target.value);
                    }}
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-600 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder=""
                  />
                </div>
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
            <div className="grid place-content-center place-items-center">
              <div className="grid md:grid-cols-3 mb-2 mt-6 gap-4">
                <div className="w-[17rem]">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    House no/Apartment/street
                    <span className="text-red-500 leading-5"> *</span>
                  </label>
                  <div className="relative">
                    <select
                      value={house}
                      onChange={(e) => {
                        setHouse(e.target.value);
                      }}
                      className="block appearance-none w-full bg-gray-100 border border-gray-600 text-gray-700 py-1 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                <div className="">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    State<span className="text-red-500 leading-5"> *</span>
                  </label>
                  <div className="relative">
                    <select
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className="block appearance-none w-full bg-gray-100 border border-gray-600 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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

                <div className="">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    City<span className="text-red-500 leading-5"> *</span>
                  </label>
                  <div className="relative">
                    <select
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      className="block appearance-none w-full bg-gray-100 border border-gray-600 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                <div className="">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-zip"
                  >
                    Zipcode<span className="text-red-500 leading-5"> *</span>
                  </label>
                  <input
                    value={zipcode}
                    onChange={(e) => {
                      setZipcode(e.target.value);
                    }}
                    className="appearance-none  w-full bg-gray-100 text-gray-700 border border-gray-600 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder=" "
                  />
                </div>

                <div className="">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-zip"
                  >
                    Post Office
                    <span className="text-red-500 leading-5"> *</span>
                  </label>
                  <input
                    value={postoffice}
                    onChange={(e) => {
                      setPostoffice(e.target.value);
                    }}
                    className="appearance-none  w-full bg-gray-100 text-gray-700 border border-gray-600 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder=" "
                  />
                </div>

                <div className="">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-zip"
                  >
                    Country<span className="text-red-500 leading-5"> *</span>
                  </label>
                  <input
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    className="appearance-none  w-full bg-gray-100 text-gray-700 border border-gray-600 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder=" "
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* ==============section-3============== */}
        <div className="py-10 pt-0 m-4">
          <div className="">
            <div className="text-[#f85] text-justify tracking-tight leading-5 mb-2 md:mb-0 font-[500] text-base relative md:left-12 md:mt-2 ">
              <span>Note:</span>
              <span className="text-black text-sm md:text-[1em] leading-3">
                The online application fee for degree delivery is ₹1000, which
                includes tax and delivery charges.
              </span>
            </div>

            <div className="relative md:left-24 md:top-4 pl-3.5 md:pl-2">
              <label className="">
                <input
                  type="checkbox"
                  className="absolute top-1.5 -left-1 md:-left-2"
                />
                <span className="text-xs  tracking-tight md:text-base font-[400] ">
                  I hereby declare that the information provided is true and
                  correct.
                </span>
              </label>
            </div>
          </div>
          <div className="relative top-4 mt-2 md:mt-8 md:ml-10">
            <div className="flex items-start gap-4">
              <button
                onClick={"googleSheet"}
                className="bg-[#009933] hover:bg-green-700 py-2 md:w-1/6 w-1/2 rounded text-white"
                disabled
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
