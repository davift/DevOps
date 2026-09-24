# SCS_3957_015 Module 1: Weekly Assignment

Student: Davi Torres

- Weekly Assignment 1
  - Select an organization and describe whether CALMS core values and the Three Ways principles are present.
  - List and provide examples to support your assessment.
  - Explain the current ways the organization is doing software delivery.
  - No more than 3 pages (maximum 1,500 words single-spaced, in 12pt font)

## Paper

The organization selected is a previous employer that I will refer to as M. They are primarily a software company, and they offer SaaS and services using in-house-developed tools.

What CALMS core values they do well and why:
- Achieving Agility
  - With the use of pipelines, software is deployed consistently with no manual tasks other than reviews and approvals.
  - Time to market for small and frequent changes is consistent. Most of the time is spent on the coding, reviewing, and testing phases.
  - They also use pipelines for non-software development, such as IaC for consistency between environments and a GitOps audit trail.
- Removing Silos
  - Developers and DevOps collaborate on the source code that contains both software and pipeline workflow. In other words, the tooling is shared, while keeping separation of duties.
  - Problem-solving is much easier, and anyone can collaborate on solutions, and even test builds and look at the logs and outputs as they go.
- Efficient and Faster Deployment
  - Definitely, code can get to production faster. Mainly, in the event of a small mistake that slipped through, code fixes can come in a matter of minutes.
  - Of course, if a build fails, if an app does not pass tests, or if it goes all the way but is not deemed healthy, it does not take over the healthy running version.
  - Rollbacks are also fast, but sometimes require some manual intervention if the pipeline does not cover the scenario. To be honest, M does not do this very well.
- Savings
  - A large number of automation pieces take care of common repetitive tasks.
  - This requires tools to monitor whether all asynchronous tasks continue to work as expected.
  - Heartbeats and streams of logs to a centralized location play a big role in verifying and raising alerts when something fails.
- Continuous Delivery
  - I guess this is where Developers and DevOps interface more often. Software changes are smaller in size, allowing a better understanding of their impacts and making tests easier to create.
  - Typically, given the way the artifacts are promoted between environments, from Dev all the way to Prod, small improvements are released multiple times a day.
- Reduced Defects
  - When a feature requires access to a cloud resource, such as listing an S3 bucket, a test can be added to the pipeline to check whether the bucket is reachable and the permissions are correct.
  - In the example above, the deployment (delivery) would fail safely, interrupting and raising an alert. This is more of an exception at M, not the norm.
  - QA at M happens at multiple levels. There are automated tests in the pipeline, but those only capture a limited number of test cases.
  - A QA technician also does tests manually and with the use of automated tools that are rarely part of the pipeline, but their sign-off (approval) is part of the workflow.
  - Lots of good metrics are extracted from this process, such as MTTR, failure rates, build success, and more.

The current Ways that M is doing software are basically all three:
- Systems Thinking
  - Since developers only see the applications or the features they are working on, an understanding of all the moving pieces is what makes it work.
  - Frequently, refinement sessions and design reviews include members of the DevOps team to provide insights to software development. The other way around also happens.
- Amplifying Feedback Loops
  - Some pipelines start with a basic scope (if the app is very unique), with tests and validations that are very superficial, but they mature over time (that is the reality).
  - When a new pipeline is created for an app that is very similar in nature to an existing one, it benefits from the reference or a template. Definitely a head start.
- Culture of Continuous Experimentation and Learning
  - Definitely, M does have a culture of experimentation. The isolation of environments provides a safe place for testing, keeping in mind that it is not the same as production, but close enough.
  - Some efforts failed badly in Prod due to a completely different load. A SQL query, while accurate, had a very high unique cost that affected performance, causing an outage during peak hours.
