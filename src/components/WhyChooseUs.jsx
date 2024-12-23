
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Community Impact",
      description: "Directly contribute to reducing food waste and supporting those in need within your community.",
      icon: "🌍",
    },
    {
      id: 2,
      title: "User-Friendly Platform",
      description: "Our intuitive design makes it easy to share and request food with just a few clicks.",
      icon: "👍",
    },
    {
      id: 3,
      title: "Secure & Reliable",
      description: "We prioritize your security with robust authentication and data protection measures.",
      icon: "🔒",
    },
    {
      id: 4,
      title: "Flexible Options",
      description: "Choose from a wide range of food items and flexible pickup times that suit your needs.",
      icon: "📦",
    },
  ];

  return (
    <section className="py-12 bg-base-100">
      <div className="px-6">
        <h2 className="text-3xl font-bold text-center  mb-6">
          Why Choose <span className="text-blue-500">MealBridge</span>?
        </h2>
        <p className="text-center  mb-10">
          Empowering communities by connecting those with surplus food to those in need. Here&apos;s what makes us unique:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-base-300 p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: feature.id * 0.2 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold  mb-2">{feature.title}</h3>
              <p className="">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
