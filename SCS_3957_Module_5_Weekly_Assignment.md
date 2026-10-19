# SCS_3957_015 Module 5: Weekly Assignment

Student: Davi Torres

- Weekly Assignment 5:
  - Create a table of the tools, processes, and approaches used by organization M for the last 4 phases.
  - You are encouraged to do additional research if needed or use the tools summary slides provided in this module.

## Paper

DevOps Stages Analysis: Release, Deploy, Operate, Monitor.

**Table 1:** Tools

| Teams | Release | Deploy | Operate | Monitor |
|---|---|---|---|---|
| Team A (Devs) | Release numbers via GitHub, AWS ECR. | AWS EventBridge, Jenkins, AWS ECS. | AWS ECS, Jenkins (rollback pipeline). | ELK (logs and traces), Prometheus (application and system metrics), AWS Prometheus dashboard. |
| Teams B and C (Devs) | GitHub: latest commit in main branch (no version numbers are assigned). | Manual deployment, AWS EC2. | AWS EC2 (direct access), client support ticketing system. | ELK (logs and traces), Prometheus (application and system metrics), AWS Prometheus dashboard. |
| Team D (DevOps) | GitHub: commit hashes are the unique identifier of version. | Terraform, Ansible (run manually), AWS S3 (state storage). | Terraform, Ansible (run manually), AWS S3 (state storage). | Prometheus dashboards (AWS services and system metrics). |

**Table 2:** Processes and Approaches

| Teams | Release | Deploy | Operate | Monitor |
|---|---|---|---|---|
| Team A (Devs) | Releases are versioned with release numbers (X.Y.Z). Artifacts are pushed to AWS ECR tagged with version number. | Any ECR push triggers EventBridge, which sends a request to a Jenkins' endpoint that starts a deployment pipeline, that sits paused for human approval before deploying to Prod (AWS ECS). The last step is to start another pipeline for rolling back changes. It sits paused until it is approved or declined after a few days. | AWS ECS has a rollback for deployments that fail (unhealthy), but when the deployment succeeds but the application has a bug, the rolling back pipeline can be approved to restore the previous version. | Most logs (incliding traces) are collected in ELK. Application and system metrics are collected with Prometheus. |
| Teams B and C (Devs) | No formal release process or versioning. The release is whatever the state of the main branch is at the time of deployment. | Very manual deployments to AWS EC2. Developers have production access to troubleshoot and occasionally fix issues manually (hotfixes). Those changes are then ported back to source control. | Developers "operate" the applications (no elevated system privilege) directly on EC2, and roll backs are done by reverting git a known healthy commit (most likely HEAD-1). | Some logs are collected in ELK. System metrics are collected with Prometheus. |
| Team D (DevOps) | No formal release process. IaC changes are released by merging to the repository. The commit hash is copied to the Jira story for tracking. | Manual deployment per environment (Dev, Test, Stage, and Pord), run from the DevOps engineer’s own computer using their personal credentials (API keys). The state of the assets is synchronized with AWS S3. | Infrastructure is mostly static and is changed only on demand, when a new microservice is added or a setting needs adjusting. Only ephemeral workloads (e.g., overnight tasks, monthly reports) are created and destroyed automatically. | System logs are collected in ELK, and system metrics are collected with Prometheus. Prometheus dashboard covers AWS assets (EC2, RDS, etc.), services (CloudFront, load balancers, etc.), and billing for ALL environments and services of ALL teams. |

**Observations**

- Comparison
  - Deploy: Team A is the only team with a pipeline, and its approval gate for deplying and for rolling back. Teams B, C and D depend on individuals for deployments (Dev and Prod). Teams B and C sometimes fix things manually in production and port the changes back afterward.
  - Operate: Team A operates through pipelines (deploy and rollback), while Teams B and C operate by hand on the servers (high risk). Team D's operation is mostly on demand, because the infrastructure it manages is static.
  - Monitor: all teams share the same monitoring stack (ELK, Prometheus), but Team D (DevOps) do all the monitoring, while Devs only get access to logs and maybe a few read-only dashboards.

**Recommendations**

- Teams B and C:
  - Introduce versioning (e.g., Git tags or release numbers) and build immutable artifacts. This is a prerequisite for any further automation.
  - Formalize deployments into a pipeline with an approval gate. Reuse or replicate Team A's EventBridge/Jenkins pattern where possible.
  - Restrict production access, and require any fix to be done via story and PR. Export logs to a place where Devs can see without logging to the EC2 (e.g., ELK, AWS CloudWatch).
- Team D:
  - Move Terraform and Ansible execution to a pipeline with a service role, and tied to the approval flow. This removes personal API keys and creates an audit trail.
- All teams:
  - Define consistent alerting rules and ownership on top of the existing ELK and Prometheus data (e.g., error rates, latency, resource saturation, and billing anomalies), and route them to the team on call, so issues are detected proactively rather than reported by clients.
