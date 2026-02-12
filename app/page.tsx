import Link from "next/link";

// Import Google Fonts Poppins (Next.js 13+)
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });


export default function Home() {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-black ${poppins.className}`}>
      <main className="w-full max-w-4xl flex flex-col items-center justify-center ">
        <h1 className="text-8xl font-extrabold text-white mb-4 text-center tracking-tight">
          Front Cloud
        </h1>
        <p className="text-md text-gray-200 mb-10 text-center max-w-md">
          Application Next.js moderne connectée à une API Cloud Run.
          Déploiement CI/CD automatique avec Google Cloud Build.
        </p>
        <Link href="/items" className="w-full flex justify-center">
          <button className="px-8 py-3 animate-bounce rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-xl hover:scale-105 hover:from-blue-700 hover:to-pink-600 transition-all duration-200">
            Voir la liste des items
          </button>
        </Link>
      </main>
    </div>
  );
}
