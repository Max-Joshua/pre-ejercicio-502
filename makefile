up:
	docker build -t hello-world-lambda 
	docker run -p 9000:8080 hello-world-lambda
