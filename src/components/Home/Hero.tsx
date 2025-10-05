const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-orange-400/20 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 pt-32 pb-20 text-center">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Myth Memes
          </h1>
          <h2 className="text-xl font-bold leading-relaxed sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 max-w-4xl mx-auto">
            Where ancient legends collide with tomorrow's technology, where gods, monsters, and mortals leap from the fires of imagination into the digital age.
          </h2>
          <p className="text-lg leading-relaxed sm:text-xl text-gray-300 max-w-5xl mx-auto">
            We are not simply a website. We are the keepers of <span className="text-yellow-400 font-bold">Myth Memes Origins</span>, 
            the cradle of entirely new myths never told before. Our universe is a realm where epic characters battle across time itself—some born to defend the light, 
            some forged in the heart of darkness, and others walking the delicate line between chaos and order.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-4 px-8 rounded-full hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Explore Legends
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 font-bold py-4 px-8 rounded-full hover:bg-yellow-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
