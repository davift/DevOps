# SCS_3958_015 Module 2: Weekly Assignment

Student: Davi Torres

- Weekly Assignment 2:
  - Assess an organization of your choice and describe if Configuration Management tools are used. List and provide examples to support your assessment.
  - Identify what benefits these tools are providing. If not, then explain the current ways you are doing software delivery and recommend use of Configuration Management tools.
  - No more than 3 pages (maximum 1,500 words single spaced, in 12pt font).

## Paper

# Uber Configuration Management

Uber likely makes heavy use of Configuration Management (CM). Much of this paper is based on job postings and blog posts I found and on educated guesses that connect the dots.

## Tools in Use

- **Crane (IaC Orchestrator):** Uber's in-house infrastructure stack, built on Starlark configuration and Go code. It does not replace traditional tools but works alongside them, orchestrating them.
- **Terraform (IaC):** provisions cloud instances and resources in GCP and AWS.
- **Puppet and Ansible (CaC):** configure instances as they are deployed from a base image, installing and updating components and applying the configuration for the role each instance is designed to perform.
- **Flipr:** Uber's dynamic configuration platform for feature flags, allowlists, gradual rollouts, and more.

Uber is not limited to these tools.

## Benefits

These tools cover each component of CM. Crane's host catalog keeps a standard record of every host (status accounting) as Terraform provisions them and Puppet and Ansible configure them. Flipr requires peer reviews and permissions before changes go live (configuration control), and its consistency checks compare the actual state against the desired state (verification and audit).

Configuration is standardized: Ansible separates configuration from vendor-specific syntax, and Crane makes cloud and on-premises hosts look identical. Every change is version-controlled and traceable through Git and Flipr's history. Recovery is fast and does not require involving service teams.

## Assessment

Uber's tool choices fit the selection criteria. It uses declarative, immutable approaches (containers, Crane, and the goal states of Up, its deployment platform) for its production fleet, and mutable tools (Puppet, Ansible) where machines and devices must be changed in place. It also combines cloud-native tools such as Terraform with on-premises tools, matching its hybrid infrastructure.

An article on the Uber Blog (https://www.uber.com/ca/en/blog/continuous-deployment/) shows that inconsistent deployment practices were a weakness:
- In 2022, Uber's opt-in legacy CD system had grown to more than 100 unique pipeline templates with no enforced testing or monitoring, and about one-third of production deployments were manual.
- Uber replaced it with Up CD, which is enabled by default and has built-in safety gates.
- By March 2024, about two-thirds of services deployed fully automatically, and weekly deployments rose from 7,000 to 50,000.
- As the company adopted these DevOps practices, the results suggested fewer errors and faster, more frequent delivery.


