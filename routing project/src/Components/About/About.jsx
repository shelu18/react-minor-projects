import React from 'react';

export default function About() {
  return (
      <div className="py-16 bg-gray-50">
          <div className="container m-auto px-6 text-gray-700 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  {/* Image Section */}
                  <div className="md:w-5/12 lg:w-5/12">
                      <img
                          src="https://cdn.pixabay.com/photo/2019/05/04/14/22/woman-4178187_640.jpg"
                          alt="Book Lovers"
                          className="rounded-lg shadow-lg"
                      />
                  </div>

                  {/* Text Section */}
                  <div className="md:w-7/12 lg:w-6/12">
                      <h2 className="text-3xl text-gray-900 font-bold md:text-4xl">
                          A Haven for Book Lovers
                      </h2>
                      <p className="mt-6 text-gray-700">
                          Welcome to your go-to platform for all things books! Whether you’re an avid reader, a casual enthusiast, or someone just starting their literary journey, we’ve created this space to celebrate the joy of reading.
                      </p>
                      <p className="mt-4 text-gray-700">
                          Discover new genres, dive into compelling stories, and connect with a community that shares your passion. At [Your Website Name], we believe that every book has the power to transform, inspire, and entertain.
                      </p>
                      <p className="mt-4 text-gray-700">
                          Explore our carefully curated collections and embark on a literary adventure today!
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
