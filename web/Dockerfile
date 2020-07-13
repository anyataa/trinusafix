## build
FROM node:13.3.0 AS build

LABEL MAINTAINER="Anya Tamara anyatmr@gmail.com"

WORKDIR /trinusa/app

COPY . .

RUN npm install && npm install -g @angular/cli@latest \
    && npm run build


## run
FROM nginx:1.15.8

LABEL MAINTAINER="Anya Tamara anyatmr@gmail.com"

RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log && \
    mkdir /etc/nginx/sites-enabled/ && \
    mkdir -p /run/nginx && \
    rm -rf /etc/nginx/conf.d/default.conf && \
    rm -rf /var/cache/apk/*

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /trinusa/app/dist/trinusa /usr/share/nginx/html