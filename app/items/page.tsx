import React from 'react';


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
      
    </main>
  );
}