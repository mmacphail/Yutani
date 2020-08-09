FROM openjdk:11.0.8-jdk as build
ENV APP_HOME=/workspace/app/
WORKDIR $APP_HOME
COPY build.gradle.kts settings.gradle.kts gradlew .gradle $APP_HOME
COPY gradle $APP_HOME/gradle
RUN ./gradlew build -x test || return 0
COPY . .
RUN ./gradlew bootJar -x test

RUN mkdir -p build/dependency && (cd build/dependency; jar -xf ../libs/*.jar)

FROM openjdk:11.0.8-jdk
VOLUME /tmp
ARG DEPENDENCY=/workspace/app/build/dependency
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","eu.macphail.yutani.game.GameApplicationKt"]