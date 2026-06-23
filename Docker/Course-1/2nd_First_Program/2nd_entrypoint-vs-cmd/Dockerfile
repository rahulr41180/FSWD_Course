
FROM node:23.11.1-alpine

WORKDIR /app

# COPY package.json will copy only package.json file
# COPY package*.json will copy package.json and package-lock.json if available

COPY package.json /app

# install npm package before COPY . . because if we wrote after COPY . . it definatily install dependencies
# but if I wrote RUN npm install before COPY . . then it first check in package.json that is something changed in package.json file then only I will run install command
# other wise if package.json does not have any changes either changes present in code level not in package.json level
# then npm install command will not run.
RUN npm install

COPY . .

ENTRYPOINT ["node"]
CMD ["index.js"]