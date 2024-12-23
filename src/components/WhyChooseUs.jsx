

const WhyChooseUs = () => {
  const features = [
    { question: "How does this food sharing work?", answer: "It's simple! Share what you don't need and grab what you want!" },
    { question: "Is there a fee to join?", answer: "Nope! It's free to join the food revolution!" },
    { question: "Can I share cooked meals?", answer: "Absolutely! Just make sure it's safe and delicious!" },
    { question: "How do I find local sharers?", answer: "Use our nifty map feature to connect!" },
    { question: "What if I have too much food?", answer: "Share it! Don’t let it go to waste!" },
  ];

  return (
    <section className="bg-[#FEF5E9] text-primary py-10">
    <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-center">
      Curious Minds Ask!
    </h2>
    <div className="space-y-4 max-w-2xl mx-auto">
      {features.map((faq, index) => (
        <details
          key={index}
          className="bg-[#FFFFFF] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
        >
          <summary className="font-semibold text-xl lg:text-2xl cursor-pointer flex justify-between items-center">
            {faq.question}
            <span className="text-xl font-bold">+</span>
          </summary>
          <p className="mt-2">{faq.answer}</p>
        </details>
      ))}
    </div>
  </section>
  );
};

export default WhyChooseUs;
