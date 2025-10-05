import { useState } from "react";

const Poems = () => {
  const [selectedImage, setSelectedImage] = useState('');

  return (
    <div className="container mx-auto px-4 font-inter sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[850px] space-y-4 pb-4 pt-[100px] sm:space-y-5 sm:pb-6 sm:pt-[120px] md:pb-20 md:pt-[150px]">
        
        {/* Grid of Images */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
          {Array.from({ length: 48 }, (_, i) => (
            <div
              key={i}
              className="transform overflow-hidden rounded-2xl shadow-md transition duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(`/poems/${i + 1}.png`)}
            >
              <img
                src={`/poems/${i + 1}.png`}
                alt={`Gallery ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 w-screen h-screen !mt-0">
            <div className="relative max-w-4xl w-full p-4">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage('')}
                className="absolute -top-4 -right-4 rounded-full bg-white shadow-md hover:bg-gray-200 w-8 h-8"
              >
                ✕
              </button>

              {/* Full Image */}
              <img
                src={selectedImage}
                alt="Full View"
                className="w-full rounded-lg object-contain max-h-[90vh]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Poems;
