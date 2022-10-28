FROM node:19

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN ["yarn", "install"]

EXPOSE 3000

CMD ["npm", "run", "start"]
