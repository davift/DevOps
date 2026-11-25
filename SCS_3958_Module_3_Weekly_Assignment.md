# SCS_3958_015 Module 3: Weekly Assignment

Student: Davi Torres

- Weekly Assignment 3:
  - Assess Uber's organization and describe which CI tools you would prefer and why?
  - Support your answer by explaining their benefits over other CI tools.
  - No more than 3 pages (maximum 1,500 words, single-spaced, in 12pt font).

## Paper

> Note to the professor: in my research, I found that Uber uses several tools (Bazel, Buildkite, and SubmitQueue) that I am not familiar with and that were not covered in our classes, and some of them are even developed in-house. Rather than write about tools I do not fully understand, I have based this paper on popular open-source alternatives. I hope you will accept these substitutions for the purpose of this assignment.

# Uber Continuous Integration

Uber's scale makes Continuous Integration (CI) paramount. Its engineers contribute to thousands of microservices, mostly through a few large monorepos that serve as the source of truth. Developers work on short-lived branches and merge back into the trunk as frequently as possible. At this scale, CI must stay fast, keep the main branch healthy, and catch issues before they reach production.

## GitLab CI: Building the Solution

GitLab combines source control, merge requests, and CI pipelines in one open-source platform. Every commit triggers a pipeline defined in a version-controlled YAML file, and merge requests can require approvals and a passing pipeline before code reaches the main branch. I prefer it over Jenkins because it combines source control and build runners in a single platform, instead of relying on separately maintained servers and plugins.

## Testing Frameworks: Testing End-to-End

Each pipeline runs layered tests: unit tests first, then integration tests that use ephemeral databases and queues in disposable containers. Performance tests evaluate not only application response times but also the load across all containers. Ideally, every pipeline gets a clean, identical environment.

## SonarQube and Trivy: Application Security

SonarQube scans code for smells (bugs, vulnerabilities, or bad practices) and can block a merge when quality drops, since the scan must pass its quality gate before the merge is allowed. Trivy scans third-party dependencies and container images for known vulnerabilities. Both integrate directly into GitLab pipelines.

## Kubernetes and Argo Rollouts: Validating on Staging

A Kubernetes staging cluster that mirrors production gives a realistic place to validate changes. Argo Rollouts adds blue/green deployments, where the new version runs alongside the old one and traffic switches only after checks pass, allowing instant rollback.

## Assessment

These tools cover all four CI activities, are free to adopt, and are widely known, so new engineers can learn them quickly. The trade-off is scale: at Uber's volume, standard tools need tuning, such as building only the services a change affects, removing unused features and plugins, and segmenting pipelines by domain. Uber has built in-house or customized tools for this.

## Sources

- French, T., Rukas, M., & Tan, X. (2022, June 23). *How We Halved Go Monorepo CI Build Time*. Uber Engineering Blog. https://www.uber.com/blog/how-we-halved-go-monorepo-ci-build-time/

