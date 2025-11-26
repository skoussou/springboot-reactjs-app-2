# Use an OpenJDK base image for Java
FROM openjdk:17

# Use ADD to download the JAR directly from GitHub
ADD https://github.com/skoussou/springboot-reactjs-app-2/raw/refs/heads/main/backend/target/weather-0.0.1-SNAPSHOT.jar main.jar

EXPOSE 7890
RUN chmod 755 main.jar
CMD ["java", "-Dserver.port=7890", "-jar", "main.jar"]
