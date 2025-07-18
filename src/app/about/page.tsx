import Image from 'next/image'
import Head from 'next/head'
import { FC } from 'react'

const About: FC = () => {
  return (
    <>
      <Head>
        <title>About Phaethon Order LLC | Foundation Model Development & AI Infrastructure Solutions</title>
        <meta name="description" content="Phaethon Order LLC delivers full-stack solutions and services for integrating and deploying frontier-level Foundation Models (FMs), including prompt engineering, FM tuning, scalable backends, and intelligent UI/UX frontends." />
        <meta name="keywords" content="Foundation Models, AI Development, Prompt Engineering, RAG Pipelines, LLM Integration, AI Infrastructure, Full-Stack AI, Firebase, Cloud Run, OpenAI, Backend Services, UI/UX Design, API Development" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Phaethon Order LLC" />
        <meta property="og:title" content="About Phaethon Order LLC" />
        <meta property="og:description" content="Learn about Phaethon Order LLC and its mission to make frontier-level Foundation Models accessible, adaptable, and production-ready through custom full-stack development and modular component design." />
        <meta property="og:image" content="/images/logo.svg" />
        <meta property="og:url" content="https://phaethon.llc/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-[56rem] w-full space-y-10 animate-fadeIn">
          <div className="flex justify-center transform transition-transform hover:scale-105">
            <Image
              src="/images/PhaethonLogo.png"
              alt="Phaethon Order LLC Logo"
              width={300}
              height={150}
              className="w-auto h-auto max-w-full drop-shadow-lg"
              priority
            />
          </div>

          <div className="relative p-1 rounded-xl bg-gradient-to-r from-[#102A43] to-gray-400">
            <div className="bg-white rounded-lg p-8 text-center">
              <h1 className="text-3xl font-bold text-[#102A43] mb-4">About Phaethon Order LLC</h1>
              <p className="text-lg text-[#102A43] leading-relaxed mb-6 text-left">
                Phaethon Order LLC is a US-based technology company specializing in the design and development of solutions tailored for the adaptation and deployment of frontier-level, general-purpose Foundation Models (FMs). We offer everything from full end-to-end systems to individual modular components that bridge high-capability AI with practical usability and focused optimization.
              </p>

              <div className="border-t border-gray-200 pt-6 mt-6 space-y-6 text-center">
                <h2 className="text-2xl font-semibold text-[#102A43]">Solutions and Services Built and Delivered</h2>
                <ul className="list-disc pl-6 text-[#102A43] space-y-2 text-left">
                  <li>Intuitive, discoverable UI/UX frontends for FM-powered workflows on mobile and web platforms</li>
                  <li>Scalable, platform-independent backends with FM-native API interfaces</li>
                  <li>Prompt engineering libraries for system and user prompt strategies</li>
                  <li>RAG pipeline design with document indexing and relevancy ranking</li>
                  <li>LLM fine-tuning, custom training, and benchmark evaluation frameworks</li>
                  <li>End-to-end cloud deployments using Firebase, Google Cloud Run, AWS, Vercel, and other platforms</li>
                  <li>Versioned RESTful and webhook-ready APIs with OpenAPI schemas</li>
                </ul>

                <p className="text-lg text-[#102A43] text-left leading-relaxed">
                  The Phaethon Order dev team has extensive experience building and deploying solutions using a wide range of software architecture patterns and programming paradigms, as well as cloud-native architectures, container orchestration, and AI frameworks and related tools. Examples of the programming languages we frequently use include Python, TypeScript, Swift, Java, C/C++, Node.js, and JavaScript, which are widely supported by or easily leveraged into custom solutions for frontier-level FMs and/or cloud platforms. Examples of the AI frameworks and tools we frequently use include OpenAI CLI, Jupyter Notebooks, Pandas, NumPy, and PyTorch. 
                </p>
                <p className="text-lg text-[#102A43] space-y-1 text-left leading-relaxed">
                  The foregoing lists enumerate only a few areas of our dev team's expertise. Additionally, Phaethon Order encourages and incentivizes ongoing education for our dev team to ensure a constantly expanding knowledge base. For projects involving specific technologies, frameworks, tools, etc. not listed here, we encourage you to reach out to discuss how we can handle those.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6 text-center">
                <h2 className="text-2xl font-semibold text-[#102A43] mb-3">The Purpose of Phaethon Order</h2>
                <p className="text-lg text-[#102A43] mb-4 text-left leading-relaxed">
                  Phaethon Order adapts frontier-level foundational models into practical and customizable tools. Our streamlined structure ensures fast delivery, low overhead, and clear communication so clients can react quickly and efficiently in competitive spaces. We believe innovation is driven by individual vision, and our solutions build on AI to help in specific ways that help you realize your individual vision. 
                </p>
                <p className="text-lg text-[#102A43] leading-relaxed">
                   Beginning with a high-level system design phase that emphasizes modularity with high cohesion and loose coupling, Phaethon Order provides a transparent and collaborative dev cycle that allows for rapid responses to changes in project requirements. We offer clean and comprehensive documentation for easy handoff, iterative prototyping that promotes client confidence throughout, and deliverables with training and support for seamless integration and production-ready deployment. 
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6 text-center">
                <h3 className="text-xl font-semibold text-[#102A43] mb-4">Contact Us</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <p className="text-lg text-[#102A43]">
                    Inquiries:{' '}
                    <a 
                      href="mailto:phaethon@phaethon.llc" 
                      className="text-[#3A506B] hover:text-[#9BC7FF] underline hover:no-underline transition-colors"
                    >
                      phaethon@phaethon.llc
                    </a>
                  </p>
                  <span className="hidden sm:inline text-[#102A43]">|</span>
                  <p className="text-lg text-[#102A43]">
                    Support:{' '}
                    <a 
                      href="mailto:support@phaethon.llc" 
                      className="text-[#3A506B] hover:text-[#9BC7FF] underline hover:no-underline transition-colors"
                    >
                      support@phaethon.llc
                    </a>
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#102A43] mt-8 border-t pt-4">
                © 2025 Phaethon Order LLC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
