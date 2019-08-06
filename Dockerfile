FROM node:8.4.0 as builder
COPY . /code
RUN cd /code && npm i && npm run build


FROM inloopx/cra-docker
COPY --from=builder /code/build /app
