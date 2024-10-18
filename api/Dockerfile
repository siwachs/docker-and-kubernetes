# Use to create image using layers

# Layer 1 -> Parent in this case Node JS
FROM node:17-alpine

# Layer 2 -> Set working directory
WORKDIR /app

# Layer 3 -> Copy code from src to image
COPY . .

# Layer 4 -> Install dependecies on image build time
RUN npm install

# Layer 5 -> Expose tell which posrt this container exposed
EXPOSE 4000

# Don't use RUN app.js because it going to run on container build but this command is going to run inside container not during build process

# Run App.js in container when we have running instance of it use CMD for this

# Layer 6 -> Run application
CMD ["node", "app.js"]