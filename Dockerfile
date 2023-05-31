# Use the AWS Lambda Node.js base image
FROM public.ecr.aws/lambda/nodejs:14

# Install unzip utility
RUN yum update -y && yum install -y unzip

# Set the working directory in the container
WORKDIR /var/task

# Copy zip file into the docker image
COPY ./A01028570/zipped/HelloWorld.zip  ./

# Unzip the file
RUN unzip HelloWorld.zip

# Install any needed packages specified in package.json
COPY package*.json ./
RUN npm install

# Specify the command to run your Lambda function
CMD [ "app.handler" ]