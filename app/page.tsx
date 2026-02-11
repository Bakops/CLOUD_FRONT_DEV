import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const groupMembers = [
  { prenom: 'Bakou', nom: 'Toure' },
  { prenom: 'Jused', nom: 'Adinsi' },
  { prenom: 'Mahboubi', nom: 'Adnan' }
  ];
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Bienvenue sur le projet Front Cloud
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Ce projet affiche les données de lAPI Cloud Run et met en avant la CI/CD Google Cloud Build.
          </p>
          <div className="my-4">
            <strong>Membres du groupe :</strong>
            <ul>
              {groupMembers.map((m, i) => (
                <li key={i}>{m.prenom} {m.nom}</li>
              ))}
            </ul>
          </div>
          <p>
            <Link href="/items" style={{ color: 'blue', textDecoration: 'underline', fontWeight: 'bold', fontSize: 18 }}>
              → Voir la liste des items (API)
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
