export default function Contact() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8 md:px-16 lg:px-32">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800">Contact</h2>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Left - Live Google Map */}
        <div className="w-full lg:w-1/2 h-80">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31695.972315029474!2d106.94503584513407!3d-6.413615544014649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6992ae9a78773d%3A0x524c16a958013835!2sCileungsi%2C%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1683888888888!5m2!1sen!2sid"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="rounded w-full h-full border-none"
          ></iframe>
        </div>

        {/* Right - Contact Form */}
        <form className="w-full lg:w-1/2 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full sm:w-1/2 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full sm:w-1/2 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <textarea
            placeholder="Enter message here.."
            rows={5}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}