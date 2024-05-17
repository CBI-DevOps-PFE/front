FROM  node:latest

WORKDIR /app

COPY package.json .
COPY package-lock.json .


RUN npm install  --legacy-peer-deps

COPY . . 

EXPOSE 8083

CMD [ "npm" , "start" ]


