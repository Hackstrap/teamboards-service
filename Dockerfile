FROM node:12.4.0
ENV CI true
ENV PORT=80
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
