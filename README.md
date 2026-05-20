# AlterEgo

Un'applicazione React per presentare AlterEgo - "Qualcuno che lavora con te. Per te."

## Requisiti

- Node.js 18+
- npm o bun

## Installazione e Setup

### 1. Clona il repository
```bash
git clone https://github.com/gimafach/alterego.git
cd alterego
```

### 2. Installa le dipendenze
```bash
npm install
# oppure
bun install
```

### 3. Avvia in modalità sviluppo
```bash
npm run dev
# oppure
bun dev
```
Il sito sarà disponibile su http://localhost:8080

## Comandi Disponibili

### Sviluppo
```bash
npm run dev        # Avvia server di sviluppo
npm run build      # Build per produzione
npm run preview    # Anteprima build di produzione
```

### Testing e Quality
```bash
npm run test          # Esegui test una volta
npm run test:watch    # Esegui test in watch mode
npm run lint          # Controlla codice con ESLint
```

### Produzione
```bash
npm run start         # Avvia server produzione
npm run start:prod    # Avvia con NODE_ENV=production
```

## Deploy in Produzione

### Con PM2 (consigliato)
```bash
# 1. Build dell'applicazione
npm run build

# 2. Installa PM2 globalmente
npm install -g pm2

# 3. Avvia con PM2
pm2 start server.js --name alterego --env production

# 4. Salva la lista dei processi PM2
pm2 save
```

### Auto-restart PM2 al riavvio del server (crontab)

Invece di usare `pm2 startup` (che richiede permessi root), aggiungere nel crontab utente il ripristino automatico dei processi salvati:

```bash
crontab -e
```

Aggiungere queste righe (adattare il PATH all'ambiente, verificare con `echo $PATH`):

```
PATH=/home/grosio-ae/.bun/bin:/home/grosio-ae/.local/bin:/home/grosio-ae/.nvm/versions/node/v22.22.2/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
@reboot pm2 resurrect &> /dev/null
```

> `pm2 resurrect` ripristina tutti i processi salvati con `pm2 save`. Il PATH esplicito è necessario perché al reboot la shell non carica il profilo utente e pm2 potrebbe non essere trovato.

### Deploy su CloudPanel
1. Crea un nuovo sito **Node.js** (porta 4000)
2. Clona il repository nella cartella del sito
3. Esegui `npm install && npm run build`
4. Avvia con PM2 come sopra

## Aggiungere un Nuovo Sito sullo Stesso Server (CloudPanel + PM2)

I file da adattare nella root sono `server.js` e `ecosystem.config.js`. Il resto viene dalla repo.

### 1. Adatta `ecosystem.config.js`

Cambia `name` e `PORT` — ogni sito deve usare una porta diversa (questo usa la 4000):

```js
module.exports = {
  apps: [{
    name: 'nuovo-sito',       // nome univoco in PM2
    script: 'server.js',
    port: 4001,               // porta diversa da tutti gli altri siti
    env: {
      NODE_ENV: 'production',
      PORT: 4001
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
};
```

### 2. `server.js`

Lo stesso file di questo progetto funziona senza modifiche. Al limite aggiorna la stringa nel `console.log` con il nome del nuovo sito.

### 3. Crea il sito su CloudPanel

Aggiungi un nuovo sito **Node.js** puntando alla porta scelta (es. 4001).

### 4. Sequenza comandi dopo il clone

```bash
npm install
npm run build
mkdir -p logs
pm2 start ecosystem.config.js
pm2 save          # aggiorna la lista salvata — il crontab resurrect coprirà anche questo processo
```

> Il crontab `@reboot pm2 resurrect` già presente coprirà automaticamente anche il nuovo sito dopo `pm2 save`. Non serve modificare il crontab.

## Tecnologie

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite con SWC
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router DOM
- **Server**: Express.js per produzione
- **Internazionalizzazione**: Hook personalizzato (IT/EN)

## Struttura Progetto

```
src/
├── components/
│   ├── ui/           # Componenti shadcn/ui
│   └── sections/     # Sezioni della pagina
├── hooks/            # Custom hooks (useLanguage)
├── pages/            # Pagine (Index, Discover, NotFound)
└── lib/              # Utilities
```

## Note di Sviluppo

- Il progetto usa ES modules (`"type": "module"`)
- Import alias: `@/*` punta a `src/*`
- I18n con funzione `t("Italiano", "English")`
- Server produzione su porta 4000
- Fallback automatico per React Router
