# Findings

The survey has been conducted over a period of two weeks and 27 people did participate. Out of those, three results were invalid due to file corruption and/or circumvention of the survey mechanisms. A total of 15 persons gave consent to share their results publicly and the corresponding files will be published in the accompanying GitHub repository^[Link exluded in this version of the document].

## Overall

Even though the overall interaction results are not related to a specific page or cookie banner style, they may still contain valuable insights. As seen in [@fig:overall] a majority of cookie banners were ignored with a (+CTR) of 45%^[This states that of all displayed cookie banners only 45% were interacted with]. This indicates that they are only mildly effective in capturing the users attention in general. However, it has to be taken into consideration that participants may have been conditioned to specifically ignore such banners as the concept has been in use since the early 21st century (for more details, refer @sec:history). It could also be caused by the short-term nature of the interaction of this survey. Users who interact with a page more frequently and for longer durations are expected to behave differently. These questions are ideally suited for future research into the topic.

Another interesting metric is the time at which the users interacted with the banner. Almost half of the interactions (30 out of 63) happened after the user navigated around the page. This might be caused through forced interactions (e.g. IKEA), by the user suspecting content being obscured by the banner, or because they encounter some waiting periods while the website processes information (e.g. fluege.de^[During search only a loading indicator and the cookie info is displayed]). However, based on the data present it can't be determined with certainty. An alternative theory would be that users don't exhibit learned behaviour but rather selective vision of the interface elements necessary to achieve the goal. To answer this question further research into the topic is required.

Of all interactions a slight trend towards accepting the policy is visible.

## Demographics

Next up are participant demographics and whether or not they affect the overall results. Rather surprisingly, the effect on the (+CTR) and type of interaction, while not negligible, is minor.

**Subjective knowledge:** The participants were asked to estimate their computer knowledge on a scale from 1-10. While there is a slight fluctuation (±1) in the (+CTR) — as expected with the low sample size per knowledge — a positive correlation between the two can be seen in [@fig:byKnowledge]. However, it seems that the ratio of accepted vs. rejected policies changes towards the former instead of staying equal. A major bump in the graph can be seen at a knowledge level of 9. While it could be valid data, the low sample size of just two individuals makes this statistically insignificant.

**Occupation:** Out of the available groups (Student, Working, or Pensioned) students tend to be most aware of the banners and interact with them the most as seen in [@fig:byOccupation]. Pensioned didn't interact with any, however the sample size is too low to make this result statistically relevant.

**Subjective privacy awareness:** Similar to knowledge, the participants were asked to estimate whether or not they tend towards comfort at the cost of privacy or the other way around. The numbers in [@fig:byPrivacy] correlate to a scale from 1-6 where one indicates full comfort and six full privacy. While the (+CTR) increases from two to three, it stays constant above that and only the type of interaction changes. As expected, the number of accepted cookie policies decreases as subjective privacy awareness rises.

**Workplace:** The last demographic is whether or not a person works in the IT sector. The data in [@fig:byWorkplace] indicates that the workplace has no significant effect on the behaviour.

## Time of interaction

Another metric is the time at which the user did interact with the banner. It can give an indication of whether or not the users attention is captured by a banner as soon as it is displayed. [Figure @fig:interactionTime] shows the ratio of interaction times for each page. Purple indicates that the first interaction of the user with the page was to accept or reject the cookie policy while blue means that other interactions (e.g. navigating to sub-pages or using a search) took place beforehand.

The three pages that captured the most attention — namely Netflix, Mindfactory and Backblaze — have a roughly 50% split between the two possibilities. fluege.de, despite capturing overall less attention, has a similar ratio. Video analysis showed that most after-interaction clicks took place during the search process where the page was just displaying a loading indicator and banner. Twitter had only one interaction and the time of interaction results are not representative. IKEA is on the other end of the spectrum where users only interacted after navigation. As shown in [@sec:choiceByPage] it had a seemingly low noticeability and according to the video recordings half the interactions were forced, while the others took place at the end where the assignment had already been completed but not submitted.

Ignoring the pages with low sample counts, roughly half of all interactions took place after the user had interacted with the page. Given that the goal is to collect user consent before valuable tracking data is produced, this is a diminishing return. As seen in [@fig:overall] only half the users interact with banners in general and of these only half will do so after navigating the page, yielding a theoretical (+CTR) of just 25%.

## (+CTR) by website {#sec:choiceByPage}

This section will evaluate the (+CTR) for each page and take a look on the effects of their respective banner design. The data from [@fig:choiceByPage] will be referenced throughout this section. Each bar represents all interactions with one page, split into up to three areas. The bars will be discussed individually below.

**Twitter:** This page does not have any rejections because it was not possible to do so. Besides that, only 4% interacted with it and this interaction is statistically insignificant with only one matching sample. This result is presumably due to the very low contrast and size.

**Netflix:** Compared to the previous one the (+CTR) increased significantly from 4% to 67% even though the banner grew only slightly. However, the contrast ratio increased manifold to approximately 17:1 from roughly 6:1 indicating that contrast plays a significant role in noticeability. Note though that the density of relevant content decreased and it is unclear whether or not this had an effect, opening the possibility for future research.

**fluege.de:** Despite a size increase to 12.6% the (+CTR) decreases by 56%. Similarly the contrast ratio decreased from roughly 17:1 to 2.58:1. Additionally, the disappearing of the banner as mentioned in [@sec:fluege.de] may have an adverse effect as the duration of it being visible is significantly reduced. However, as seen in [@fig:interactionTime] almost half the interactions happened after navigation. The video recordings revealed that all of those happened during the loading phase of the search results. During this the screen is almost blank (ref. [@fig:snapshot-fluege.de-loading]), the contrast ratio changed and users were effectively idle. This likely increased the interaction count, rendering results from this page close to unusable.

**Mindfactory:** In this web-shop almost 80% interacted with the banner surpassing Netflix slightly. Despite the low contrast ratio of just 1.1:1 it achieved the highest (+CTR). This might be due to the size increase and potentially the use of a signal color (orange) not used elsewhere. How strong of an impact different colors regardless of contrast ratio have requires further research.

**IKEA:** Even though IKEA had a banner that is larger than four other contenders it had a surprisingly low (+CTR) of just 12.5%. This equals three participants out of which one was forced to interact with the banner to complete the assignment. This result is likely caused by the missing contrast, drop-shadow and no use of signal colors in either the background or buttons.

**Backblaze:** This service tied with Mindfactory in terms of (+CTR). While the popup has no color contrast it stands out due to the drop shadow and signal colors (red, green) on the buttons. This suggests that missing contrast can be made up by a shadow and size. A noticeable detail is the change in the accept/reject ratio with more users rejecting the policy. It is possible that the clear use of signal colors for the buttons had an effect on this, however further research needs to be conducted in this area.

The results above show that multiple factors like size, contrast ratio, use of signal colors and shadows have an effect on the (+CTR). While no clear importance ranking is possible it seems that shadows and a high contrast ratio can be interchanged. Additionally, the use of signal colors appears to have a profound impact in steering the user focus. This theory is backed by Gama et al. [@color-blending].

Another takeaway is that the most prominent pages only gained rejections beyond a certain point (around 38% for this data set). This can be caused due to pages making it hard to reject their policy or by the possibility that users that tend to reject also have a higher bar for noticing banners. To answer this with certainty, further research focused on this has to be conducted.

## Interaction by user

To determine whether or not individual users have a tendency towards a specific behaviour, a ternary plot has been employed. In [@fig:byUserTernary] each user is represented by a dot, overlapping dots are shown by an increase in saturation (up to four users are overlapping in this data). Each corner of the triangle corresponds to a type of action (accepting, rejecting or ignoring a banner). Dots are placed along the line from the center of the opposing edge to the corner depending on how many pages this specific action has been taken on by a user. To give an example, a user who only accepts will be located in the bottom left while one that accepts and rejects equally and ignores nothing is placed in the bottom center.

First off all, there are few extremes. Two users ignored every banner but other than that nobody just accepted or just rejected. It has always been a mix. Additionally, no user rejected more than 50% of the pages and few (5/24) ignored less than 50%. A cluster of users can be found in the top half of the triangle which correlates with the data from [@fig:overall]. This shows that the group of participants is not comprised of strongly opinionated users. Effectively, results that are applicable to a group of users are expected to apply to most individuals as well.

<!--
- Slight tendency towards accepting pages
  - A few opinionated users (4) shift the [@fig:overall] towards accepted
-->
