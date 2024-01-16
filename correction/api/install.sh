#!/bin/bash
npm init --yes
sleep 2
echo "---------------------------------------------------------------------"
echo "$(tput setaf 3)installation de cors, express et dotenv$(tput setaf 0)"
npm install cors express dotenv 
echo "✅ installation terminée"
echo "---------------------------------------------------------------------"
echo "$(tput setaf 3)installation du driver de mongodb$(tput setaf 0)"
npm install mongodb
echo "✅ installation terminée"
echo "$(tput setaf 3)installation des dépendances de swagger$(tput setaf 0)"
npm install swagger-ui-express yamljs