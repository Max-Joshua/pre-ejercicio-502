up:
	docker build -t hello .
	docker run -p 9000:8080 hello
