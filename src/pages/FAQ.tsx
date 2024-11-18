import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { faqs } from "../data/faq";

interface FAQItem {
  title: string;
  description: string | null;
  id: number;
  hyperLinkText?: string;
  hyperLink?: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const [faqsToShow, setFaqsToShow] = useState<FAQItem[]>(
    faqs.slice(0, 20).map((faq) => ({
      ...faq,
      description: faq.description ?? null,
    }))
  );
  const [loading, setLoading] = useState(false);
  const [hasMoreFaqs, setHasMoreFaqs] = useState(true);

  useEffect(() => {
    const loadMoreFaqs = () => {
      if (hasMoreFaqs) {
        setLoading(true);
        setTimeout(() => {
          const newFaqs = faqs
            .slice(faqsToShow.length, faqsToShow.length + 20)
            .map((faq) => ({
              ...faq,
              description: faq.description ?? null,
            }));
          setFaqsToShow((prevFaqs) => [...prevFaqs, ...newFaqs]);
          setLoading(false);
          if (newFaqs.length < 20) {
            setHasMoreFaqs(false);
          }
        }, 1000);
      }
    };
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.body.offsetHeight;
      if (scrollPosition >= documentHeight * 0.8 && !loading) {
        loadMoreFaqs();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [faqsToShow, hasMoreFaqs, loading]);

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
        {faqsToShow.map((faq, index: number) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              onClick={() => toggleQuestion(index)}
            >
              <span className="font-semibold text-gray-900">{faq.title}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-orange-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
            {openIndex === index && (
              <div
                className="px-6 py-4 bg-gray-50"
                dangerouslySetInnerHTML={{ __html: faq.description || "" }}
              />
            )}
          </div>
        ))}
        {loading && (
          <div className="text-center py-4 flex justify-center">
            <svg
              className="animate-spin h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12H4z"
              />
            </svg>
          </div>
        )}
        {!hasMoreFaqs && (
          <div className="text-center py-4">
            <p>No more FAQs to load.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
