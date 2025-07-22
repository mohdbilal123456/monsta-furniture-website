import React from 'react';

export default function NewsSection() {
  return (
    <section className="bg-[#f9f9f9] mt-10 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#242424] mb-2">
          Our Newsletter
        </h2>
        {/* Subtitle */}
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Get E-mail updates about our latest shop and special offers.
        </p>

        {/* Email input & button */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 ">
          <input
            type="email"
            placeholder="Email address..."
            className="w-full sm:w-[300px] text-black px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none "
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-[#c09578] text-white font-semibold rounded-md cursor-pointer hover:bg-[#000] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
