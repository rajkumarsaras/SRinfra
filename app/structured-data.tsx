export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://srinfraco.com/#organization",
        "name": "SR Infra",
        "url": "https://srinfraco.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://srinfraco.com/SrInfraLogo.png",
          "width": 500,
          "height": 200
        },
        "description": "Leading engineering contractors in Hyderabad with 25+ years expertise. Specialized civil engineering contractors for construction projects including luxury villas, premium apartments, and residential developments. Committed to safety and architectural excellence.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Diamond Oak, Block B, Road No.2, Doctors Colony, Gulmohar Park",
          "addressLocality": "Nallagandla, Serilingampally",
          "addressRegion": "Telangana",
          "postalCode": "500019",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "17.4485",
          "longitude": "78.3908"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-8977020517",
          "contactType": "customer service",
          "areaServed": ["IN-TG", "IN-AP"],
          "availableLanguage": ["en", "te", "hi"]
        },
        "sameAs": [
          "https://www.facebook.com/srinfra",
          "https://www.linkedin.com/company/srinfra",
          "https://www.instagram.com/srinfra"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://srinfraco.com/#localbusiness",
        "name": "SR Infra",
        "image": "https://srinfraco.com/SrInfraLogo.png",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Diamond Oak, Block B, Road No.2, Doctors Colony, Gulmohar Park",
          "addressLocality": "Nallagandla, Serilingampally",
          "addressRegion": "Telangana",
          "postalCode": "500019",
          "addressCountry": "IN"
        },
        "telephone": "+91-8977020517",
        "email": "srinfra33@gmail.com",
        "url": "https://srinfraco.com",
        "openingHours": "Mo-Sa 09:00-18:00",
        "areaServed": [
          {
            "@type": "City",
            "name": "Hyderabad"
          },
          {
            "@type": "State",
            "name": "Telangana"
          },
          {
            "@type": "State",
            "name": "Andhra Pradesh"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Engineering Contractor Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Civil Engineering Contracting for Luxury Villas",
                "description": "Expert engineering contractor services for premium luxury villa projects in Hyderabad"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Engineering Contracting for Apartments",
                "description": "Specialized civil engineering contractor services for apartment and residential building projects"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Engineering Services for Gated Communities",
                "description": "Complete engineering contractor services for gated community development projects"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Structural & Architectural Engineering",
                "description": "Expert structural and architectural engineering contractor services with focus on safety and excellence"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://srinfraco.com/#website",
        "url": "https://srinfraco.com",
        "name": "SR Infra - Engineering Contractors Hyderabad",
        "description": "Leading engineering contractors in Hyderabad specializing in civil engineering services for luxury villas, apartments, and residential projects",
        "publisher": {
          "@id": "https://srinfraco.com/#organization"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://srinfraco.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://srinfraco.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://srinfraco.com/#about"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Projects",
            "item": "https://srinfraco.com/#projects"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Gallery",
            "item": "https://srinfraco.com/#gallery"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Contact",
            "item": "https://srinfraco.com/#contact"
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
