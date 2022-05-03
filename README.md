# Description

An api done for software architecture class to practice clean architecture concepts. 

# Divisions

In this section I'm going to explain the reason behind the divisions I made with the architecture of this application.

## Domain

This application is divided by domains, as of this writing it only has one, the 'Character' domain. The reason behind this is that it is easier to transition to a microservices architecture in case it is needed in the future. 

## Handler

The handlers of each domain are in charge of the transport layer. This is to make the application transport protocol 'agnostic', meaning that if we ever change the protocol we would just have to change this layer. 

## Service

The service handles all of the business logic for that specific domain. In this case, there's not a lot of business logic to implement but it is good practice to separate this section from the data access and the transport layer. 

## Repository

The repository handles all of the requests made to the external API. It is good practice to have it separate so the rest of the application is unaware on how it is accessing the data, and in the future if we want to change the retrieval to an SQL database we could do it only by changing this file. 

# Setup 

First, run:

`````
npm install
``````

Then, run:

`````
npm run dev
``````

You should now be able to see your application at localhost:3000 or whatever port you defined in the .env file. 
