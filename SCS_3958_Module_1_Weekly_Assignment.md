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

Until about 2014, Uber had a monolithic application that handled all of its operations together. This suited the company while it was still small and operating in only a few cities: it had one codebase, one deployment, and simple testing. While apparently simple, this setup was limited and inefficient, since every change required redeploying the whole system and any bug in one area could take everything down.

As Uber grew and expanded globally, this apparent "simplicity" became a weakness that was slowly choking the company, not to mention the higher cost, time, and operational complexity of thousands of people changing the same codebase simultaneously. Uber therefore had to split its codebase into independently deployable, loosely coupled microservices. Teams were formed to own smaller chunks of code (features) that were easier to maintain.

## Benefits

With the migration, teams could own, test, and deploy services independently, increasing release speed. Failures were isolated, and high-demand services could scale independently. The reorganization gave teams more autonomy, and, as Conway's Law predicts, the systems mirrored the new organizational structure.

## Challenges

Microservices did not solve every problem and possibly made some existing ones worse. Around 2020, Uber ran about 2,200 critical microservices, which created operational overhead, where a simple integration could require changes across several services, not to mention the difficulty of troubleshooting production issues. Because the systems were distributed and decoupled, this new reality required distributed tracing and centralized logging. However, that did not solve the "needle in a haystack" problem, as the volume of logs grew exponentially.

## DOMA: Domain-Oriented Microservice Architecture

Starting around 2018–2019, Uber grouped its services into roughly 70 domains, such as pricing and payments. Each domain is reached through a dedicated API gateway, and the architecture was shaped around business pillars, based on each one's specialization and its need for isolation and clear boundaries for security and data management.

## Assessment

At its current scale, Uber uses the right approach. A monolith would never have allowed the company to grow into the global corporation it is today. Starting with a monolith was also the right choice as a startup, since microservices would have added cost without benefit, and migrating as the organization outgrew it was well timed. Later, the segmentation provided by DOMA made sense as Uber's microservice sprawl was getting out of control. The lesson is that microservices work best when boundaries follow business domains and each architectural change is made just before it is needed. Overall, Uber's architecture fits its scale and shows maturity in adapting its systems to business goals.

