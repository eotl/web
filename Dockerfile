FROM node:8.11.4

RUN git clone https://github.com/eotl/web.git /eotl-web

WORKDIR /eotl-web

RUN rm yarn.lock
RUN yarn install
RUN yarn run build

EXPOSE 3000

CMD npm run server