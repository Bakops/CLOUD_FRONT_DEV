
import Link from "next/link";
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });


// URL de l'API
const API_URL = 'https://powerpoint-node-96724924534.europe-west1.run.app/items';

async function fetchItems() {
  try {
    const res = await fetch(API_URL, { cache: 'no-store' });
    if (!res.ok) throw new Error('Erreur API');
    return res.json();
  } catch (e) {
    return [];
  }
}

export default async function ItemsPage() {
  const items = await fetchItems();
  return (
    <div className={`min-h-screen flex items-center justify-center bg-black ${poppins.className}`}>
      <main className="w-full max-w-4xl flex flex-col items-start justify-center ">
        <h1 className="text-4xl font-extrabold text-white mb-8 text-left tracking-tight">
          Liste des items (API)
        </h1>
        <ul className="w-full max-w-4xl mb-8 flex flex-col gap-2 items-start">
          {items && items.length > 0 ? (
            items.map((item: any, idx: number) => (
              <li key={item.id || idx} className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 shadow-sm text-base w-full max-w-4xl">
                <span className="font-semibold text-blue-200 text-lg">{item.name}</span>
                {item.description && <span className="block text-sm text-gray-300 mt-1">{item.description}</span>}
                <span className="block text-sm text-pink-200 mt-1">Prix : {item.price ?? 'N/A'} €</span>
              </li>
            ))
          ) : (
            <li className="text-gray-400 text-left">Aucun item trouvé.</li>
          )}
        </ul>
        <Link href="/" className="mt-6">
          <button className="px-6 py-2 rounded-full hover:scale-105 cursor-pointer bg-white text-black font-bold text-base shadow hover:bg-gray-200 transition">
            Retour à laccueil
          </button>
        </Link>
      </main>
    </div>
  );
}
