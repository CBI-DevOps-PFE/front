FROM  node:latest


WORKDIR /app

COPY package*.json .


RUN npm install --force


COPY . . 

EXPOSE 8083

CMD [ "npm" , "start" ]

