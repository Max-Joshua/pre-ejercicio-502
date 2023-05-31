up:
	docker build hello-world-lambda .
	docker run -p 9000:8080 hello-world-lambda
