// Build Docker image -> docker build -t tagName ./DockerFilePath
const DOCKER_BUILD = "docker build -t tagName ./DockerFilePath";

// NOTE: docker ignore file use when we copy source code from src to image like if we want to skip node_modules

const PULL_NODE_IMAGE = "docker pull node";

// start and stop container -> For whis we name image name or ID of image
const DOCKER_IMAGES = "docker images";
const DOCKER_RUN =
  "docker run --name addNameForContainer d377bb5afeef or nameOfImage";

// Get all containers
const DOCKER_PS = "docker ps";
const DOCKER_PS_ALL = "docker ps -a";
const DOCKER_STOP = "docker stop containerName or containerId";

// MAP Host port to docker ie. publish
const DOCKER_RUN_WITH_PORT_MAP =
  "docker run --name containerName -p 4000:4000 -d nameOfImage";

// NOTE: docker run runs an image to start a container but docker start run a container and docker start does not need PORT mapping configurations
// ie. Docker run build a new container but run start a existing contianer
const DOCKER_START = "docker start containerIdName";

// Manage Docker Images
const REMOVE_IMAGE = "docker image rm name -f";
const REMOVE_CONTAINER = "docker container rm containerName1 containerName2";

const REMOVE_EVERYTHING = "docker system prune -a";

// Versions
const BUILD_IMAGE_WITH_VERSION = "docker build -t nodeapp:v1 ./DockerFilePath";
const RUN =
  "docker run --name nodeapp_c -p 4000:4000 imageName:version or nodeapp:v1";
