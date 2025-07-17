import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full space-y-10 animate-fadeIn">
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
        <div className="relative p-1 rounded-xl bg-gradient-to-r from-gray-900 to-gray-400">
          <div className="bg-white rounded-lg p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Phaethon Order LLC</h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Phaethon Order LLC is a privately held company formed in the State of Wyoming.
            </p>

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
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Spurly</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Phaethon Order LLC is the sole owner and operator of Spurly, contextually aware AI messaging assistant.
              </p>
              <div className="space-y-2">
                <p className="text-lg text-gray-700">
                  For more information:
                </p>
                <a 
                  href="https://www.spurly.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors transform hover:scale-105"
              >
                www.spurly.io
              </a>
               <a 
                  href="mailto:support@spurly.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors transform hover:scale-105"
              >
                support@spurly.io
              </a>
            </div>

            {/* Contact Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-2">
                <p className="text-lg text-gray-700">
                  General inquiries:{' '}
                  <a 
                    href="mailto:phaethon@phaethon.llc" 
                    className="text-blue-600 hover:text-blue-800 underline transition-colors"
                  >
                    phaethon@phaethon.llc
                  </a>
                </p>
                <p className="text-lg text-gray-700">
                  Support:{' '}
                  <a 
                    href="mailto:support@phaethon.llc" 
                    className="text-blue-600 hover:text-blue-800 underline transition-colors"
                  >
                    support@phaethon.llc
                  </a>
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-8 border-t pt-4">
              © 2025 Phaethon Order LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}