# SCS_3958_015 Module 4: Weekly Assignment

Student: Davi Torres

- Weekly Assignment 4:
  - Assess Uber's organization and describe which CD and CM tools you would prefer and why?
  - Provide your explanation outlining the benefits of each tool you have selected.
  - No more than 3 pages (maximum 1,500 words, single-spaced, in 12pt font).

## Paper

> Note to the professor: in my research, I could not find a complete list of the tools Uber uses. Rather than write generically, I have based this paper on popular open-source tools and, for the sake of the assignment, assumed that Uber uses them.

# Uber Continuous Deployment and Monitoring

Because Uber serves millions of riders, drivers, and businesses, a bad release can disrupt trips and revenue worldwide. Continuous Deployment (CD) must therefore be small, frequent, and quickly reversible, and Continuous Monitoring (CM) must detect problems before users are affected.

## CD Tools

**Argo CD:** Argo CD keeps each Kubernetes cluster in sync with the configuration stored in Git. Every deployment comes from a peer-reviewed commit, and rolling back means reverting that commit. Compared with deploying through scripts, it guarantees one consistent, auditable path to production.

**Argo Rollouts:** Argo Rollouts (part of the same open-source Argo project as Argo CD) runs the new version beside the old one and shifts traffic gradually. If error rates rise, it rolls back automatically.

**Unleash:** Unleash lets teams deploy code "dark" and enable it later for selected users, regions, or early adopters, without redeploying. Uber built a similar in-house tool, Flipr, which confirms the value of this approach.

## Monitoring Tools

**Prometheus:** Prometheus collects metrics and evaluates alert rules, sending alerts through its Alertmanager component. It is used in combination with Grafana, which displays the metrics on shared dashboards. Argo Rollouts can also read Prometheus metrics to decide whether a release proceeds.

**OpenTelemetry:** OpenTelemetry collects metrics, logs, and traces from every service in a standard format. Its traces follow a single request across dozens of services, which is essential for troubleshooting microservices. The traces are sent to a backend such as Jaeger or Grafana Tempo, where they can be viewed in Grafana.

**Loki:** Loki aggregates logs from all containers. Because it works as a Grafana data source, teams can search logs alongside metrics and traces in the same dashboards.

**Chaos Mesh:** Chaos Mesh deliberately breaks pods or networks in a controlled way to expose weaknesses before real outages do.

## Assessment

Together, these tools cover all four CD activities: deploy (Argo CD), verify (Argo Rollouts with Prometheus metrics), monitor (OpenTelemetry, Prometheus, Loki), and respond and recover (automatic rollbacks with Argo Rollouts and Git reverts with Argo CD, while Chaos Mesh finds weaknesses in advance). They are free, widely adopted, and integrate natively with Kubernetes. The trade-off is operational effort: at Uber's scale, storing logs, metrics, and traces requires careful engineering.
