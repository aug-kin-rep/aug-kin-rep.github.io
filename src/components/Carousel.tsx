import React, { useEffect } from 'react';

interface CarouselProps {
  videos: string[];
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ videos, className = '' }) => {
  useEffect(() => {
    // Initialize carousel after component mounts
    const initCarousel = async () => {
      // Check if HSStaticMethods is available (PrelineUI)
      if (typeof window !== 'undefined' && (window as any).HSStaticMethods) {
        (window as any).HSStaticMethods.autoInit(['carousel']);
      }
    };
    
    initCarousel();
  }, []);

  // Helper function to extract id from video filename
  const getVideoId = (videoPath: string) => {
    const filename = videoPath.split('/').pop() || '';
    return filename.replace(/\.[^/.]+$/, ''); // Remove file extension
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        data-hs-carousel={JSON.stringify({
          isAutoHeight: true,
          loadingClasses: "opacity-0",
          dotsItemClasses: "hs-carousel-active:bg-gray-700 hs-carousel-active:border-gray-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-gray-500 dark:hs-carousel-active:border-gray-500",
          slidesQty: {
            xs: 2,
            lg: 3
          }
        })}
        className="relative"
      >
        <div className="hs-carousel w-full overflow-hidden bg-white rounded-lg dark:bg-neutral-900">
          <div className="relative min-h-48 -mx-1">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 transition-transform duration-700">
              {videos.map((video, index) => (
                <div key={getVideoId(video)} className="hs-carousel-slide px-1">
                  <div className={'flex justify-center h-full p-2 bg-gray-200 dark:bg-neutral-800'}>
                      <video
                        id={getVideoId(video)}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded-lg"
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        
        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>

        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 flex gap-x-2">
        </div>
      </div>
    </div>
  );
};

export default Carousel;
