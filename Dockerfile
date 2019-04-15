#FROM gradle:jdk10 as builder
#COPY --chown=gradle:gradle . /home/gradle/src
#WORKDIR /home/gradle/src
#RUN ./gradlew run --stacktrace

FROM gradle:4.2.1-jdk8-alpine
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN ./gradlew build --stacktrace
RUN ./gradlew run --stacktrace