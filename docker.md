# Install Docker

## Requirements

#### Hardware
64-bit kernel and CPU support for virtualization\
Memory above 4GB\
QEMU must be version 5.2 or newer\
Gnome or KDE Desktop environment\
systemd init system\
KVM virtualization support


## KVM (Kernel Virtual Machine) 

#### Load the KVM module manually
```
# Intel processors
sudo modprobe kvm_intel

# AMD processors
sudo modprobe kvm_amd
```

#### Check if the module is enabled
```
lsmod | grep kvm
-> kvm_intel             282624  0
-> kvm                   663552  1 kvm_intel
```

#### Add your system user to the KVM group
```
sudo usermod -aG kvm $
```

## Docker Engine

#### Add Docker's official GPG key:
```
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

#### Add the repository to Apt sources:
```
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

#### To install the latest version, run:
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

#### Remove Docker and PKG
```
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
```


## Docker Compose

#### Install
```
DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
mkdir -p $DOCKER_CONFIG/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v2.19.1/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
```

#### Permissions
```
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
or
sudo chmod +x /usr/lib/docker/cli-plugins/docker-compose

sudo groupadd docker
sudo usermod -aG docker $USER
sudo chgrp docker /usr/bin/docker-compose
sudo chmod 750 /usr/bin/docker-compose
```

#### Test
```
docker run hello-world

docker compose version
=> Docker Compose version v2.19.1
```

#### Backup MySQL
```
docker exec CONTAINER_ID /usr/bin/mysqldump -u root --password=PASS DBNAME > 2024-02-05-backup.sql
```