import React from "react";

export const Banner = () => {
  return (
    <div className="py-5">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-2 bg-light rounded-3 text-left">
          <div className="m-1 m-lg-5">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="fs-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa,
              ipsam, eligend, in quo sunt possimus non incidunt odit vero
              aliquid similique quaerat nam nobis ilo aspernatur vitae fugiat
              numquam repellat.
            </p>
            <a className="btn btn-primary fs-5" href="#!">
              Call to action!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
