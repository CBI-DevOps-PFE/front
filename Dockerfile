FROM  node:18.18.0


WORKDIR /app

COPY package.json .


RUN npm install  --legacy-peer-deps


COPY . . 

EXPOSE 8083

CMD [ "npm" , "start" ]

