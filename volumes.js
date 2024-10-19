// Volumes -> This allow folders in our host computer that can made available to running contianers.
// With this if something change in that folder it can reflect to docker container.

// Flag -rm remove container when we stop it

const SETUP_VOLUME =
  "docker run --name containerName -p 4000:4000 --rm -v /home/shubham2@happiestminds.com/Desktop/docker/api:/app -v /app/node_modules imageName:version";

// Here we override node modules folder and map it to docker /app
