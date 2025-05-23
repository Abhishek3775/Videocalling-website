import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Ultra HD Video",
      description: "Experience crystal-clear video quality with 4K support for immersive conversations.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      )
    },
    {
      title: "Screen Sharing",
      description: "Share your screen or specific apps effortlessly for presentations or collaboration.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M4 12h16M12 6v6m0 0l-3-3m3 3l3-3" />
      )
    },
    {
      title: "Global Connectivity",
      description: "Connect with anyone worldwide with low-latency, high-speed servers.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c2.5 2.5 2.5 6.5 0 9s-6.5 2.5-9 0" />
      )
    },
    {
      title: "Neon Security",
      description: "Stay safe with end-to-end encryption and advanced privacy protocols.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 1.105-.895 2-2 2s-2-.895-2-2 2-4 2-4 2 2.895 2 4z" />
      )
    },
    {
      title: "Virtual Whiteboard",
      description: "Collaborate in real-time with an interactive whiteboard for brainstorming.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      )
    },
    {
      title: "Custom Backgrounds",
      description: "Personalize your calls with vibrant, neon-themed virtual backgrounds.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7" />
      )
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">VideoVibe Features</h2>
        <p className="text-center text-gray-600 mb-8">
          Explore the powerful tools that make your video calls vibrant and seamless.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <svg
                className="w-12 h-12 text-blue-500 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {feature.icon}
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
