import React from 'react'

export default function About() {
  return (
    <>
       <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 mb-4">
        Welcome to our store! We are dedicated to providing you with the best quality products at competitive prices.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
      <p className="text-gray-700 mb-4">
        Our mission is to offer an unparalleled shopping experience and to make high-quality products accessible to everyone.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Vision</h2>
      <p className="text-gray-700 mb-4">
        We envision a world where every home has access to beautifully crafted products that enhance their daily lives.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Values</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Quality: We prioritize quality in every product we offer.</li>
        <li>Customer Satisfaction: Your satisfaction is our top priority.</li>
        <li>Integrity: We operate with transparency and honesty.</li>
        <li>Innovation: We continuously seek to improve and innovate our offerings.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Get in Touch</h2>
      <p className="text-gray-700 mb-4">
        Have any questions? Feel free to <a href="/contact" className="text-blue-500 hover:underline">contact us</a> anytime!
      </p>
    </div>
    </>
  )
}
