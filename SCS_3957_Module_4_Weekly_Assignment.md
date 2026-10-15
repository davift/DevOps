# SCS_3957_015 Module 4: Weekly Assignment

Student: Davi Torres

- Weekly Assignment 4:
  - List the tools, processes, and approaches from the first 4 stages of DevOps that are in use within M.
  - If your selected organization is currently not using any tools, processes, or approaches, please recommend some.
  - No more than 3 pages. You may create a table to illustrate your findings.

## Paper

DevOps Stages Analysis: Plan, Code, Build, Test

**Table 1:** Tools

| Teams | Plan | Code | Build | Test |
|---|---|---|---|---|
| Team A (Devs) | Jira (Agile board) | Visual Studio, GitHub | .NET (C#), Vue (JS), Docker, GitHub Actions | SonarQube |
| Teams B and C (Devs) | Jira, other ticketing system (not identified) | Eclipse, GitHub | Maven (Java), GitHub Actions | SonarQube |
| Team D (DevOps) | Jira (Kanban board) | VS Code, GitHub | Terraform, Ansible | SonarQube |

**Table 2:** Processes and Approaches

| Teams | Plan | Code | Build | Test |
|---|---|---|---|---|
| Team A (Devs) | Agile, sprint-based work (2 weeks) tracked on a Jira board. Stories are refined and backlog prioritized. | Version control on GitHub. Branches for each feature or bug fix. Then, PRs with peer reviews. | CI with GitHub Actions workflows triggered on push (for Dev) and on merge (for Stage). Containerized builds with Docker and uploaded to registrar. | Static code analysis with SonarQube in the GitHub Actions. Quality gate (branch protection) before merge. |
| Teams B and C (Devs) | Psudo-Agile work tracked in Jira (lower priority), with a ticketing system for client's support requests (highest priority due to SLA). | Version control on GitHub. Branches for each feature or bug fix. Then, PRs with peer reviews. | CI with GitHub Actions workflows running the Maven build lifecycle (compile, test, package) and triggered on push (for Dev) and on merge (for Stage). Containerized builds with Docker and uploaded to registrar. | Static code analysis with SonarQube in the GitHub Actions. Quality gate (branch protection) before merge. |
| Team D (DevOps) | Kanban, continuous flow on a Jira board, with work in progress (WIP) limits. | IaC version control on GitHub with PRs and peer reviews. | Infrastructure provisioning with Terraform and configuration management with Ansible, but manually triggered (*). | Static code analysis with SonarQube in the GitHub Actions. Quality gate (branch protection) before merge. |

**Observations**

- All Teams
  - Jira stories are used for planning by all teams (pull system). Only Teams B and C also respond to support tickets (push system).
  - Work is tracked and managed through visual boards, except in the ticketing system, where work is prioritized by per-client SLAs.
  - Testing: all teams share the same static analysis process. SonarQube surfaces "smells" that must be fixed or justified before the quality check passes. Its insights are limited but valuable, though not always actionable.

- Comparison
  - Planning: Dev teams follow sprint-based Agile, while Team D uses Kanban continuous flow.
  - Tooling: IDEs differ (Visual Studio, Eclipse, VS Code) based on language and team preference.
  - Build: Application teams build software (.NET, Vue, Maven), while Team D builds and provisions infrastructure (Terraform, Ansible).

(*) Most of the IaC does not run through a pipeline, because the infrastructure it describes is static (e.g., VPCs, gateways). It is still deployed as code so that it can be audited, replicated consistently across environments, and rebuilt after a disaster. When a new microservice is added, a technician runs Terraform and/or Ansible once to provision its assets, and occasionally a second time to adjust a setting. There are a few exceptions where infrastructure is dynamic. Ephemeral workloads, such as an overnight task or a monthly report, are deployed and destroyed automatically. For these exceptions, Devs and DevOps collaborate inside the application repository.

**Recommendations**

- Develop a plan for safe automation of the IaC in which the pipeline pauses at each step for human review and approval before proceeding. For example, the command `terraform validate` checks whether the configuration is valid (already implemented). If it passes, the command `terraform plan` would run as part of the build pipeline and document/log what will be modified (not implemented). A release manager would then approve the release, and the infrastructure would be updated automatically by the release pipeline with the command `terraform apply` (not implemented either).

