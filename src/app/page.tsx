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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Phaethon LLC</h1>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Phaethon Order LLC is a privately held company formed in the State of Wyoming.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              For inquiries, please contact:{' '}
              <a 
                href="mailto:phaethon@phaethon.llc" 
                className="text-blue-600 hover:text-blue-800 underline transition-colors"
              >
                phaethon@phaethon.llc
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-8 border-t pt-4">
              © 2025 Phaethon Order LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}