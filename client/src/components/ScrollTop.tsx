import React, {useState, useEffect} from 'react';

const ScrollTop = () => {

    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Para un desplazamiento suave, puedes cambiarlo a 'auto' para un desplazamiento instantáneo
  });
};

  return (
    <>
    {
    showButton && 
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className="fixed bottom-5 right-5 flex items-center justify-center stroke-white rounded-3xl bg-lightGreen cursor-pointer w-10 h-10"
      onClick={scrollToTop}
      >
       <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      }
    </>
  )
}

export default ScrollTop