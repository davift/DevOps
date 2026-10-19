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
| Team A (Devs) | Release numbers via GitHub, AWS ECR. | AWS EventBridge, Jenkins, AWS ECS. | XXX | XXX |
| Teams B and C (Devs) | GitHub: latest commit in main branch (no version numbers are assigned). | Manual deployment, AWS EC2. | XXX | XXX |
| Team D (DevOps) | GitHub: commit hashes are the unique identifier of version. | Terraform, Ansible (run manually), AWS S3 (state storage). | XXX | XXX |

**Table 2:** Processes and Approaches

| Teams | Release | Deploy | Operate | Monitor |
|---|---|---|---|---|
| Team A (Devs) | Releases are versioned with release numbers (X.Y.Z). Artifacts are pushed to AWS ECR tagged with version number. | Any ECR push triggers EventBridge, which sends a request to a Jenkins' endpoint that starts a deployment pipeline, that sits paused for human approval before deploying to Prod (AWS ECS). The last step is to start another pipeline for rolling back changes. It sits paused until it is approved or declined after a few days. | XXX | XXX |
| Teams B and C (Devs) | No formal release process or versioning. The release is whatever the state of the main branch is at the time of deployment. | Very manual deployments to AWS EC2. Developers have production access to troubleshoot and occasionally fix issues manually (hotfixes). Those changes are then ported back to source control. | XXX | XXX |
| Team D (DevOps) | No formal release process. IaC changes are released by merging to the repository. The commit hash is copied to the Jira story for tracking. | Manual deployment per environment (Dev, Test, Stage, and Pord), run from the DevOps engineer’s own computer using their personal credentials (API keys). The state of the assets is synchronized with AWS S3. | XXX | XXX |

**Observations**

**Observations**

- Comparison
  - Only Team A has formal versioning and an automated trigger from artifact to pipeline.
  - Team A has an approval gate (other than the peer review on PRs before merging to `main`, while the other teams rely on manual execution by individuals.
  - Release: Team A produces versioned, immutable artifacts. Teams B, C and D deploy whatever is on `main`, so a given deployment cannot be reliably identified, reproduced, or rolled back.
  - Deploy: Team A is the only team with a pipeline, and its approval gate for deplying and for rolling back. Teams B, C and D depend on individuals for deployments (Dev and Prod). Teams B and C sometimes fix things manually in production and port the changes back afterward.

**Recommendations**

- Teams B and C:
  - Introduce versioning (e.g., Git tags or release numbers) and build immutable artifacts. This is a prerequisite for any further automation.
  - Formalize deployments into a pipeline with an approval gate. Reuse or replicate Team A's EventBridge/Jenkins pattern where possible.
  - Restrict production access, and require any fix to be done via story and PR. Export logs to a place where Devs can see without logging to the EC2 (e.g., ELK, AWS CloudWatch).
- Team D:
  - Move Terraform and Ansible execution to a pipeline with a service role, and tied to the approval flow. This removes personal API keys and creates an audit trail.
