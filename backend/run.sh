rm pnpm-lock.yaml
docker build -t nodejs-app .
docker run -d -p 8800 nodejs-app
