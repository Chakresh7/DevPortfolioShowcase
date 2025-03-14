import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What technologies do you use?",
      answer: "I primarily work with React, TypeScript, Node.js, and modern web technologies to create fast and scalable applications.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and requirements. A simple website might take 2-4 weeks, while a complex application could take 2-3 months.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, I offer maintenance and support services to ensure your application continues to run smoothly after launch.",
    },
    {
      question: "What is your development process?",
      answer: "I follow an agile methodology with regular client communication, iterative development, and continuous testing to ensure high-quality results.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          <MotionDiv variants={fadeIn} className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Common questions about my services and process
            </p>
          </MotionDiv>

          <MotionDiv variants={fadeIn}>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 text-left hover:bg-muted/50"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="p-4 bg-muted/50 border-t">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
} 