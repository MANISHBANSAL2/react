FROM mhart/alpine-node:6.2
RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN npm install --production

copy public/index.html .
copy public/bundle.js .

CMD ["npm","json","--production"]
