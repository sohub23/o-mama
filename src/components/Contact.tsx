import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: `Phone: ${formData.get('phone')}\nCompany: ${formData.get('company') || 'N/A'}\nInterest: ${formData.get('interest')}\n\nMessage: ${formData.get('message') || 'N/A'}`
    };

    try {
      const response = await fetch('http://localhost:3001/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      
      if (result.success) {
        toast.success("Thank you! We'll contact you within 24 hours.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Let's Get Started
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Ready to bring fresh food to your location? Fill out the form and we'll reach out within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-4 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="name" className="text-sm sm:text-base">Full Name *</Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="Your name" 
                    required 
                    className="h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">Email Address *</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                    className="h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    placeholder="+880 1XXX-XXXXXX" 
                    required 
                    className="h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="company" className="text-sm sm:text-base">Company/Organization</Label>
                  <Input 
                    id="company" 
                    name="company"
                    placeholder="Optional" 
                    className="h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="interest" className="text-sm sm:text-base">I'm interested in *</Label>
                  <select 
                    id="interest" 
                    name="interest"
                    required
                    className="w-full h-10 sm:h-12 px-3 sm:px-4 rounded-md border border-input bg-background text-sm sm:text-base"
                  >
                    <option value="">Select an option</option>
                    <option value="Installing machine (O Mama Point)">Installing machine (O Mama Point)</option>
                    <option value="Own your machine (O Mama Biz)">Own your machine (O Mama Biz)</option>
                    <option value="Book a Demo Visit">Book a Demo Visit</option>
                    <option value="Become Food Supplier">Become Food Supplier</option>
                    <option value="Become a Branding Partner">Become a Branding Partner</option>
                  </select>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="message" className="text-sm sm:text-base">Additional Details</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell us about your location, expected footfall, or any questions..."
                    rows={4}
                    className="text-sm sm:text-base"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-10 sm:h-12 text-sm sm:text-base" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-4 sm:p-8 space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Email Us</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">sohub.web@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Call Us</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">+88 09678-076482</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Mon-Sat, 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Visit Us</h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-3">
                      Flat #C2, House, 29 Katasur Rd, Dhaka 1207
                    </p>
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8208197536446!2d90.35867337353636!3d23.75376818865049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf807c30d3d9%3A0x9a6efc76f166ebe8!2sSolution%20Hub%20Technologies%20(SOHUB)!5e0!3m2!1sen!2sbd!4v1763288726049!5m2!1sen!2sbd" 
                      width="100%" 
                      height="200" 
                      style={{border: 0}} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg mb-2"
                    />
                    <a 
                      href="https://www.google.com/maps/dir//Solution+Hub+Technologies+(SOHUB)/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3755bf807c30d3d9:0x9a6efc76f166ebe8?sa=X&ved=1t:3061&ictx=111" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/5 rounded-xl sm:rounded-2xl p-4 sm:p-8 border-2 border-primary/20">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Response Guarantee</h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                We respond to all inquiries within 24 hours. For urgent requests, 
                call us directly during business hours.
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-medium">Average response time: 4 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
