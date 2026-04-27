import { useState } from "react";
import Toast from "./Toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      await response.json();
      
      // Show success toast
      setToast({
        message: "✨ Message sent successfully! I'll get back to you soon.",
        type: "success",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setToast({
        message: "❌ Failed to send message. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 dark:bg-dark-secondary px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-slide-up">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Have a project in mind? Let's talk!
        </p>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <div className="bg-dark-bg p-6 rounded-xl border border-dark-tertiary text-center hover:border-purple-500/50 transition">
            <div className="text-3xl mb-3">✉️</div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a href="mailto:anithajayavel2005@gmail.com" className="text-purple-400 hover:text-purple-300 transition">
              anithajayavel2005@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-dark-bg p-6 rounded-xl border border-dark-tertiary text-center hover:border-purple-500/50 transition">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a href="tel:+919876543210" className="text-purple-400 hover:text-purple-300 transition">
              9876543210
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-dark-bg p-6 rounded-xl border border-dark-tertiary text-center hover:border-purple-500/50 transition">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/anitha-j-b38523329/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition">
              Connect with me
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-dark-bg p-8 rounded-xl border border-dark-tertiary"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Send me a message</h3>
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-dark-tertiary focus:border-purple-500 focus:outline-none transition text-white placeholder-gray-500"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-dark-tertiary focus:border-purple-500 focus:outline-none transition text-white placeholder-gray-500"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-dark-tertiary focus:border-purple-500 focus:outline-none transition text-white placeholder-gray-500 resize-none"
              placeholder="Your message..."
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition">
            🐙
          </a>
          <a href="https://linkedin.com/in/anitha-j-b38523329/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition">
            💼
          </a>
          <a href="mailto:anithajayavel2005@gmail.com" className="text-2xl hover:scale-110 transition">
            ✉️
          </a>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}

export default Contact;