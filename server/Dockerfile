# 1. Alap image
FROM node:20

# 2. Alkalmazás mappa
WORKDIR /app

# 3. Csomagok másolása és telepítése
COPY package*.json ./
RUN npm install

# 4. Források másolása
COPY . .

# 5. TypeScript fordítás
RUN npx tsc

# 6. Alkalmazás indítása lefordított JS-ből
CMD ["node", "dist/index.js"]
