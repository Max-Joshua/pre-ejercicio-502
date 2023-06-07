FROM public.ecr.aws/lambda/nodejs:16
WORKDIR /A01781042
COPY package*.json ./



COPY . .
COPY app.js ${LAMBDA_TASK_ROOT}
RUN npm install


#Run the lambda function
CMD ["app.handler"]
