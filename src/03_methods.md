# Methods

1. Which method is used to analyse effects? Interactive survey.
-- Survey design
2. How is consistency/comparability ensured? Isolated environment on controlled devices.
3. What does the survey contain and why? Rough outline.
    - Language fixed to German to catch more than just bilingual people, mostly german web pages
    - Various pages with cookie banners of different viewport ratios and contrast ratios {#sec:method:pages}
        - Step right here is to choose pages that cover a good range of ratios
        - Limit pages to six to keep length in check
    - Static questions at the end regarding demographics and one about privacy vs. comfort
4. Exact method by which pages will be selected and how the user will interact with it
    - Includes why we can't tell the user what we are looking for
    - Use bogus tasks to distract the user from the actual topic (did work, feedback Noah)
-- Survey distribution
5. How will the survey be distributed? Known persons with applicable device classes.
6. Target audience size (and more importantly why)
7. Collection time period? Roughly two weeks to keep a balance between available time and representativeness
-- Evaluation of results
8. How will the results be evaluated?
    - Static data analysis based on JSON output from ResearchKit
    - Review of screen recordings, each page interaction rated by the following criteria
        - Interact on page load (accept, configure, ignore)
        - Interaction after page navigation (accept, configure, ignore)
        - Forced to interact with banner (yes, no) <!-- as some pages contain routes that force interaction -->

- Explain iOS app and distribution through TestFlight VERY briefly
  - Make sure to include test device screen size and DPI to make sure the viewport ratios are accurate
  - Note tradeoff between improved accuracy and lowered evaluation overhead vs. quantity of results

\pagebreak
