FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build -p 3001

EXPOSE 3001

CMD ["npm", "start"]