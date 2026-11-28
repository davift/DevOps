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

- Topics:
  - Introduction to Continuous Integration (CI) and Benefits
  - The Four Activities of CI
  - Setting Up Automated Testing
  - Successful CI Culture Practices

- Required Reading:
  - [CI/CD Explained](https://resources.github.com/ci-cd/)

- Weekly Assignment 3:
  - Assess Uber's organization and describe which CI tools you would prefer and why?
  - Support your answer by explaining their benefits over other CI tools.
  - No more than 3 pages (maximum 1,500 words, single-spaced, in 12pt font).

Notes:
- CI
  - Consistent Delivery aligned with Continuous Deployment (CD).
  - CI is the process of developing, testing, integrating, and validating features from the Program Backlog and promoting them through the environments.
  - Also detects and resolves issues early in the development cycle.
  - The Four Activities:
    - Developing the solution.
      - Break features into stories (small chunks of work) and refine them.
      - Pulls stories from the backlog, codes, tests, then commits to source control.
      - Uses BDD or TDD.
      - Builds quality in with the use of flows, architecture/design, code inspections, etc.
      - Considers how the application health and application telemetry will be monitored.
      - Defines what the thread model is and works around it.
    - Building the solution.
      - Regularly integrate new code, which triggers the build pipeline that shall also include the necessary tests.
      - Five Practices:
        - Continuous Code Integration: compilation and testing shall be automatic upon every commit.
        - Build and Test Automation: unit- and story-level tests.
        - Trunk-based Development: teams should merge their branches as soon as possible, and all work on top of the trunk (avoid long-living branches).
        - Gated Commits: commits to trunk shall be reviewed and manually approved (branch protection using PR).
        - Application Security: code analysis tools shall inspect code for smells (known patterns of bad practices) and third-party dependencies/packages.
    - Testing end-to-end.
      - A full system integration should ideally run after each commit.
      - Six Practices:
         - Test and Production Congruity: test environments should imitate production as closely as possible.
        - Test Automation: run all possible tests automatically (functional, integration, regression, etc.).
        - Test Data Management: tests must be source-controlled.
        - Service Virtualization: templated ephemeral test environments.
        - Testing Nonfunctional Requirements (NFRs): extensively examine security, reliability, performance, maintainability, scalability, and usability.
        - Continuous Integration with Suppliers: expand and enforce the same methodology to third-party contributors.
    - Validating on staging/pre-prod.
      - Maintain a Staging Environment: shall be representative (identical) for proper validation.
      - Blue/Green Deployment: maintain one environment active while the other is idle for zero-downtime quick rollback of changes.
      - System Demo: a meeting where stakeholders assess a solution before it is promoted to Prod.
  - Automated Testing
    - Unit Test, Integration Test, Acceptance Test, and UI Test.
    - Integrate Often: makes it easy to identify which change failed tests.
    - Integration Results Visible: the dashboard shall show status and error messages.
    - Establish Common Cadence: multiple teams that collaborate shall be in sync.
    - Develop and Maintain Proper Infrastructure: availability is crucial to all teams that depend on it.
    - Supportive Software Eng Practices: promote modular applications that consider CI practices from their design.

---

## Week 4

- Topics:
  - Introduction to Continuous Deployment (CD) and Benefits
  - The Four Activities of CD
  - Continuous Monitoring and Benefits
  - Successful CD Best Practices
  - Tools to Manage CI/CD Pipelines

- Required Reading:
  - [What is continuous delivery?](https://www.redhat.com/en/topics/devops/what-is-continuous-delivery)
  - [DevOps Monitoring](https://www.atlassian.com/devops/devops-tools/devops-monitoring)

- Weekly Assignment 4:
  - Assess Uber's organization and describe which CD and CM tools you would prefer and why?
  - Provide your explanation outlining the benefits of each tool you have selected.
  - No more than 3 pages (maximum 1,500 words, single-spaced, in 12pt font).

Notes:
- Continuous Integration (CI) - Ensures individual code changes are properly included in the codebase.
- Consistent Delivery - Validates quality and generates deployable deliverables.
- Continuous Deployment (CD) - Provides the product to clients and allows limited deployments and rollbacks.
- CD
  - Is the process of promoting validated features from the staging environment to production.
  - Features must be waiting in production before the business needs them.
  - Deployed modifications shall enter the production environment without affecting existing behavior.
  - Teams shall make small, incremental modifications regularly, but only distribute to users when appropriate.
  - Benefits:
    - Low-risk releases - With blue-green zero-downtime deployments (undetectable to users), they can be performed at any time, on demand.
    - Faster time to market - If developers incorporate integration and regression tests into their work, these phases can be removed.
    - Higher quality - When automated tools can discover regressions, teams are freed to focus on their stories.
    - Lower costs - Time spent on automation is reused multiple times, and it eliminates release costs. 
    - Better products - Smaller batches are easier to test, validate, and troubleshoot.
    - Happier teams - Peer review of smaller chunks reduces teams' burnout and increases focus.
  - Activities:
    - Deploy to production - The procedure for making a solution live to users.
    - Verify the solution - The procedure that ensures changes work as planned in production before they are made available to users.
    - Monitor for problems - The procedure for monitoring and reporting issues.
    - Respond and recover - The procedure for quickly resolving any issues that arise during deployment.
  - Practices:
    - Dark launches - Ability to deploy to production without releasing to end users.
    - Feature toggles - Technique to facilitate dark launches by implementing toggles in the code.
    - Deployment automation - Ability to deploy automatically to production.
    - Selective deployment - Ability to deploy to specific production environments based on criteria (e.g., geography, early adopters).
    - Self-service deployment - A single/manual command to trigger the deployment.
    - Version control - Enables fast deployment and fast recovery
    - Blue/green deployment - Permits on-demand switching on the LB between the latest release and the previous release.
  - Verification:
    - Production testing - Ability to test in production when it is still "dark" (hidden from users).
    - Test automation - Ability to test repeatedly via automation.
    - Test data management - Version control testing data to create consistency in automated testing.
    - Testing nonfunctional requirements (NFRs) - Test system attributes (security, reliability, performance, maintainability, scalability, and usability) before release.
  - Monitoring:
    - Full-stack telemetry - Capacity to identify problems across the entire stack.
    - Visual displays - Tools that show the results of automated measurements.
    - Federated monitoring - A holistic view of problems and performance created by unified monitoring across all stacks.
  - Respond and Recover:
    - Proactive detection - Introduce faults to identify potential problems before they occur.
    - Cross-team collaboration - A mindset of cooperation across all parties to identify and solve problems as they arise.
    - Session replay - Ability to replay end-user sessions to research incidents and identify problems.
    - Rollback and fix forward - Ability to both roll back quickly and fix a problem quickly through the pipeline without the need to undo changes.
    - Immutable infrastructure - The concept that teams never change the elements of the production environment in an uncontrolled manner (outside the pipeline).
    - Version control - Environments should be maintained under version control.
  - Continuous Monitoring:
    - Increase the visibility and transparency of network activity and performance.
    - System Definition - Defines the scope.
    - Risk Assessment - Categorize risk (high to low) and potential impact of a data breach.
    - Choosing Security Control Software - Determine what types of security controls will be applied.
    - Software Tool Configuration - Incorporate features such as log collection and aggregation.
    - Ongoing Assessment - Analyze log data and detect trends, patterns, or outliers that indicate abnormal activity.
  - Best Practices:
    - Test-driven development - Defines behavior specifications for new features before development begins. 
    - Single method of deployment - When a pipeline is in place, it must be the only method of deployment.
    - Containerization - Guarantees code behaves the same across any machine.
  - Examples of Tools: Jenkins, CircleCI, TeamCity, Bamboo, GitLab.

---

## Week 5

- Topics:
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
  - Topics:

- Required Reading:
  - []()

- Weekly Assignment 6:
  - .

Notes:
- .

