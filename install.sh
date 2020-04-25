#!/bin/bash
DOCKER_IMAGE_WEB=app-web:latest
DOCKER_IMAGE_API=app-api:latest
SHELL_GRAYLOG_GELF=graylog-gelf.sh

if [ "$(docker info --format '{{.Swarm.LocalNodeState}}')" == "inactive" ]; then
echo "Changing to swarm mode"
    sudo docker swarm init
else
echo "Already swarm mode"
fi

echo "building web image"
cd web/ || exit 0
sudo docker build -t ${DOCKER_IMAGE_WEB} . && cd ..

echo "building api image"
cd api/ || exit 0
sudo docker build -t ${DOCKER_IMAGE_API} . && cd ..

echo "Creating network overlay"
sudo docker network create -d overlay monitoring

echo "Deploying apps in swarm mode"
sudo docker stack deploy -c docker-compose.yml monitoring


while [ `nc -z localhost 9000 ; echo $?` -eq 1 ]
do
 echo "Waiting for graylog udp"
 sleep 3
done
echo "Running input UDP"
sudo chmod +x ${SHELL_GRAYLOG_GELF}
./${SHELL_GRAYLOG_GELF}


echo "To Access:"
echo "App Web: http://localhost"
echo "App Api Swager: http://localhost/ipa"
echo "Grafana: http://localhost:3000"
echo "Prometheus: http://localhost:9090"
echo "Prom Node: http://localhost:9100/metrics"
echo "cAdvisor: http://localhost:8080"
echo "Traefik: http://localhost:8081"

echo "FINISH"