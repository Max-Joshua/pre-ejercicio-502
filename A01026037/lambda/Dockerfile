FROM public.ecr.aws/lambda/python:3.8

# copy
COPY hello_world.zip .

# unzip
RUN unzip hello_world.zip

# set the entry point r the container
CMD ["python", "handler.handler"]