import React from 'react';
import { FaFilePdf, FaArrowUp } from 'react-icons/fa';

const MoreInfo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const documents = [
    {
      title: "Cityhood Handout",
      filename: "CityhoodHandout.pdf",
      description: "Two-page summary to share with friends"
    },
    {
      title: "2021 Study",
      filename: "2021_Preliminary_Study.pdf",
      description: "Most recent prior study that concludes that EDH would be viable as a new city and would operate at a surplus."
    }
  ];

  return (
    <section className="py-20 bg-white" id="more-info">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-800">Additional Resources</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {documents.map((doc, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
                <div className="flex items-center mb-4">
                  <FaFilePdf className="text-red-600 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-green-800">{doc.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                <a
                  href={`/documents/${doc.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-700 hover:text-green-900 font-semibold"
                >
                  View Document
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end mt-12">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <FaArrowUp /> Back to Top
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo; 