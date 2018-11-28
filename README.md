# TIL - Today I Learned

A simple community-driven microblogging platform built with:
- Prisma
- Nextjs
- Apollo

## Installation

### Docker

Install docker on machine

For macOS, using homebrew run the following commands:
```bash
brew install docker docker-compose docker-machine
brew cask install virtualbox
brew services start postgresql
brew services start docker-machine
```
To run docker, you must create a .env file in /til/backend/ that contains:

```
APPSECRET={Paul advised putting random text here...?}
```
Then run:

```
eval $(docker-machine env default)
```
Before you can start up your docker machine following the startup instructions under Projects.

Other useful commands for docker (try 'em out, see what they do!):
```
docker-compose up -d
docker ps
docker-machine ls

```

### Yarn

Yarn is a package manager for JavaScript. To install on macOS:
```
brew install yarn
yarn
```

### Configure Github SSH Key

For macOS, run:
```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
pbcopy < ~/.ssh/id_rsa.pub
```
You can set or not set a password for this SSH key when prompted in your shell, up to you.

In Github, under Your profile/Edit profile/SSH and GPG Keys, click Add New Key and paste (the pbcopy command copied your shell output) in the Key field. Name your SSH key in Title as you will.

### Project

```
git clone git@github.com:pauldariye/til.git
cd til && ./bin/start-dev.sh
```
For frontend go to http://localhost:3000

For backend go to http://localhost:4000


## LICENSE
MIT



