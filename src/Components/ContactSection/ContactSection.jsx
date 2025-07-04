import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/mblywoyq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) toast.success("Message sent successfully!");
    else toast.error("Failed to send message.");
  };

  return (
    <section id="contact" className="w-full relative bg-black text-white py-50 px-4">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Let's Create <span className="text-primary">Together</span></h2>
          <p className="text-gray-400 text-lg">
            Turn your vision into reality with our expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Contact Info */}
          <div className="bg-transparent rounded-2xl py-6 md:py-10 space-y-6">
            <h3 className="text-3xl font-bold text-primary">Get in Touch</h3>
            <p className="text-gray-300">
              Have a question or want to work together? Drop a message!
            </p>

            <div className="flex gap-4 mt-4">
              <a href="https://github.com/mdshahariarhafizofficial" target="_blank" className="text-white hover:text-primary"><FaGithub size={28} /></a>
              <a href="https://www.linkedin.com/in/devshahariarhafiz" target="_blank" className="text-white hover:text-primary"><FaLinkedinIn size={28} /></a>
              <a href="https://wa.me/+8801748630374" target="_blank" className="text-white hover:text-primary"><FaWhatsapp size={28} /></a>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-[#1c1c1c] p-3 rounded-xl">
                  <FaEnvelope className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">shahariar.works@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#1c1c1c] p-3 rounded-xl">
                  <FaPhoneAlt className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300">+880 1748630374</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#1c1c1c] p-3 rounded-xl">
                  <FaMapMarkerAlt className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-300">C & B 1 No. Road, Barishal Sadar, Barishal, Bangladesh.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#0f0f0f] rounded-2xl shadow-lg p-6 md:p-10 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full bg-[#1c1c1c] p-2 rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full bg-[#1c1c1c] p-2 rounded-md focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                   placeholder="Enter your email address"
                   required
                  className="w-full bg-[#1c1c1c] p-2 rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                   placeholder="Enter subject"
                  className="w-full bg-[#1c1c1c] p-2 rounded-md focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message..."
                required
                className="w-full bg-[#1c1c1c] p-2 rounded-md focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-green-500 py-2 rounded-md flex justify-center items-center gap-2 text-black font-semibold hover:opacity-90"
            >
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>

      {/* background lighting effect */}
      <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-teal-700 rounded-full blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[150px] opacity-10"></div>      
    </section>
  );
}
