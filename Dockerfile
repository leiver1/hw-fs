# 1. Stufe: Build-Stufe
FROM node:20 AS builder

# Setzt das Arbeitsverzeichnis
WORKDIR /app

# Kopiert die package.json und package-lock.json (falls vorhanden)
COPY package*.json ./

# Installiert die Abhängigkeiten
RUN npm install

# Kopiert den Rest des Codes in das Image
COPY . .

# Baut die Next.js-Anwendung
RUN npm run build

# 2. Stufe: Produktions-Image
FROM node:20-alpine

# Setzt das Arbeitsverzeichnis im Produktions-Container
WORKDIR /app

# Kopiert nur die benötigten Dateien aus der Build-Stufe
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Setzt den Standardport
EXPOSE 3000

# Startet die Next.js-Anwendung
CMD ["npm", "run", "start"]
