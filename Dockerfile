FROM  node:latest

WORKDIR /app

COPY . .


RUN npm install  --force


EXPOSE 8083

CMD [ "npm" , "start" ]

