import React from "react";

export const CreataUser = () => {
  const handleCreatUser = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const userEmail = e.target.email.value;
    const user = {
      name: userName,
      email: userEmail,
    };
    console.log(user);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card py-5 w-full  shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleCreatUser}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* <div className="form-control flex">
            <label className="label cursor-pointer">
              <span className="label-text">Red pill</span>
              <input
                type="radio"
                name="radio-5"
                className="radio radio-success"
                defaultChecked
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Blue pill</span>
              <input
                type="radio"
                name="radio-5"
                className="radio radio-success"
                defaultChecked
              />
            </label>
          </div> */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">crate user </button>
          </div>
        </form>
      </div>
    </div>
  );
};
