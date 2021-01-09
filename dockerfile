FROM node:12 as node-builder

WORKDIR /app
COPY ./ngx-admin /app

RUN rm -rf node_modules
RUN npm install
RUN npm run build  -- --prod --aot

FROM nginx
COPY --from=node-builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'