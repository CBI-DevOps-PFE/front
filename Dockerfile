FROM  node:18.18.0

WORKDIR /app

COPY package.json .
COPY package-lock.json .


RUN npm install  --force

COPY . . 

EXPOSE 8083

CMD [ "npm" , "start" ]


