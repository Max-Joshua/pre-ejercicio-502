FROM public.ecr.aws/lambda/python:3.8

COPY lambda_function.zip /var/task/
CMD ["lambda_function.lambda_handler"]
