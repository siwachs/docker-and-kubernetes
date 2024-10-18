// Docker -> Run isolated application into containers
// Ex -> Node app, Mongo DB server, React application etc.

// Why use Docker? we can run diff development env into a single machine.
// It is container contains development env like node, python or php of diff version. It has all the src code of app and dependencies.

// VM vs Docker -> Each VM has a full OS of it own with its kernal.
// But here docker share host's OS and its kernal they also have a simpler version of OS.

// Images -> are blueprint of containers it store runtime env, application code, dependency, configrations like env var and instructions like commands and file system. They are read-only. we need to create new image to make change.
// Containers -> are runnable instances of those images. AKA insolated process.

// Docker Images -> Made of layers
// In this each layer add things to layer incrementally so order matters here.

// Parent layer -> include OS and runnable env. It can have for example a Node JS that have a linux distribution this layer itself a docker image already prebuild.
// Next layer can be source code copy, adding dependecies.

// NOTE: Docker hub is a repo that host list of parent images we can use.
// https://hub.docker.com

// Example Node ->Supported tags list can be found on docker hub for Dockerfile.
// Tags are variation of image in case we can use variations of node image.
// Tag Example -> 17-alpine in here node version is 17 and alpine is linux distribution.
// Now this image can run to create a container.

const PULL_NODE_IMAGE = "docker pull node";
