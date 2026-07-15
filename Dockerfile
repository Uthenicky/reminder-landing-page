# Stage 1: Build the frontend
FROM node:20-alpine AS builder

WORKDIR /app
# Menyalin file dependencies
COPY package.json package-lock.json* ./
# Menginstall dependensi dengan penanganan network timeout yang lebih baik
RUN npm config set fetch-retries 5 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm ci

# Menyalin seluruh source code
COPY . .
# Melakukan proses build
RUN npm run build

# Stage 2: Serve the frontend with Nginx
FROM nginx:alpine

# Menyalin konfigurasi kustom nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Menyalin hasil build dari stage builder ke folder public Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
