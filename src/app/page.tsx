import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-[56rem] w-full space-y-10 animate-fadeIn">
        {/* Logo with hover effect */}
        <div className="flex justify-center transform transition-transform hover:scale-105">
          <Image
            src="/images/PhaethonLogo.png"
            alt="Phaethon LLC Logo"
            width={300}
            height={150}
            className="w-auto h-auto max-w-full drop-shadow-lg"
            priority
          />
        </div>

        {/* Banner Text Image */}
        <div className="flex justify-center">
          <Image
            src="/images/PhaethonBannerText.png"
            alt="Phaethon Banner"
            width={600}
            height={200}
            className="w-auto h-auto max-w-full drop-shadow-md"
            priority
          />
        </div>

        {/* Information Box with gradient border */}
        <div className="relative p-1 rounded-xl bg-gradient-to-r from-[#102A43] to-gray-400">
          <div className="bg-white rounded-lg p-8 text-center">
            <h1 className="text-3xl font-bold text-[#102A43] mb-4">Phaethon Order LLC</h1>
            <p className="text-lg text-[#102A43] mb-6 leading-relaxed">
              Phaethon Order LLC is a US-based technology company specializing in the design and development of solutions tailored for the adaptation and deployment of frontier-level, general-purpose Foundation Models (FMs).
            </p>

            <p className="text-lg text-[#102A43] mb-6 leading-relaxed">
              To learn more about Phaethon Order LLC and the services and solutions provided, please visit: 
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <a 
                href="https://www.phaethon.llc/about" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#3A506B] hover:bg-[#9BC7FF] text-white font-medium py-2 px-6 rounded-lg transition-colors transform hover:scale-105"
              >
                About Us
              </a>
            </div>
            {/* Spurly Section */}
            <div className="border-t border-gray-200 pt-6 mb-6">
              <div className="flex justify-center mb-4">
                <Image
                  src="/SpurlySpinningSpur.png"
                  alt="Spurly Logo"
                  width={60}
                  height={60}
                  className="w-auto h-auto drop-shadow-md transform transition-transform hover:scale-110"
                />
              </div>
              <h2 className="text-2xl font-semibold text-[#102A43] mb-3">Spurly</h2>
              <p className="text-lg text-[#102A43] mb-4 leading-relaxed">
                Phaethon Order LLC is the sole owner and operator of Spurly, context-integrating AI messaging assistant.
              </p>
              <div className="space-y-2">
                <p className="text-lg text-[#102A43]">
                  For more information:
                </p>
                <div className="flex justify-center gap-4 mb-6">
                  <a 
                    href="https://www.spurly.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-[#3A506B] hover:bg-[#9BC7FF] text-white font-medium py-2 px-6 rounded-lg transition-colors transform hover:scale-105"
                  >
                    Visit Spurly.io
                  </a>
                  <a 
                    href="mailto:support@spurly.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-[#3A506B] hover:bg-[#9BC7FF] text-white font-medium py-2 px-6 rounded-lg transition-colors transform hover:scale-105"
                  >
                    Contact Spurly Team
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-[#102A43] mb-4">Contact Information</h3>
              <div className="flex justify-center items-center gap-4">
                <p className="text-lg text-[#102A43]">
                  General inquiries:{' '}
                  <a 
                    href="mailto:phaethon@phaethon.llc" 
                    className="text-[#3A506B] hover:text-[#9BC7FF] underline hover:no-underline transition-colors"
                  >
                    phaethon@phaethon.llc
                  </a>
                </p>
                <span className="text-[#102A43]">|</span>
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
  )
}