FROM node:14.16.0-alpine3.13 
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . . 
ENV API_URL=http://api.myapp.com/
EXPOSE 3000
#shell form
#/bin/sh
#cmd
# CMD npm start
#Exec form
CMD ["npm", "start"]
