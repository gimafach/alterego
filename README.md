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

# 4. Salva configurazione PM2 e abilita auto-restart
pm2 save
pm2 startup
```

### Deploy su CloudPanel
1. Crea un nuovo sito **Node.js** (porta 4000)
2. Clona il repository nella cartella del sito
3. Esegui `npm install && npm run build`
4. Avvia con PM2 come sopra

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
