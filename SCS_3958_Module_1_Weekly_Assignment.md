# SCS_3958_015 Module 1: Weekly Assignment

Student: Davi Torres

- Weekly Assignment 1
  - Assess an organization of your choice and describe whether it is using Monolithic or Microservices.
  - Do a critical analysis based on your findings and use the benefits and challenges of each architecture type to support your analysis to describe whether the right approach is used.
  - No more than 3 pages (maximum 1,500 words, single-spaced, in 12pt font).

## Paper

# Uber Architecture

Uber is a clear example of an organization that evolved its architecture as it grew. Today it runs on microservices, specifically a Domain-Oriented Microservice Architecture (DOMA), which groups services by business domain but remains a microservices architecture.

## From Monolith to Microservices

Until about 2014, Uber had a monolithic application that handled all their operations together. This suited them while it was still small and operating in a few cities. They only had one codebase, one deployment, and simple testing. While apparently simple, it was limited and inefficient when every change required redeploying the whole system, and any bug in one area could take everything down.

As Uber grew and expanded globally, it had to split its codebase into independently deployable and loosely coupled microservices. This apparent "simplicity" was a weakness, with the effect of choking slowly. Let alone the higher cost, time, and operational complexity of thousands of people simultaneously changing the same codebase. Teams were formed to own smaller chunks of code (features) that are easier to maintain.

## Benefits

With the migration, Teams could own, test, and deploy services independently, increasing release speed. Failures were isolated, and high-demand services could scale independently. This reorganization reflected in autonomy for the teams, but its systems still mirrored that organization's structure.

## Challenges

Microservices still did not resolve all problems, and possibly exacerbated some existing ones. Around the year 2020 Uber ran about 2,200 critical microservices, which caused operations overhead and a simple integration could require changes across several services. Let alone troubleshooting production issues. This new reality required distributed tracing and centralized logs, as systems where distributed and decoupled. But that did not resolve the niddle in the hay stack issue as the volume of logs grew exponentialy.

## DOMA: Domain-Oriented Microservice Architecture

Starting around 2018–2019, Uber decided to group its services into roughly 70 domains, such as pricing and payments. Each domain is reached through a dedicated API gateway, and business pillars defined the shape of the architecture based on its specialization and requirements for isolation/boundaries for security and data management.

## Assessment

At Uber's scale, it now uses the right approach. A monolith would never allow the company to grow to the mega corporation that it is today. While starting with a monolith was also correct when an startup, microservices would have added cost without benefit, and migrating as the organization outgrew was timely. Later, the segmentation provided by DOMA made sense as its sprawl in microservices was getting out of control. The lesson is that microservices work best when boundaries follow business domains right before it is needed. Overall, Uber's architecture fits its scale and shows a maturity on adjusting systems based on business goals.

