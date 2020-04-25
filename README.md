# monitoring-docker-web
This project was created for studies.

We create a simple web application.
This application connects to API and MySQL.
The rest of services will connect another one.

Feel free to play!

This project contains:
- NodeJS - api
- Angular - web
- Graylog
- ElasticSearch
- Grafana
- Prometheus
- Node-exporter
- cAdvisor
- MySQL
- MongoDB
- Traefik
- LogSpout

# Requirements
To execute this project, it was used:
Operation System: Linux x64 (Archlinux)
Memory: 8GB RAM
CPU:Core I5-7500U
Docker info: Swarm Mode
Curl tool

First, clone the repository:
```
# git clone https://github.com/jeffersonlmartins/monitoring-docker-web.git
```

After cloning, inside the repo's directory you can execute install.sh to build and deploy all environment and Enjoy it :):
```
./install.sh
```
Finish!

Use:
- http://localhost  - app web
- http://localhost/ipa - api
- http://localhost:3000 - Grafana
- http://localhost:8080 - cAdvisor
- http://localhost:8081 - Traefik
- http://localhost:9000 - GrayLog
- http://localhost:9090 - Prometheus
- http://localhost:9100/metrics - Node-Exporter
- http://localhost:9200 - ElasticSearch

# The installation has already been completed, if you want, you can run it manually by following the steps below.





# Initialize a swarm mode

```
docker swarm init
```

# Build the images from application:

```
cd web/
sudo docker build -t app-web .
cd ..
```

```
cd api/
sudo docker build -t app-api .
cd ..
```

# Create the network overlay:
```
sudo docker network create -d overlay monitoring
```

# Deploy the stack:
```
sudo docker stack deploy -c docker-compose.yml monitoring
```

After the deploy, you can check the Graylog web (localhost:9000), if works, you can execute the next step, if not, you need to wait the inicialization of the Graylog.

# Execute the grayog-gelf

This shell script will create a UDP input in the Graylog to communicate with the container logs.
```
sh graylog-gelf.sh
```

Use:
- http://localhost  - app web
- http://localhost/ipa - api
- http://localhost:3000 - Grafana
- http://localhost:8080 - cAdvisor
- http://localhost:8081 - Traefik
- http://localhost:9000 - GrayLog
- http://localhost:9090 - Prometheus
- http://localhost:9100/metrics - Node-Exporter
- http://localhost:9200 - ElasticSearch


# Description of the services used:

web - A simple application for test, based AngularJS. In this app, you can create a comment and then, visualize it.

api - A simple api for the application, based NodeJS. This api communicates with MySQL.

Grafana - A tool to create and visualize customizable Dashboards. In this case, responsible to provide informations from containers, host baremetal and the application.

cAdvisor - Provides container users an understanding of the resource usage and performance characteristics of their running containers. It is a running daemon that collects, aggregates, processes, and exports information about running containers. This app communicates with Grafana and Prometheus.

Traefik - Open Source reverse proxy and load balancer for HTTP and TCP-based applications. In this case, we're using to connect app web and api.

GrayLog - Responsible to collect and keep (centralize) the logs. In this case, the container's log.

Prometheus - Responsible for monitoring and alerting. In this case, Grafana, Node-Exporter and cAdvisor works together.

Node-exporter - a tool kit for take metrics from the host, generating metrics for Prometheus.

Elastic Search - a "search engine", in this case, it's used with the Graylog.