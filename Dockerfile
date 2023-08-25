FROM node:14.18-alpine as builder
RUN apk update && apk add yarn 
RUN mkdir app
WORKDIR /app

COPY . ./

RUN mv .env.production .env
RUN yarn install --network-timeout 1000000000

RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/build /build
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
