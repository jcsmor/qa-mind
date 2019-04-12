FROM gradle:jdk10 as builder

WORKDIR /usr/src/gradle

COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build
RUN gradle run