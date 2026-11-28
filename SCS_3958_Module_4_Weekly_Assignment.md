# SCS_3958_015 Module 3: Weekly Assignment

Student: Davi Torres

- Weekly Assignment 4:
  - Assess Uber's organization and describe which CD and CM tools you would prefer and why?
  - Provide your explanation outlining the benefits of each tool you have selected.
  - No more than 3 pages (maximum 1,500 words, single-spaced, in 12pt font).

## Paper

> Note to the professor: in my research, I did not find what are the tools that Uber uses. Rather than write generically, I have based this paper on popular open-source tools, as if I knew that Uber uses them for the sake of the assignment.

# Uber Continuous Deployment and Monitoring

Because Uber serves millions of riders, drivers, and businesses, a bad release can disrupt trips and revenue worldwide. Continuous Deployment (CD) must therefore be small, frequent, and quickly reversible. And Continuous Monitoring (CM) must detect problems before users are affected.

## CD Tools

**Argo CD:** It keeps each Kubernetes cluster in sync with the configuration stored in Git. Every deployment comes from a peer-reviewed commit, and rolling back is reverting that commit. Compared with deploying through scripts, it guarantees one consistent, auditable path to production.

**Argo Rollout:** Argo Rollouts (from the same open-source effort as ArgoCD) runs the new version beside the old one and shifts traffic gradually. If error rates rise, it rolls back automatically.

**Unleash:** Unleash lets teams deploy code "dark" and enable it later for selected users, regions, or early adopters, without redeploying. Uber built a similar in-house tool, Flipr, which confirms the value of this approach.

## Monitoring Tools

**Prometheus:** Prometheus collects metrics and triggers alerts, while Grafana shows them on shared dashboards. Argo Rollouts can also read Prometheus metrics to decide whether a release proceeds. Used in combination with Grafana for visualization and alerting.

**OpenTelemetry:** OpenTelemetry collects metrics, logs, and traces from every service in a standard format. It follows a single request across dozens of services, which is essential for troubleshooting microservices. It also packages a custom build of Grafana dashboards tailor-made to display its metrics.

**Loki:** Loki aggregates logs from all containers so teams can search them alongside metrics and traces in one place as a data source in any Grafana dashboard.

**Chaos Mesh:** Chaos Mesh deliberately breaks pods or networks in a controlled way to expose weaknesses before real outages do.

## Assessment

Together, these tools cover all four CD activities: deploy (Argo CD), verify (Argo Rollouts), monitor (OpenTelemetry, Prometheus, Loki), and respond and recover (Chaos Mesh). They are free, widely adopted, and integrate natively with Kubernetes. The trade-off is operational effort: at Uber's scale, storing logs, metrics, and traces requires careful engineering.


