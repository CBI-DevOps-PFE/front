FROM  node:latest

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm cache clean --force

RUN npm install  

COPY . . 

EXPOSE 8083

CMD [ "npm" , "start" ]


