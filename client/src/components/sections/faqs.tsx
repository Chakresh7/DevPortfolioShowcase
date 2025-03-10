import { useQuery } from "@tanstack/react-query";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionDiv, fadeIn } from "@/components/ui/motion";
import type { FAQ } from "@shared/schema";

export function FAQs() {
  const { data: faqs, isLoading } = useQuery<FAQ[]>({ 
    queryKey: ["/api/faqs"]
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <MotionDiv
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible>
            {faqs?.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id.toString()}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionDiv>
      </div>
    </section>
  );
}
