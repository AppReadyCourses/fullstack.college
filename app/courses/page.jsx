import React from "react";

const page = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://ik.imagekit.io/9kllv04exw/fullstack_react_coffeeshop.png?updatedAt=1718411919061"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Full Stack React</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Start this course</button>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 min-h-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://ik.imagekit.io/9kllv04exw/Angular%20e-commerce.jpg?updatedAt=1718421707861"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Full Stack Angular</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Start this course</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
