
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const SEO = ({ 
  title = "Restaurant Menu Maker GPT - Free AI Menu Creator | AIWebTools.AI",
  description = "Create professional restaurant menus instantly with AI. Restaurant Menu Maker GPT optimizes pricing, design & descriptions. Free AI-powered menu creation tool for restaurants.",
  keywords = "restaurant menu maker gpt, ai menu creator, free ai menu generator, restaurant menu generator, ai tools for restaurants, menu maker ai, create restaurant menu, ai web tools, free ai tools, aiwebtools.ai",
  canonicalUrl = "https://aiwebtools.ai/"
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
    
    // Add breadcrumb structured data
    const breadcrumbScript = document.getElementById('breadcrumb-schema');
    if (!breadcrumbScript) {
      const script = document.createElement('script');
      script.id = 'breadcrumb-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "AI Web Tools",
            "item": "https://aiwebtools.ai"
          },
          {
            "@type": "ListItem", 
            "position": 2,
            "name": "Free AI Tools",
            "item": "https://aiwebtools.ai/#about"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Restaurant Menu Maker GPT",
            "item": "https://aiwebtools.ai/#how-it-works"
          }
        ]
      });
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonicalUrl]);

  return null;
};

export default SEO;
