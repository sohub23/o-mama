import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20 sm:pt-32 pb-12 sm:pb-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-4 sm:mb-6">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">Terms of Service</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Last updated: January 2025</p>
          </div>

          <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-12 shadow-lg space-y-6 sm:space-y-8">
            <section>
              <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">1. Acceptance of Terms</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                By accessing and using O Mama smart fridge services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">2. Use of Service</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-2 sm:ml-4">
                <li>Use the service in any way that violates any applicable law or regulation</li>
                <li>Attempt to interfere with the proper working of the service</li>
                <li>Engage in any fraudulent activity</li>
                <li>Misuse or damage the smart fridge equipment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">3. Payment Terms</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                All products are sold at MRP (Market Retail Price). Payment is processed automatically through our app after product selection. You are responsible for maintaining sufficient balance in your account.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">4. Product Quality</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We strive to maintain the highest quality and freshness of all products. If you receive a defective or expired product, please contact us immediately for a refund or replacement.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">5. Limitation of Liability</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                O Mama shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">6. Changes to Terms</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or app notification.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">7. Contact Information</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                For questions about these Terms, contact us at hello@sohub.com.bd
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default TermsOfService;
