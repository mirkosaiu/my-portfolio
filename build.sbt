name := """my-portfolio"""
organization := "com.example"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.4"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.example.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.example.binders._"



enablePlugins(JavaAppPackaging)
enablePlugins(JavaServerAppPackaging)
enablePlugins(DockerPlugin)

import com.typesafe.sbt.packager.docker._
dockerCommands += Cmd("EXPOSE", "9001")
dockerCommands += Cmd("ENV", "PLAY_SECRET=]<tm21RMDXj2@59@nnnR=<4RiWE^AoQo?yYpnrMSbW7WPfokVBQ>RUuCTAnQ:T:i")


PlayKeys.devSettings := Seq("play.server.http.port" -> "9001")

