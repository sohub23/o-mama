import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyWeStarted } from "@/components/WhyWeStarted";
import { WhatOMamaIs } from "@/components/WhatOMamaIs";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Menu } from "@/components/Menu";
import { HowItWorks } from "@/components/HowItWorks";
import { SeamlessControl } from "@/components/SeamlessControl";
import { BusinessModels } from "@/components/BusinessModels";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

import { Footer } from "@/components/Footer";

import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
const Index = () => {
  return <main className="min-h-screen">
      <Navbar />
      <div id="home" className="-scroll-mt-8 lg:-scroll-mt-8">
        <Hero />
      </div>
      <div id="why-we-started" className="-scroll-mt-8 lg:-scroll-mt-16">
        <ScrollAnimationWrapper>
            <WhyWeStarted />
        </ScrollAnimationWrapper>
      </div>
      <div id="about" className="-scroll-mt-6 lg:-scroll-mt-8">
        <ScrollAnimationWrapper>
            <WhatOMamaIs />
        </ScrollAnimationWrapper>
      </div>
      <div id="benefits" className="-scroll-mt-8 lg:-scroll-mt-16">
        <ScrollAnimationWrapper>
            <Benefits />
        </ScrollAnimationWrapper>
      </div>
      <div id="menu" className="-scroll-mt-8 lg:-scroll-mt-16">
        <ScrollAnimationWrapper>
            <Menu />
        </ScrollAnimationWrapper>
      </div>
      <div id="how-it-works" className="-scroll-mt-8 lg:-scroll-mt-16">
        <ScrollAnimationWrapper>
            <HowItWorks />
        </ScrollAnimationWrapper>
      </div>
      <div id="seamless-control" className="-scroll-mt-8 lg:-scroll-mt-16">
        <ScrollAnimationWrapper>
            <SeamlessControl />
        </ScrollAnimationWrapper>
      </div>
      <div id="business-models" className="-scroll-mt-8 lg:-scroll-mt-16">
        <ScrollAnimationWrapper>
            <BusinessModels />
        </ScrollAnimationWrapper>
      </div>
      <div id="gallery" className="-scroll-mt-8 lg:-scroll-mt-16">
        <ScrollAnimationWrapper>
            <Gallery />
        </ScrollAnimationWrapper>
      </div>
      <div id="faq" className="-scroll-mt-8 lg:-scroll-mt-16">
        <ScrollAnimationWrapper>
            <FAQ />
        </ScrollAnimationWrapper>
      </div>
      <div id="contact" className="-scroll-mt-8 lg:-scroll-mt-16">
        <ScrollAnimationWrapper>
            <Contact />
        </ScrollAnimationWrapper>
      </div>
      <Footer />
    </main>;

};
export default Index;