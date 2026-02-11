import React from 'react';

// À personnaliser avec les noms/prénoms du groupe
const groupMembers = [
  { prenom: 'Bakou', nom: 'Toure' },
  { prenom: 'Jused', nom: 'Adinsi' },
  { prenom: 'Mahboubi', nom: 'Adnan' }
];

// Modifier cette URL pour pointer vers votre API Cloud Run
const API_URL = 'https://powerpoint-node-96724924534.europe-west1.run.app';

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
    <main style={{ padding: 24 }}>
      <h1>Liste des items (depuis lAPI)</h1>
      <ul>
        {items && items.length > 0 ? (
          items.map((item: any, idx: number) => (
            <li key={item.id || idx}>{JSON.stringify(item)}</li>
          ))
        ) : (
          <li>Aucun item trouvé.</li>
        )}
      </ul>
      <hr />
      <h2>Membres du groupe</h2>
      <ul>
        {groupMembers.map((m, i) => (
          <li key={i}>{m.prenom} {m.nom}</li>
        ))}
      </ul>
    </main>
  );
}