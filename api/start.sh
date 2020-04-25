#!/bin/sh
cd /app

while [ `nc -z mysql 3306 ; echo $?` -eq 1 ]
do
 sleep 1
done

yarn sequelize db:migrate
yarn start