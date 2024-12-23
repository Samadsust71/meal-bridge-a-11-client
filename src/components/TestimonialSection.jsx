import  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Lee",
    role: "Food Donor",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback: "MealBridge made it so easy to share surplus food with those in need. A wonderful initiative!",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Food Recipient",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback: "This platform helped me provide meals for my family during tough times. Truly life-changing!",
  },
  {
    id: 3,
    name: "Emily Brown",
    role: "Volunteer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback: "I love how MealBridge connects donors and recipients seamlessly. Proud to be a part of this!",
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
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center  mb-6">
          What People Are Saying
        </h2>
        <div className="relative flex justify-center items-center">
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
                    className="max-w-xl bg-base-100 p-6 rounded-lg shadow-md text-center"
                  >
                    <img
                      className="w-16 h-16 rounded-full mx-auto mb-4"
                      src={testimonial.image}
                      alt={`${testimonial.name} photo`}
                    />
                    <h3 className="text-lg font-semibold  mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm  mb-3">{testimonial.role}</p>
                    <p className="">{testimonial.feedback}</p>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
