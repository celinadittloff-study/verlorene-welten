// ═══════════════════════════════════════════════════════════
// VERLORENE WELTEN — Supabase Konfiguration
// EINZIGE Stelle für Datenbankzugriff — nie direkt in HTML!
// ═══════════════════════════════════════════════════════════
const DB_URL  = 'https://yszbibfkrmpvoqdrosgz.supabase.co';
const DB_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzemJpYmZrcm1wdm9xZHJvc2d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1NzMxNDcsImV4cCI6MjA5NzE0OTE0N30.POZznIoa2t-R8uT0w4YUj-mulCzAu2ToSPdiwToSn28';

async function dbQ(table, params='') {
  const r = await fetch(`${DB_URL}/rest/v1/${table}${params?'?'+params:''}`, {
    headers:{ 'apikey':DB_KEY, 'Authorization':'Bearer '+DB_KEY }
  });
  if (!r.ok) throw new Error('DB '+r.status);
  return r.json();
}

// Öffentliche API
window.VW = {
  ladeArten:    typ        => dbQ('arten',`typ=eq.${typ}&order=art_id.asc`),
  ladeArt:      (id,typ)   => dbQ('arten',`art_id=eq.${id}&typ=eq.${typ}&limit=1`).then(d=>d[0]),
  ladeDetails:  (id,typ)   => dbQ('art_details',`art_id=eq.${id}&typ=eq.${typ}&limit=1`).then(d=>d[0]),
  ladeBedroh:   (id,typ)   => dbQ('bedrohungen',`art_id=eq.${id}&typ=eq.${typ}&order=bedrohung_nr.asc`),
  ladePop:      (id,typ)   => dbQ('populationsdaten',`art_id=eq.${id}&typ=eq.${typ}&order=jahr.asc`),
  ladePoly:     id         => dbQ('verbreitung_polygone',`art_id=eq.${id}&order=polygon_typ.asc,punkt_nr.asc`),
};
