import React from 'react';

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-blue-700 text-white p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Apna College</h1>
          <button className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-100">Login</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-semibold">Explore and find your college</h2>
        <p className="mt-2 text-lg text-gray-600">
          Explore colleges all over India and find your perfect match.
        </p>
        <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">
          Start Exploring
        </button>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h3 className="text-2xl font-bold mb-6">Compare Colleges</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          <li>Infrastructure</li>
          <li>Courses</li>
          <li>Fees</li>
          <li>Ranking</li>
          <li>Reviews</li>
        </ul>
      </section>

      {/* Explore Colleges */}
      <section className="bg-blue-50 py-12 text-center px-4">
        <h3 className="text-2xl font-bold">Explore Colleges</h3>
        <p className="mt-2 text-gray-600">Get details with filters, reviews, and more.</p>
        <div className="mt-6 space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Apply</button>
          <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded">Visit College</button>
        </div>
      </section>

      {/* Shortlisted Colleges */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h3 className="text-xl font-semibold mb-4">Shortlist Colleges</h3>
        <ul className="space-y-2">
          <li className="p-4 border rounded shadow-sm">IPS Academy</li>
          <li className="p-4 border rounded shadow-sm">MediCaps University</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 px-4 text-center">
        <h3 className="text-2xl font-bold mb-6">Share Your Experience</h3>
        <div className="space-y-4">
          <blockquote>"Made the search easy!" — <strong>Student A</strong></blockquote>
          <blockquote>"College at your ease." — <strong>Student B</strong></blockquote>
          <blockquote>"Visit colleges at one click." — <strong>Student C</strong></blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-4">
        <p>© 2025 Apna College. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
