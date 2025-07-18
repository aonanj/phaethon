// set-config.ts

const siteConfig = {
  name: "Phaethon Order LLC",
  domain: "https://phaethon.llc",
  description:
    "Phaethon Order LLC delivers full-stack infrastructure for Foundation Model (FM) deployment — including prompt engineering, fine-tuning, scalable APIs, UI/UX, and RAG systems.",
  keywords: [
    "Foundation Models",
    "LLM",
    "Prompt Engineering",
    "AI Development",
    "RAG Pipelines",
    "Backend API",
    "Full Stack AI",
    "Cloud Deployment",
    "Firebase",
    "Vercel",
    "Cloud Run",
    "AI Infrastructure",
    "AI UX Design",
  ],
  twitter: {
    handle: "@PhaethonOrder",
    site: "https://twitter.com/PhaethonOrder",
    cardType: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phaethon.llc",
    title: "Phaethon Order LLC",
    description:
      "Adaptive, production-ready infrastructure for general-purpose Foundation Models. Custom prompt engineering, cloud deployment, scalable APIs, and more.",
    siteName: "Phaethon Order LLC",
    images: [
      {
        url: "/images/logo.svg",
        width: 100,
        height: 100,
        alt: "Phaethon Order LLC Logo",
      },
    ],
  },
  metadataBase: new URL("https://phaethon.llc"),
  creator: "Phaethon Order LLC",
  publisher: "Phaethon Order LLC",
}

export default siteConfig
