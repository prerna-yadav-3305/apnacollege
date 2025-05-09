import React from "react";


const Testimonials = () => {
  return (
    <section className="p-8 bg-gray-50">
      <h3 className="text-xl font-semibold mb-6">Share Your Experience</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded">
          <p>"Made the search easy!"</p>
          <div className="mt-2 text-sm text-gray-500">- Student A</div>
        </div>
        <div className="border p-4 rounded">
          <p>"College at your ease"</p>
          <div className="mt-2 text-sm text-gray-500">- Student B</div>
        </div>
        <div className="border p-4 rounded">
          <p>"Visit colleges at one click"</p>
          <div className="mt-2 text-sm text-gray-500">- Student C</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;