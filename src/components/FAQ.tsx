import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StaggeredItem } from "@/components/StaggeredItem";

export const FAQ = () => {
  const pointFAQs = [
    {
      question: "Is there any upfront cost or deposit?",
      answer: "No — installation, setup, and maintenance are completely free."
    },
    {
      question: "Can we customize food items?",
      answer: "Yes — menus can be adjusted based on employee preferences or dietary needs."
    },
    {
      question: "What if our office closes on weekends?",
      answer: "No issue — the machine runs 24/7; you only earn when sales happen."
    },
    {
      question: "How soon can it be removed if we stop?",
      answer: "Cancel anytime after 3 months — we'll uninstall at no cost."
    },
    {
      question: "Is pricing fixed?",
      answer: "Always sold at MRP — transparent pricing, no markup for customers."
    },
    {
      question: "How are transactions managed?",
      answer: "All transactions are handled automatically by SOHUB's intelligent computer-vision backend system, processed approx. 30 minutes after each use."
    },
    {
      question: "What if someone makes a negative balance?",
      answer: "Normally, only users with positive wallet balances can unlock and take items. If a user exceeds their balance, the system automatically deducts the pending amount from their next payment."
    },
    {
      question: "Is the system suitable for open public use?",
      answer: "Currently, it's optimized for closed user groups (offices, universities, hospitals, etc.) where authorized users are registered for secure access."
    }
  ];

  const bizFAQs = [
    {
      question: "How long to recover my investment?",
      answer: "It depends on sales volume and location — most partners recover within a few months."
    },
    {
      question: "Can I install multiple machines?",
      answer: "Absolutely — each unit connects to your central dashboard for easy multi-location management."
    },
    {
      question: "How are transactions handled?",
      answer: "Every transaction is processed through the SOHUB intelligent backend using computer vision and real-time cloud sync, typically completed in approximately 30 minutes."
    },
    {
      question: "Who provides the food stock?",
      answer: "You can source locally — we share vendor lists, safety guidelines, and quality control steps."
    },
    {
      question: "Can I rebrand the machine?",
      answer: "Yes — co-branding is allowed, and you keep 100% of your own extra branding revenue."
    },
    {
      question: "What happens if a user overspends their balance?",
      answer: "If a customer's balance goes negative, the system will auto-deduct the owed amount from their next top-up or wallet recharge if applicable."
    },
    {
      question: "Can this work for open public places like malls or train stations?",
      answer: "Yes, but we recommend starting with controlled-access zones (offices, hostels, campuses) for maximum efficiency and safety during early rollout."
    },
    {
      question: "Is the freezer included in the O Mama Kit price?",
      answer: "Yes, it's a fully integrated solution — all components (AI cameras, payment system, freezer, app) are included."
    },
    {
      question: "What happens after 3 years?",
      answer: "You can upgrade to newer models, continue with the existing setup, or return the unit under agreed terms."
    },
    {
      question: "How fast can installation happen?",
      answer: "Once a location is confirmed, installation typically happens within 3–7 business days."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about O Mama Point and O Mama Biz
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="install" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="install">O Mama Point</TabsTrigger>
              <TabsTrigger value="buy">O Mama Biz</TabsTrigger>
            </TabsList>

            {/* O Mama Point FAQs */}
            <TabsContent value="install">
              <Accordion type="single" collapsible className="space-y-4">
                {pointFAQs.map((faq, index) => (
                  <StaggeredItem key={`point-${index}`} index={index}>
                    <AccordionItem value={`item-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </StaggeredItem>
                ))}
              </Accordion>
            </TabsContent>

            {/* O Mama Biz FAQs */}
            <TabsContent value="buy">
              <Accordion type="single" collapsible className="space-y-4">
                {bizFAQs.map((faq, index) => (
                  <StaggeredItem key={`biz-${index}`} index={index}>
                    <AccordionItem value={`op-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </StaggeredItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
