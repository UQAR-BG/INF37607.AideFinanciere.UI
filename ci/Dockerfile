FROM node:alpine

ENV HOST='0.0.0.0'
ENV PORT='3000'
ENV NUXT_API_BASE=''

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/

COPY /package.json .
RUN npm install

COPY / .
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]