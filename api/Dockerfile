FROM node:alpine
ENV NODE_ENV=developmen

WORKDIR /app


ENV PATH /app/node_modules/.bin:$PATH


COPY package.json ./

COPY package-lock.json ./

RUN npm install




CMD ["npm", "run", "dev"]
