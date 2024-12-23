import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Lee",
    role: "Food Donor",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "MealBridge made it so easy to share surplus food with those in need. A wonderful initiative!",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Food Recipient",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "This platform helped me provide meals for my family during tough times. Truly life-changing!",
  },
  {
    id: 3,
    name: "Emily Brown",
    role: "Volunteer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "I love how MealBridge connects donors and recipients seamlessly. Proud to be a part of this!",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-[#FEF5E9]">
      <div>
        <h2 className="text-2xl lg:text-4xl font-bold text-center  mb-10">What People Are Saying!!!</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* right content */}
          <div className="flex flex-col items-center justify-center">
            <form
              className="bg-white p-8 rounded-lg shadow-lg space-y-4 w-full max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Name Input */}
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-bg"
                />
                {/* Email Input */}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-bg"
                />
              </div>
              {/* Phone Input */}
              <input
                type="text"
                placeholder="Role (e.g Donor)"
                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-bg"
              />
              {/* Message Input */}
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 max-h-40 min-h-40 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-bg"
              ></textarea>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full p-3 bg-primary-bg text-white font-semibold rounded-full hover:bg-primary-bg/95 transition duration-200"
              >
                Send It!
              </button>
            </form>
          </div>
          {/* left content */}
          <div className="relative  flex justify-center items-center text-primary">
            <AnimatePresence mode="wait">
              {testimonials.map(
                (testimonial, index) =>
                  index === currentIndex && (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.8 }}
                      className="p-6 max-w-md rounded-lg shadow-md bg-white"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          className="w-16 h-16 rounded-full"
                          src={testimonial.image}
                          alt={`${testimonial.name} photo`}
                        />
                        <div>
                        <h3 className="text-lg font-semibold ">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm  mb-3">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="mt-6">{testimonial.feedback}</p>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
