FROM public.ecr.aws/lambda/python:3.9

RUN unzip test/test.zip . 

# Install the function's dependencies using file requirements.txt
# from your project folder.

# Copy function code
WORKDIR /app
COPY test.py ./

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "test.handler" ]

