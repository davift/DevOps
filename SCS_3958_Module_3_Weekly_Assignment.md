# SCS_3958_015 Module 3: Weekly Assignment

Student: Davi Torres

- Weekly Assignment 3:
  - Assess Uber's organization and describe which CI tools you would prefer and why?
  - Support your answer by explaining their benefits over other CI tools.
  - No more than 3 pages (maximum 1,500 words, single-spaced, in 12pt font).

## Paper

# Uber Continuous Integration

Uber's scale makes Continuous Integration (CI) paramount. When engineers contribute to thousands of microservices, mostly through a few large monorepos (the source of truth) where developers work on a short-lived branch and, as frequently as possible, merge back into the trunk. CI must stay fast, keep the main branch healthy, and catch issues before they reach production.

Note to the professor: in my research, I found they use many tools (Bazel, Buildkite, SubmitQueue) that I am not familiar with and that were never mentioned in our classes (they may possibly be in-house developed tools even), so I am pretending they use popular tools that we have discussed in class so I can continue with my paper without talking about something that I do not understand. I hope you understand my reasons and accept my swaps for the sake oif the assignment.
 
## GitLab CI: Building the Solution
 
GitLab combines source control, merge requests, and CI pipelines in one open-source platform. Every commit triggers a pipeline defined in a version-controlled YAML file, and merge requests can require approvals and a passing pipeline before code reaches the main branch. I prefer it over Jenkins because it combines source control with the build runners.
 
## Testing Frameworks: Testing End-to-End
 
Each pipeline runs layered tests: unit tests, integration tests, including ephemeral databases and queues in disposable containers. Performance tests evaluate application response times but also the load in all containers. Ideally, every pipeline gets a clean, identical environment.
 
## SonarQube and Trivy: Application Security
 
SonarQube scans code for smells (bugs, vulnerabilities, or bad practices), and can block a merge when quality drops (tests must return a "pass" to allow merge). Trivy scans third-party dependencies and container images for known vulnerabilities. Both are integrated directly into GitLab pipelines.
 
## Kubernetes and Argo Rollouts: Validating on Staging
 
A Kubernetes staging cluster that mirrors production gives a realistic place to validate changes. Argo Rollouts adds blue/green deployments, where the new version runs alongside the old one, and traffic switches only after checks pass, with instant rollback.

## Assessment
 
These tools cover all four CI activities, are free to adopt, and are widely known, so new engineers learn them quickly (lower learning curve). The trade-off is scale/volume, and standard tools need tuning, such as building only the services a change affects, stripping unused features/extensions/plugins, and segmenting them into domains. Uber has built in-house or customized tools for this.
 
**Sources**
 
- Uber Engineering Blog. https://www.uber.com/blog/how-we-halved-go-monorepo-ci-build-time/
