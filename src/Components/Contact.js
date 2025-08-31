import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-center mb-5 pb-3">
        <div className="w-full md:w-7/12 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Contact</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Me</h2>
          <p className="text-gray-600">Seeking a proficient developer with expertise in using Visual Studio Code for source control management, capable of efficiently handling Git operations, including cloning, initializing, staging, committing, pushing, pulling, branching, and merging repositories, along with resolving conflicts and utilizing advanced extensions such as GitLens for enhanced functionality.Look no further!</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mb-5">
        <div className="w-full lg:w-1/4 p-4">
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <div className="flex items-center justify-center text-blue-500 mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <p>2239-60100 Nairobi Kenya</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <div className="flex items-center justify-center text-blue-500 mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Contact Number</h3>
            <p><a href="tel://1234567920" className="text-blue-500 hover:underline">+254717110274</a></p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <div className="flex items-center justify-center text-blue-500 mb-4">
              <span className="text-2xl">✉️</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Email Address</h3>
            <p><a href="mailto:ngangamaina091@gmail.com" className="text-blue-500 hover:underline">ngangamaina091@gmail.com</a></p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <div className="flex items-center justify-center text-blue-500 mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Website</h3>
            <a href="/#" className="text-blue-500 hover:underline">Jmnportfolio.com</a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap no-gutters">
        <div className="w-full md:w-1/2 order-md-last flex items-center justify-center p-4">
          <form action="#" className="bg-gray-100 shadow-md rounded-lg p-8 w-full">
            <div className="flex flex-col items-center">
              <div className="form-group mb-4 w-full md:w-3/4 lg:w-2/3">
                <input type="text" className="form-control w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Name" />
              </div>
              <div className="form-group mb-4 w-full md:w-3/4 lg:w-2/3">
                <input type="text" className="form-control w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Email" />
              </div>
              <div className="form-group mb-4 w-full md:w-3/4 lg:w-2/3">
                <input type="text" className="form-control w-full p-3 border border-gray-300 rounded-lg" placeholder="Subject" />
              </div>
              <div className="form-group mb-4 w-full md:w-3/4 lg:w-2/3">
                <textarea className="form-control w-full p-3 border border-gray-300 rounded-lg" cols="30" rows="7" placeholder="Message"></textarea>
              </div>
              <div className="form-group w-full md:w-3/4 lg:w-2/3">
                <input type="submit" value="Send Message" className="btn btn-primary bg-gray-800 text-white py-3 px-5 rounded-lg w-full" />
              </div>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div className="img bg-cover bg-center w-full h-96" style={{ backgroundImage: 'url(images/about.jpg)' }}></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;