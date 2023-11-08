"use client";

const page = () => {
  return (
    <div className="px-14">
      <h1>HEllo Nayems</h1>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div>
        <div className="relative">
          <button className="transition-all duration-300 ease-in-out after:transition-none after:duration-0 after:ease-linear after:delay-0s">
            Button
          </button>
        </div>
      </div>

      <div className="group relative">
        Your content here
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-50"></div>
      </div>
    </div>
  );
};

export default page;
