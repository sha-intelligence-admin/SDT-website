import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Mb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const currentRef = imgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {!isInView ? (
        // Placeholder before image enters viewport
        <img
          src={placeholder}
          alt={`${alt} placeholder`}
          className={`w-full h-full object-cover transition-opacity duration-300 ${className}`}
          style={{ width, height }}
        />
      ) : (
        <>
          {/* Placeholder while loading */}
          {!isLoaded && (
            <img
              src={placeholder}
              alt={`${alt} placeholder`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${className}`}
              style={{ width, height }}
            />
          )}
          
          {/* Actual image */}
          {!hasError ? (
            <img
              src={src}
              alt={alt}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              } ${className}`}
              onLoad={handleLoad}
              onError={handleError}
              loading="lazy"
              width={width}
              height={height}
              {...props}
            />
          ) : (
            // Error fallback
            <div className={`w-full h-full bg-gray-200 flex items-center justify-center ${className}`}>
              <span className="text-gray-500 text-sm">Failed to load image</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LazyImage;