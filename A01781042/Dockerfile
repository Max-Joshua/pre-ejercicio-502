FROM public.ecr.aws/lambda/nodejs:16
WORKDIR /A01781042
COPY package*.json ./

RUN yum install -y make zip
COPY . .
COPY app.js ${LAMBDA_TASK_ROOT}
RUN npm install
# Zip the lambda function code

#Run the lambda function
CMD ["app.handler"]
