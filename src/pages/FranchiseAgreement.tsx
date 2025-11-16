import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Handshake } from "lucide-react";

const FranchiseAgreement = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-4 sm:mb-6">
              <Handshake className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">Franchise Agreement</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Last updated: January 2025</p>
          </div>

          <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-12 shadow-lg space-y-6 sm:space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">1. Agreement Overview</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                This Franchise Agreement outlines the terms and conditions for operating an O Mama smart fridge under either the O Mama Point or O Mama Biz model.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">2. O Mama Point Model</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                Under this model:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-2 sm:ml-4">
                <li>Zero upfront cost - 100% free installation</li>
                <li>O Mama handles all stocking, cleaning, and maintenance</li>
                <li>Host location pays approximately BDT 10K/month (subject to agreement)</li>
                <li>50% sales and branding profit share arrangement</li>
                <li>Minimum 3-month commitment period</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">3. O Mama Biz Model</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                Under this model:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-2 sm:ml-4">
                <li>One-time payment of BDT 49K for O Mama kit</li>
                <li>Operator manages inventory and local sourcing</li>
                <li>BDT 7.5 transaction fee per purchase</li>
                <li>Lifetime access to cloud, app, and dashboard</li>
                <li>Co-branding allowed with 100% of extra branding revenue retained</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">4. Operator Responsibilities</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                The operator agrees to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-2 sm:ml-4">
                <li>Provide 3×3 feet space with Wi-Fi and power connection</li>
                <li>Ensure safe and accessible location for customers</li>
                <li>Maintain cleanliness around the machine area</li>
                <li>Report any technical issues promptly</li>
                <li>Comply with all food safety regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">5. O Mama Responsibilities</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                O Mama agrees to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-2 sm:ml-4">
                <li>Provide technical support and maintenance</li>
                <li>Ensure app and dashboard functionality</li>
                <li>Process all transactions securely</li>
                <li>Provide training and operational guidelines</li>
                <li>Maintain product quality standards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">6. Termination</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Either party may terminate this agreement with 30 days written notice after the minimum commitment period. O Mama will remove equipment at no cost to the operator.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">7. Intellectual Property</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                All O Mama branding, technology, and intellectual property remain the exclusive property of Solution Hub Technologies.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">8. Contact for Agreement</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                To discuss franchise opportunities and finalize agreements, contact us at hello@omama.com.bd
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default FranchiseAgreement;
