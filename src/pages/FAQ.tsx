import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import faqData from '../data/faq.json';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const { data: faqs } = useQuery({
    queryKey: ['faqs'],
    queryFn: () => Promise.resolve(faqData.faqs),
    initialData: faqData.faqs,
  });

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <HelpCircle className="h-16 w-16 text-orange-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600">
          Everything you need to know about Swiggy Money vouchers
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq: FAQItem, index: number) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              onClick={() => toggleQuestion(index)}
            >
              <span className="font-semibold text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-orange-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
            {openIndex === index && (
              <div 
                className="px-6 py-4 bg-gray-50"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;