function PDFBtn() {
  return (
    <section
      id="pdf"
      className="flex flex-col items-center justify-center pb-20 pt-4 bg-purple-950/15"
    >
      <p className="text-lg md:text-xl text-gray-200 mb-4 text-center">
        Este documento PDF contiene información <br /> detallada acerca de
        nuestros servicios
      </p>
      <a
        href="https://drive.google.com/file/d/1oeJWK7D1anxPslaq_FpWo7EB8N9N3tt8/view?usp=sharing"
        target="_blank"
        rel="noreferrer noopener"
        className="
        border-2 border-purple-600
          flex items-center justify-center
          bg-purple-700 hover:bg-purple-800
          text-white font-bold py-3 px-6 rounded-lg
          transition duration-300 ease-in-out
          transform hover:scale-105 focus:outline-none
          focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Descargar PDF
      </a>
    </section>
  );
}

export default PDFBtn;
