# SCS_3958 Foundations of DevOps II

Farhad Khurshid
farhad.khurshid@utoronto.ca

## Week 1

- Topics:
  - Conway's Law and Team Topologies
  - Software Application Processes, Frameworks, and Architecture
  - Issues with Monolithic Architecture and Solving with Microservices Architecture
  - Summary and Final Comment on Monolithic and Microservices Architecture

- Required Reading:
  - [6 Companies That Are Doing DevOps Well](https://www.helpsystems.com/blog/6-companies-are-doing-devops-well)
  - [Wikipedia: DevOps](https://en.wikipedia.org/wiki/DevOps)
  - [A DevOps case study at one of the world’s largest banks](https://www.information-age.com/devops-case-study-banks-123482580/)

- Weekly Assignment 1:
  - Assess an organization of your choice and describe whether it is using Monolithic or Microservices.
  - Do a critical analysis based on your findings and use the benefits and challenges of each architecture type to support your analysis to describe whether the right approach is used.
  - No more than 3 pages (maximum 1,500 words, single-spaced, in 12pt font).

Notes:
- Section 1 - Conway's Law and Team Topologies.
  - "Organizations which design systems produce designs which are copies of their communication structures."
  - Dealing with Misaligned Team Structures:
    - "If the team structures aren't evolving, then they are inadvertently constraining themselves to only deliver solutions that fit in with the existing team structures."
    - "This makes innovation difficult."
    - "We need to mold our communication and collaboration structures into the right shape for our systems, based on business goals."
  - Overcoming DevOps ROI Barriers
    - Address team silos and collaboration gaps.
    - No amount of automation or DevOps change will help your business to achieve agility.
    - Needs to increase collaboration between specific teams.
    - And create ways to improve the efficiency of handoffs and reduce wastage in processes.
  - DevOps Anti-Types: circles that define boundaries between Dev, Ops, and DevOps, but they do not overlap, or they are silos within silos.
  - DevOps Team Topologies: Dev and Ops intersect to create DevOps. Any other similar structure is not optimal, although valid.
- Section 2 - Software Application Processes, Frameworks, and Architecture.
  - Development Process: Project Management Framework
    - Waterfall, Agile, DevOps
  - Application Architecture: Development Architecture types.
    - Monolithic, N-Tire, Microservices
  - Deployment and Packaging: using servers or virtual environments.
    - Physical, Virtual Servers, Containers
  - Application Infrastructure: on-site or off-site.
    - Data center, Hosted, Cloud.
  - Microservices architecture:
    - Create loosely coupled services.
    - Smaller chunks are easier to modify, test, and deploy.
- Section 3 - Issues with Monolithic Architecture and Solving with Microservices Architecture.
  - Monolithic Architecture:
    - Higher cost, time, and complexity.
    - Limited and inefficient.
    - Not easily scalable.
  - Distributed Data Management.
    - Define the boundaries of each microservice.
    - Services should be autonomous.
    - Avoid direct client referencing to different services.
    - Use an API gateway to concentrate all client requests.
    - Use Create Queries that Retrieve Microservices (CQRS) to aggregate data from multiple microservices.
    - Communication across microservice boundaries.
- Section 4 - Summary and Final Comment on Monolithic and Microservices Architecture.
  - Coupling.
  - Too many round trips.
  - Security issues.
  - Cross-cutting concerns.

---

## Week 2

- Topics:
  - Introduction to Configuration Management (CM)
  - Components of Configuration Management
  - Types of Configuration Management
  - Selection Criteria for Configuration Management
  - Configuration Management in DevOps

- Required Reading:
  - [Configuration management](https://en.wikipedia.org/wiki/Configuration_management)
  - [What is configuration management? A comprehensive guide](https://searchitoperations.techtarget.com/definition/configuration-management-CM)
  - [Configuration management and tools used in DevOps](https://labs.tadigital.com/index.php/2018/07/13/configuration-management-and-tools-used-in-devops/)

- Weekly Assignment 2:
  - Assess an organization of your choice and describe if Configuration Management tools are used. List and provide examples to support your assessment.
  - Identify what benefits these tools are providing. If not, then explain the current ways you are doing software delivery and recommend use of Configuration Management tools.
  - No more than 3 pages (maximum 1,500 words single spaced, in 12pt font).

Notes:
- Configuration Management (CM)
  - Introduction:
    - Ensures configuration is standardized across environments and systems.
    - Examples: environment variables and configuration settings.
  - Components:
    - Planning: Personnel, Responsibilities and Resources, Training Requirements, Guidelines (procedure, tools, etc), Audits and Reviews, Baselining Processes, COnfiguration Control and Status, Naming Conventions, Vendor's Requirements.
    - Configuration Identification: different stages, systems, architecture, and development lifecycle (Dev, Stg, Prod).
    - Different status of CI refer as Configuration Status Accounting (CSA).
    - Configuration Control evaluates all change-requests and change-proposals (modifications), for approval or disapproval.
    - Configuration Verification and Audit checks the configuration documentation against all functional and physical changes before their acceptance.
  - Types:
    - Configuration as a Code (CaC): Ansible and many others.
    - Infrastructure as a Code (IaC): Terraform and many others.
  - Selection Criteria:
    - While the tools overlap capabilities, they mostly are devided as Cloud-Native or Not, CaC or IaC, Mutable Immutable, Procedural/Imperative or Declarative.
  - CM in DevOps:
    - Crucial for DevOps and collaborative in nature to deliver builds with minumal intervention.
    - Establish and enforce version control and change tracking, as well as log any activity within the repository.
      - Source Code Repository.
      - Artifact Repository (aka Registry).
      - Configuration Management Database (CMDB).
    - Reduces the likelihood of unplanned system breakdowns, provides visibility and keeps track of any changes, reduces expenses from human intervention, implements quicker restoratin/recovery, and more.

---

## Week 3

- .
  - .

- Required Reading:
  - []()

- Weekly Assignment 3:
  - .

Notes:
- .


---

## Week 4

- .
  - .

- Required Reading:
  - []()

- Weekly Assignment 4:
  - .

Notes:
- .


---

## Week 5

- .
  - .

- Required Reading:
  - []()

- Weekly Assignment 5:
  - .

Notes:
- .


---

## Week 6

- .
  - .

- Required Reading:
  - []()

- Weekly Assignment 6:
  - .

Notes:
- .

