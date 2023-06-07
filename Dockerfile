# Use the AWS Lambda Node.js base image
FROM public.ecr.aws/lambda/nodejs:14

# Install unzip utility
RUN yum install -y unzip

# Set working directory in the container
WORKDIR /var/task

# Copy zip file into the docker image
COPY ./A01028638/zipped/index.zip ./

# Unzip the file
RUN unzip index.zip && rm index.zip

# Copy package.json into the docker image
COPY ./package.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy function code
# COPY index.js ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler (replace "index.handler" with your handler)
CMD [ "index.handler" ]
