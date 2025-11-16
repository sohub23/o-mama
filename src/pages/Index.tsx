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
      <div id="home">
        <Hero />
      </div>
      <ScrollAnimationWrapper>
        <div id="why-we-started">
          <WhyWeStarted />
        </div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <div id="about">
          <WhatOMamaIs />
        </div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <div id="benefits">
          <Benefits />
        </div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <div id="menu">
          <Menu />
        </div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <div id="how-it-works">
          <HowItWorks />
        </div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <div id="seamless-control">
          <SeamlessControl />
        </div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <div id="business-models">
          <BusinessModels />
        </div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <div id="gallery">
          <Gallery />
        </div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <div id="faq">
          <FAQ />
        </div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <div id="contact">
          <Contact />
        </div>
      </ScrollAnimationWrapper>
      <Footer />
    </main>;
};
export default Index;