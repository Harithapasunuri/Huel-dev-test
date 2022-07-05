# Huel DevOps Test

## Objective

Dockerize repository for kubernetes using helm charts.

### Key features:
* Dockerize repository for kubernetes.
* Have an ingress config in the helm charts.
* On a deployment have the migration run before server and worker run.
* Server and worker deployed on seperate pods.
* No traffic to be routed to the pod before the migration is complete.
* Worker to stop before starting a new instance.
* Application must be able to autoscale.
* Have zero downtime.

### Requirements:

* Node version: 16
* Helm version: v3

### Launch the starter project

Fork this repository, then clone your fork, and run this in your newly created directory:

Once cloned, then and run this in your newly created directory:

``` bash
npm ci
```

Next you need to make a copy of the `.env.example` file and rename it to `.env` inside your project root.

To start the server application:

```bash
npm run start
```

To run the migration:

```bash
npm run migrate
```

To start the worker:

```bash
npm run worker
```