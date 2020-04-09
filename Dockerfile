# Stage 1 - the build process
From node:10 as build-deps
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
ENV  REACT_APP_CUSTOMER_HOST=http://localhost:10000
# Bundle app source
COPY . .
RUN npm run-script build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

