
import { useState, useEffect } from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import HowItWorks from '@/components/landing/HowItWorks';
import Testimonials from '@/components/landing/Testimonials';
import TransformSection from '@/components/landing/TransformSection';
import FAQ from '@/components/landing/FAQ';
import CallToAction from '@/components/landing/CallToAction';
import Disclaimer from '@/components/landing/Disclaimer';
import Footer from '@/components/landing/Footer';
import DisclaimerDialog from '@/components/landing/DisclaimerDialog';
import FloatingActionButton from '@/components/landing/FloatingActionButton';

const Index = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const menuMakerUrl = 'https://chatgpt.com/g/g-67d19b9603b88191b06af94c143439ce-restaurant-menu-maker-gpt';
  const aiWebToolsUrl = 'https://www.aiwebtools.ai';

  useEffect(() => {
    const hasAgreed = localStorage.getItem('disclaimerAgreement');
    if (hasAgreed) {
      setShowDisclaimer(false);
    }
  }, []);

  const handleDisclaimerAgreement = () => {
    localStorage.setItem('disclaimerAgreement', 'true');
    setShowDisclaimer(false);
  };

  return (
    <div className="min-h-screen bg-cyber-dark">
      <Header menuMakerUrl={menuMakerUrl} aiWebToolsUrl={aiWebToolsUrl} />
      <Hero menuMakerUrl={menuMakerUrl} />
      <About menuMakerUrl={menuMakerUrl} />
      <HowItWorks menuMakerUrl={menuMakerUrl} />
      <Testimonials menuMakerUrl={menuMakerUrl} />
      <TransformSection menuMakerUrl={menuMakerUrl} />
      <FAQ menuMakerUrl={menuMakerUrl} />
      <CallToAction menuMakerUrl={menuMakerUrl} />
      <Disclaimer />
      <Footer menuMakerUrl={menuMakerUrl} aiWebToolsUrl={aiWebToolsUrl} />
      
      <DisclaimerDialog 
        open={showDisclaimer} 
        onOpenChange={setShowDisclaimer} 
        onAgree={handleDisclaimerAgreement} 
      />
      
      <FloatingActionButton menuMakerUrl={menuMakerUrl} />
    </div>
  );
};

export default Index;
