# SCS_3958_015 Module 2: Weekly Assignment

Student: Davi Torres

- Weekly Assignment 2:
  - Assess an organization of your choice and describe if Configuration Management tools are used. List and provide examples to support your assessment.
  - Identify what benefits these tools are providing. If not, then explain the current ways you are doing software delivery and recommend use of Configuration Management tools.
  - No more than 3 pages (maximum 1,500 words single spaced, in 12pt font).

## Paper

# Uber Configuration Management

Uber may heavily use of Configuration Management (CM), and most of the content of this paper is speculation around the job postings that I found and imagination (educated guess) to connect the dots.

## Tools in Use

- **Crane (IaC Orchestrator):** Uber's in-house infrastructure stack, built on Starlark configuration and Go code. It does not replaces traditional tools but works alongside, orchestrating them.
- **Terraform (IaC):** provisions cloud instances and resources in GCP and AWS.
- **Puppet and Ansible (CaC):** instances as they are deployed from base image, installing/updating componets and applying configuration for the role that instance is designed to perform.
- **Flipr:** Uber's dynamic configuration platform for feature flags, allowlists, and gradual rollouts, etc.
- But not lmited to these tools.

## Benefits

These tools cover each component of CM. Crane's host catalog keeps a standard record of every host (status accounting) as Terraform provision them and Pupper + Ansible configure them accordingly. Flipr requires peer reviews and permissions before changes go live (configuration control), while comparing the actual state against the desired state (verification and audit).

Configuration is standardized: Ansible separates configuration from vendor-specific syntax, and Crane makes cloud and on-premises hosts look identical using Terraform. Every change is version-controlled and traceable through Git and Flipr's history. Recovery is fast without involving service teams.

## Assessment

Uber's tool choices fit the selection criteria. It uses declarative, immutable approaches (containers, Crane, Up goal states) for its production fleet, and mutable tools (Puppet, Ansible) where machines and devices must be changed in place. It also combines cloud-native tools such as Terraform with on-premises tools, matching its hybrid infrastructure.

I found an article in Uber Blog (https://www.uber.com/ca/en/blog/continuous-deployment/) saying that its main weakness was inconsistency.
- In 2022, Uber's opt-in legacy CD system had grown to more than 100 unique pipeline templates with no enforced testing or monitoring, and 1/3 of production deployments were manual.
- Uber replaced it with Up CD, enabled by default with built-in safety gates.
- By March 2024, 6/10 of services deployed fully automatically, and weekly deployments rose from 7,000 to 50,000.
- As DevOps practices where adoptes the company, the benefits were evident in reducing errors and time to deliver.


