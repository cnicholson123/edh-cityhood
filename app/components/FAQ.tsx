import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openConcernIndex, setConcernOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why change if EDH is already great?",
      answer: "While EDH is indeed wonderful, becoming a city allows us to maintain and improve our community. We'll have better control over future developments, like Amazon warehouses, open space rezoning, and major development processes. Local control means better management of our community's growth and character."
    },
    {
      question: "Will this require new taxes?",
      answer: "No new taxes will be required. Based on preliminary feasibility studies, the city can operate on existing tax revenues. If studies show that new taxes would be needed, the process will end before reaching a vote."
    },
    {
      question: "What happens to existing services?",
      answer: "Essential services like Fire/EMS, Schools, Water, Judicial, Jails, and Public Health will remain with the County and other Districts. The CSD will be dissolved, with Parks & Recreation functions being absorbed by the new city."
    },
    {
      question: "How will local control improve?",
      answer: "The city will be governed by a five-member City Council, all from EDH and elected only by EDH residents. This ensures decisions about our community are made by people who live here and understand our needs."
    },
    {
      question: "What's the timeline for becoming a city?",
      answer: "The process targets November 2026 for the ballot measure. Key milestones include a March 13, 2025 CSD Board meeting, followed by comprehensive fiscal and environmental analyses."
    },
    {
      question: "How will cityhood improve law enforcement?",
      answer: "Under cityhood, El Dorado Hills would have its own dedicated local police force that patrols exclusively within EDH boundaries. This means faster response times, as officers won't be pulled away to cover other parts of the county. Local police can focus on EDH-specific needs and priorities, develop deeper community relationships, and provide more consistent coverage. Additionally, having our own police force means local control over law enforcement policies, priorities, and resource allocation to better serve our community's specific needs."
    },
    {
      question: "How would local planning and zoning help EDH?",
      answer: "Local planning and zoning control would give EDH residents direct oversight over our community's development. Instead of decisions being made in Placerville, a local City Council would control crucial matters like the Amazon warehouse proposals, open space rezoning, and major development projects. For complex projects like the Old Golf Course, the city would have comprehensive power to manage all aspects of development. This means better protection of EDH's character and the ability to ensure new projects align with our community's vision.  If EDH had been a city, we very likely could have purchased the Old Golf Course for a much lower price because we would not have approved a residential re-zone."
    }
  ];

  const concerns = [
    {
      question: "Won't this require new taxes?",
      answer: "No. A third-party preliminary study showed that our city is viable and will operate at a surplus without new taxes. The next step is to do a comprehensive fiscal analysis. If it shows that the city is not viable without new taxes, then cityhood would fail before reaching voters. The county is collecting far more from EDH than it spends on EDH. The money is there."
    },
    {
      question: "Even if viable initially, won't future events require tax increases?",
      answer: "The future is uncertain, but a city would not increase uncertainty. The state and/or county could also face financial crises causing them to seek new taxes or cut services. EDH voters will decide - the city will not be able to impose new taxes without a vote of EDH residents."
    },
    {
      question: "Won't this add another layer of government?",
      answer: "No. Incorporation would consolidate and streamline municipal services from two government agencies – El Dorado County and the El Dorado Hills Community Services District (CSD) – to one El Dorado Hills city government serving our community. There will be no duplication of services, only a consolidation of government services."
    },
    {
      question: "I moved to EDH to escape another city. I don't want to live in a city.",
      answer: "'City' is just a word that means 'local control.' The real-world impact of cityhood will depend on actions of our City Council, which will be elected by local residents only, instead of 5 County Board of Supervisors operating from Placerville."
    },
    {
      question: "Will this mean more low-income housing in EDH?",
      answer: "No. Currently, El Dorado County is in control of placement of affordable housing in EDH. Incorporation does not increase the overall regional low-income housing allocation. As a city, we will have a seat at the table and have local control over how and where to plan for affordable housing instead of the County."
    },
    {
      question: "Does cityhood mean more growth?",
      answer: "No. The opponents of cityhood in 2005 made this argument. Under county control, EDH has grown a lot since 2005. Growth more than doubled from 18,000 residents in 2000 to 42,000 in 2010. The current population is approximately 50,000. Cityhood puts local residents in charge of land use decisions impacting growth. There would be no future re-zones without city approval."
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-800">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto mb-20">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-green-50 rounded-lg hover:bg-green-100 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-green-800">{faq.question}</h3>
                  {openIndex === index ? (
                    <FaChevronUp className="text-green-600" />
                  ) : (
                    <FaChevronDown className="text-green-600" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-700">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-center mb-16 text-green-800">Potential Concerns</h2>
        
        <div className="max-w-3xl mx-auto">
          {concerns.map((concern, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-red-50 rounded-lg hover:bg-red-100 transition"
                onClick={() => setConcernOpenIndex(openConcernIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-red-800">{concern.question}</h3>
                  {openConcernIndex === index ? (
                    <FaChevronUp className="text-red-600" />
                  ) : (
                    <FaChevronDown className="text-red-600" />
                  )}
                </div>
                {openConcernIndex === index && (
                  <p className="mt-4 text-gray-700">{concern.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 