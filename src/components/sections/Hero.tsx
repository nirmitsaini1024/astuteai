"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Transform Your E-commerce
          <br />
          with AI Power
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          ShopFrontAI revolutionizes online stores with intelligent automation,
          personalized shopping experiences, and data-driven insights.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
            Start Free Trial
          </button>
          <button className="border border-purple-600 hover:bg-purple-600/10 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
