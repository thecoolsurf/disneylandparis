# ReactJS


## Install with Docker Node-Express-MySQL

#### Clone the repository below
```
cd /go/to/your/path/project
git clone https://github.com/docker/awesome-compose.git
```

Go to awesone-compose folder and back in the root directory
the folder named 'react-express-mysql'.
Then run the build commands.
```
cd react-express-mysql

# build image
docker compose build

# run containers
docker compose up -d

# list of containers ID
docker container ps

# Goto container frontend with
docker exec -ti [containerID] bash

root@2511cd21b96e:/code# npm install react-router-dom
npm start
```

## Install NVM

Node Version Manager (NVM), as the name implies, is a tool for managing Node versions on your device.
Different projects on your device may be using different versions of Node. Using only one version (the one installed by npm) for these different projects may not give you accurate execution results.

#### Run NVM installer
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

#### Update your profile configuration
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

#### Reload shell configuration
```
source ~/.bashrc
```

#### Confirm NVM installation by running
```
nvm -v
```

#### Install Node versions
```
nvm install latest
# or
nvm install vX.Y.Z
```

#### Confirm Node installation by running
```
node -v
```


## Create your React project

Go to the root directory where you want to create your project
```
cd /to/your/path
```

Create your REACT projet 'MyProject'
```
npx create-react-app MyProject
```

Go to your new path directory

```
cd /var/www/greta2023-react/MyProject
```


### Update or Install REACT

Aller à la racine du projet
```
cd /path/to/your/project
```

Install or Update REACT and dependances
```
npm install
npm install react-router-dom --save
npm install cors --save
npm i --package-lock-only
```



