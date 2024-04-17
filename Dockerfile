FROM  node:latest

WORKDIR /app

<<<<<<< HEAD
COPY package.json .
COPY package-lock.json .
=======
COPY package.json  .
>>>>>>> 9c4d8b4310713eab9565b693980d1ed5818d238b

RUN npm install

COPY . . 

EXPOSE 8083

CMD [ "npm" , "start" ]


