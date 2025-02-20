'use client';

const BeesAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Top left bee */}
      <div className="absolute top-8 left-8 transform -rotate-12">
        <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
          <div className="relative w-12 h-12">
            {/* Body */}
            <div className="absolute inset-0 bg-amber-500 rounded-full"></div>
            {/* Stripes */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-black transform -translate-y-1/2"></div>
            <div className="absolute top-1/4 left-0 right-0 h-2 bg-black"></div>
            {/* Wings */}
            <div className="absolute -top-2 -left-2 w-8 h-4 bg-white rounded-full transform -rotate-45"></div>
            <div className="absolute -top-2 -right-2 w-8 h-4 bg-white rounded-full transform rotate-45"></div>
            {/* Face */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              </div>
              <div className="mt-1 w-2 h-1 bg-black rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom right bee */}
      <div className="absolute bottom-8 right-8 transform rotate-12">
        <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-amber-500 rounded-full"></div>
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-black transform -translate-y-1/2"></div>
            <div className="absolute top-1/4 left-0 right-0 h-2 bg-black"></div>
            <div className="absolute -top-2 -left-2 w-8 h-4 bg-white rounded-full transform -rotate-45"></div>
            <div className="absolute -top-2 -right-2 w-8 h-4 bg-white rounded-full transform rotate-45"></div>
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              </div>
              <div className="mt-1 w-2 h-1 bg-black rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative flowers */}
      <div className="absolute top-24 right-24">
        <div className="w-12 h-12 bg-pink-300 rounded-full flex flex-wrap">
          <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
          <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
          <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
          <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
        </div>
      </div>

      <div className="absolute bottom-24 left-24">
        <div className="w-12 h-12 bg-purple-300 rounded-full flex flex-wrap">
          <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
          <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
          <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
          <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
        </div>
      </div>

      {/* Rainbow arc */}
      <div className="absolute top-0 left-1/4 right-1/4 h-4 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 rounded-b-full opacity-30"></div>
    </div>
  );
};

export default BeesAnimation;