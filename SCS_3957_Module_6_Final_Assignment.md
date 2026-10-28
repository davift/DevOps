# SCS_3957_015 Module 6: Final Assignment

Student: Davi Torres

- Final Assignment:
  - Complete a high-level DevOps Roadmap for M. Also provide a change management plan and a realistic timeline for the change as part of the roadmap.
  - You may use the sample table provided in Quercus.
  - No more than 3 pages (maximum 1500 words, single-spaced, in 12pt font).

## Paper


# DevOps Roadmap and Change Management Plan

| Theme | Current State | MVP 1 (Q1): Change Management Activities | MVP 2 (Q2): Change Management Activities | MVP 3 (Q3): Change Management Activities | Final Future State | Assumptions and Recommendation |
|---|---|---|---|---|---|---|
| **Leadership** | Leadership's vision ("most trusted company") conflicts with practice. After the four acquisitions, decisions favored market share and the next new product over stability and maintainability. Short-term wins drove decisions, and people cuts followed failed efforts. Executive sponsorship is weak (almost absent) for DevOps and Agile, and they do not notice that Scrum was dismantled in Team A. Executives see Teams B and C as truly Agile (fake perception from the Demos). | Y | Z | M | N | O |
| **Organizational and Culture** | M is a merger of four organizations with different objectives, and there is no cohesion after 2 years. There is a dichotomy between vision and culture, with short-term wins favored. Team A drifted into silos, and Teams B and C mimic Agile ceremonies. There is still a culture of experimentation and isolated environments, but the culture is mostly  traditional hierarchy (with top-down decisions). | Y | Z | M | N | O |
| **Team** | Team A (Scrum) lost its Scrum Master, so capacity and code quality fell, and it became siloed. Teams B and C are pseudo-Agile (Kanban style, SLA-driven support tickets). Team D (DevOps) is cross-functional and mostly stable, but it supports all teams and monitors everything. Developers in B and C have Prod access, but gaps in skills (CI/CD, IaC pipelines) make it difficult to change. | Y | Z | M | N | O |
| **Process** | Team A: 2-week sprints, PR reviews, quality gate, versioned releases (X.Y.Z), and approval-gated pipelines. Teams B and C: no formal release process or versioning, manual deploys. Team D: Kanban with WIP limits, manual IaC runs. QA has manual sign-off, and automated tests cover limited cases. Rollbacks are fast but sometimes manual. On a good note, current lead time is usually short, and deployment frequency is as frequent as possible. | Y | Z | M | N | O |
| **Tools** | Plan: Jira (plus a separate ticketing system for support). Code: GitHub, Visual Studio, Eclipse, VS Code. Build: GitHub Actions, Docker, Maven, .NET/Vue, Terraform, Ansible. Test: SonarQube (static analysis). Release/Deploy: AWS ECR, EventBridge, Jenkins, ECS (Team A), manual EC2 (B and C). Monitor: ELK, Prometheus. Gap: no dynamic security scanning or CVE scanning mentioned, and no pipeline for IaC. | Y | Z | M | N | O |
| **Infrastructure** | AWS-based (ECS for Team A, EC2 for B and C). IaC with Terraform/Ansible, state in S3. Infrastructure is mostly static (VPCs, gateways) and run manually by DevOps engineers using personal credentials. Ephemeral workloads are created and destroyed automatically. Environments (Dev, Test, Stage, Prod) are isolated, but Prod load differs (M1). Environments are at close parity, and the DR approach relies on AWS backups (data) but also can be deployed entirely from source (applications). | Y | Z | M | N | O |
| **Other** | Good metrics already extracted (MTTR, failure rates, build success). Heartbeats and centralized logs exist. Alerts are inconsistent, so clients report issues before M detects them. Security: SonarQube only. Support SLAs per client. Not all environments meet compliance requirements (SOC2), but the current incident process is sound. | Y | Z | M | N | O |


