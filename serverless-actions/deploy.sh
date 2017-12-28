#!/bin/bash
source .env
PACKAGE_NAME=streetcred

bx wsk action update $PACKAGE_NAME/CheckIn CheckIn.js -p url $DB_URL -p dbname $DB_BADGES --web true

bx wsk action update $PACKAGE_NAME/CreateNewUser CreateNewUser.js

bx wsk action update $PACKAGE_NAME/GetUser GetUser.js -p url $DB_URL -p dbname $DB_USERS --web true

bx wsk action update $PACKAGE_NAME/GetUserBadges GetUserBadges.js -p url $DB_URL -p dbname $DB_BADGES --web true
