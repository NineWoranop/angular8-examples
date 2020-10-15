# Folder Structure
Folder | Description
------------ | -------------
docker | Docker files that used to support example projects
example-frontend-01 | Example web application
## Notes
- Make sure that you start docker before run code analysis (SonarQue).
- If you use Docker Toolbox for Windows, docker will run at http://192.168.99.100. That means you need to modify the configuration on examples from http://localhost to http://192.168.99.100 such as setting for SonarQue needs to be http://192.168.99.100:9000 (not http://localhost:9000).
