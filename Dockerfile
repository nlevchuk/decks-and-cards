FROM node:19

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

EXPOSE 3000

CMD ["npm", "run", "start"]
