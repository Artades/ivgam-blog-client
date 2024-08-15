# Используем официальный Node.js образ в качестве базового
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json в рабочую директорию
COPY package.json package-lock.json* ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем Next.js приложение
RUN npm run build

# Указываем на минимальный Node.js образ для запуска собранного приложения
FROM node:18-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем необходимые файлы из стадии сборки
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Открываем порт, на котором будет доступно приложение
EXPOSE 3000

# Устанавливаем переменную окружения для запуска в режиме production
ENV NODE_ENV=production

# Запускаем приложение
CMD ["npm", "run", "start"]
