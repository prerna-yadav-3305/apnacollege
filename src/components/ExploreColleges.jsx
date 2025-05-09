import React from "react";

const ExploreColleges = () => {
  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-xl font-semibold">Explore Colleges</h3>
        <p>Get details with filters, reviews, and more.</p>
        <button className="bg-black text-white px-4 py-2 mt-4 mr-2">Apply</button>
        <button className="border px-4 py-2 mt-4">Visit College</button>
      </div>
      
    </section>
  );
};

export default ExploreColleges;