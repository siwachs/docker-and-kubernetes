# Dockerfile Use to create image using layers

# Layer 1 -> Parent in this case Node JS
FROM node:17-alpine

# Layer 2 -> nodemon global
RUN npm install -g nodemon

# Layer 2 -> Set working directory
WORKDIR /app

# Layer 3 -> Copy package json for cache optimization
COPY package.json .
COPY package-lock.json .

# Layer 4 -> Install dependecies on image build time
RUN npm install

# Layer 5 -> Copy code from src to image
COPY . .

# Layer 6 -> Expose tell which posrt this container exposed
EXPOSE 4000

# Don't use RUN app.js because it going to run on container build but this command is going to run inside container not during build process
# Run App.js in container when we have running instance of it use CMD for this

# Layer 7 -> Run application
CMD ["npm", "run", "dev"]