# SCS_4005 DevOps Tools and Application

Farhad Khurshid
farhad.khurshid@utoronto.ca

Syed Wahid Zaidi
syed.zaidz@utoronto.ca

## Week 1

Topics:

- An Introduction to DevOps and its History
- DevOps Benefits
- The Eight Phases of DevOps
- Final Assignment Discussion

Required Reading:

- (The History of DevOps: A Visual Timeline)[https://whatis.techtarget.com/reference/The-history-of-DevOps-A-visual-timeline]
- (6 Companies That Are Doing DevOps Well)[https://www.helpsystems.com/blog/6-companies-are-doing-devops-well]
- (Wikipedia: DevOps)[https://en.wikipedia.org/wiki/DevOps]
- (A DevOps case study at one of the world's largest banks)[https://www.information-age.com/devops-case-study-banks-123482580/]
- (9The Eight Phases of a DevOps Pipeline)[https://medium.com/taptuit/the-eight-phases-of-a-devops-pipeline-fda53ec9bba]

No lab or assignment due this week.

Notes:

- DevOps is complementary to Agile methodology (from which several aspects come).
- It reduces interpersonal friction, eliminates bottlenecks, improves collaboration, increases satisfaction, and productivity.
- Phases vs Tools for Labs
  - Plan: Trello
  - Code: IDE, OS, Git
  - Build: NPM (JavaScript)
  - Test: Mocha for Node.js (Unit/BDD/TDD)
  - Release: Jenkins, IMO, GitHub Actions (CI/CD)
  - Deploy: Docker, K8s, Terraform (IaC)
  - Operate: Ansible
  - Monitor: Podman, Nagios, New Relic
- CMMI 4 Step Maturity Model
  - 1 Initial - Knows that it is, but hasn't done any.
  - 2 Managed - There is a level of Project Management achieved.
  - 3 Defined - More proactive than reactive.
  - 4 Optimizing - Stable and flexible, allowing agility and innovation.

---

## Week 2

Topics:

- The Plan Phase
- The Code Phase
- Module 2 Lab

Required:

- (The Eight Phases of a DevOps Pipeline)[https://medium.com/taptuit/the-eight-phases-of-a-devops-pipeline-fda53ec9bba]
- (Explore Trello (You could sign up for free and view the tutorials))[https://trello.com/?&aceid=&adposition=&adgroup=105703213368&campaign=9843285514&creative=437184392284&device=c&keyword=trello&matchtype=e&network=g&placement=&ds_kids=p53016482424&ds_e=GOOGLE&ds_eid=700000001557344&ds_e1=GOOGLE&gclid=EAIaIQobChMIhsHK-8Tu-QIV0D-tBh2DsgWVEAAYASAAEgI5qPD_BwE&gclsrc=aw.ds]

Recommended:

- (Trello vs JIRA)[https://technologyadvice.com/blog/information-technology/trello-vs-jira-choosing-an-agile-project-management-tool/]
- (Gartner (Peer Insights))[https://www.gartner.com/reviews/market/enterprise-agile-planning-tools]
- (Linux Command Line Cheat Sheet)[https://www.linuxtrainingacademy.com/wp-content/uploads/2016/12/LinuxCommandLineCheatSheet.pdf]

Notes:

- Planning:
  - Tools: Jira, Rally, PlanView, GitLab, ServiceNow, Azure Boards, Trello, Asana, Monday.com, etc.
  - For Kanban: Backlog, To Do, In Progress, Done, Retrospective, Blocked.
- Coding:
  - From the requirements, code is written, tested, and reviewed by the developer.
  - Containers
    - Packages all dependencies in an artifact ready to run with system and resource isolation.
    - Loads in under a second.
    - Allows microservices.
  - Code Framework
    - Open-source reusable lines of code specific to the chosen language.
    - E.g., Flask, React.
  - IDE
    - E.g., VSCode, Eclipse, Cursor, Atom, Sublime.
  - Source Control
    - E.g., Git, GitHub, GitLab, GitTea, Artifact Registry.
    - Tools in disuse: CVS and SVN.

PMLC (Project Management Lifecycle)
SDLC (Software Development Lifecycle)
The Project Owner owns the Requirements.
The Product Owner owns the Features.

---

## Week 3

Topics:

- The DevOps Build Phase.
- What are Build Automation Tools and Servers?
- What are Frameworks and Package Managers?
- Module 3 Lab.

Required Reading:

- (What is a Build Tool?)[https://mindmajix.com/12-open-source-devops-build-tools]
- (Framework vs Library: Full Comparison.)[https://www.interviewbit.com/blog/framework-vs-library/]
- (Dependency and Package Managers.)[https://builtin.com/software-engineering-perspectives/package-managers]
- (NPM Introduction.)[https://www.w3schools.com/nodejs/nodejs_npm.asp]

Notes:

- Build: Scheduler, On-demand basis, Trigger basis.
- CI/CD Tools: Jenkins, GH Actions, Octopus Deploy, Circle CI, Azure Pipelines.
- Benefits: repeat consistently, prerequisite checks (pull libraries and dependencies), integrate tests (unit and integration), deploy and record audit trails.
- What are frameworks?
- What are libraries?
- What are Package managers?
- Demo of the Lab.

---

## Week 4

Topics:

- The DevOps Test Phase
- What is Software Testing and Test Cases
- Different Levels and Types of Software Testing
- Benefits of Testing and Best Practices
- DevOps Testing Automation Tools
- Agile DevOps Testing Approaches

- Required Reading:

  - (DevOps Testing Best Practices)[https://www.bmc.com/blogs/devops-testing/]
  - (DevOps Testing Tools)[https://blog.hubspot.com/website/devops-testing-tools]
  - (Mocha JavaScript Testing Tool for Node.js)[https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha]

Module 4 Lab:
  - Node.js Unit Testing Using Mocha Library

Notes:

- Test Phase:
  - Manual and automated tests are performed as build is copmpleted.
  - It is a component of the Build process (success build must pass all tests).
  - Test must pass to proceed (promote code to release phase).
  - Should test requirements, deployments, UX, features, and etc to provide feedback.
- Test Cases:
  - Specification-Based Testing aka Functional Testing
    - Independent of implementation.
    - Can be done in parallel with the implementation.
  - Code-Based Testing aka Structural Testing
    - Implementation is known and used to identify test cases.
    - Look inside the implementation to tests all possible paths.
- Functional Testing:
  - Unit:
    - Always the very first testing.
    - Modules are tested independently of the application.
    - Purpose of testing their individual performance.
  - Integration:
    - Starts after the unit testing.
    - Tests the dataflow between modules or interfaces.
    - Purpose to test statement accuracy between modules.
  - End-to-End (E2E):
    - Also know as System Testing, starts after integration testing.
    - Tests beyond the system to demonstrate the app meet its objectives.
    - It requires a written, measureable objectives and criteria.
- Non-Functional Testing:
  - Also know as performance testing.
  - Focus on: different volumes of data, different number of concurrent users (load/stress), usability (easy of use/accessibility), security, and performance (speed and resources utilization), configuration, compatibility, install, backup/recovery, maintenance (upgrade).
- Challanges of traditions testing in SDLC: Slow, Costly, Error pron.
- Benefits of testing in DevOps env: Cheap, Fast, Repetiteable.
- Best Practicies:
  - Pair Programming (coder and reviewer)
  - Frequent merges to remote repository.
  - Maintain proper documentation for organization and trasnsparency.
- Examples of Tools:
  - Unit - Mocha (JS), JMeter
  - Continuous - Atlassian Bamboo, Docker, Jenkins.
  - Performance - JMeter, LoadNinja, Webloa, Predator, TestComplete.
  - Automated - Selenium, Lanwork, Jenkins.
- Agile Testing approaches:
  - TDD - Test Driven Development
    - The test case is developed first and the code after.
  - BDD - Behavior-Driven Development 
    - Test cases for functionality testing (requires developer, tester, and business user).

---

## Week 5

Topics:

- The Release Management Phase
- Source Code Repositories
- Container Registries and Docker
- Deployment Automation Tools (CI/CD Tool) and Jenkins

- Required Reading:

  - (Docker Overview)[https://docs.docker.com/get-started/overview/]
  - (Jenkins Architecture)[https://www.jenkins.io/]
  - (Node.js: How do I start with Node.js after I installed it?)[https://nodejs.org/en/docs/guides/getting-started-guide/]

Notes:

- Release Management
  - Manage, plan, schedule, control software build and release through stages and evironments.
  - Dev and Ops work together.
  - Examples of tools: Service Now, HP Service Manager, BMC smart IT.
  - Requires: documentation, approval of changes, rollback strategy, implementation plan/checklist, etc.
  - Traditional SDLC RM teams manage 2~3 releases per week, while in DevOps the frequency can be hourly, daily, weekly.
  - Releases Categories:
    - System Changes - Less frequent because depends on software fixes.
    - Major Changes - Less frequent because is more disruptive.
    - Minor Changes - Very frequent for changes with low impact and high urgency.
- RM Process Sections:
  - Source Code Repository - Source Control (timestamped commits, author, etc) that allows tracing.
  - Container Registry - Public or Private and store images.
  - Deployment Automation - CI/CD Pipelines
    - Continuous Integration (CI): Build > Test > Merge
    - Continuous Delivery (CD): Create a release in the Repository/Registry
    - Continuous Deployment (CD): Artifacts are executed in Prod.
      - Tools: Jenkins, GitHub Actions, GitLab, CircleCI, TravisCI, Atlassian Bamboo.

---

## Week 6

Topics:

- 

- Required Reading:

  - 

Notes:

- 

---

(to be continued)
