# Conclusion

<!-- - Tendency to interact with top-aligned banners towards the end (task result input is at the top probably) -->

The key takeaway is that there is no clear winning factor to noticeability. How many users interact with a banner is strongly influenced by size, shadows & contrast ratio, and the use of signal colors. Each piece contributes to the overall (+CTR) and no clear weighting of the factors emerged from the data collected. It is noteable how many users have a selective vision and only notice parts of the page that are relevant to the task. A secondary takeaway is that on average roughly half of the page visitors notice a cookie banner. Only approximately 25% actually agreed to the cookie policy presented with no one actually taking the time to read it. Making matters worse, half the users interact with the policy popup only after navigating the page. This leads to an even higher loss in potential tracking data. Overall, cookie banners are an ineffective medium to notify users about the data being collected and to acquire their consent.

An interesting metric collected from the video recordings is that some users attempted to reject the policies repeatedly but failed to do so for various reasons (e.g. not hitting the button on the touch screen or the consent flow being misleading) and finally resorted to accepting it. This could potentially be abused by websites by temporarily disabling the reject button or designing complex and misleading consent flows. However, whether or not this is being applied in practice is unknown.

The reasons for the selective vision of users mentioned above remain unknown. Further and more focused research has to be conducted in this area to gain a better understanding whether or not conditioning, trained behaviour or yet unknown processes lead to this.

An additional area of research that was discovered during this work is the duration of the interactions. In the survey users only visited pages briefly to fulfill a very focused task and it remains unknown how their behavior might change with prolonged exposure or repeated visits.

Also mentioned above were colors and consent flow complexity. Both impact the (+CTR) and decision made by the user and the full extent of their influence is yet unknown. Further research opportunities arise to improve the knowledge on which colors capture the users attention most and how complex workflows affect the users reasoning.

Regarding demographics, it remains unknown whether users that tend to reject policies also have a high bar for interacting with these. The data suggests that this is a possibility but the results are not conclusive. Future work may build on this to obtain a clearer picture.

One aspect that was not analyzed in detail is the content density on websites. Some edge cases during the survey might indicate that sites with a higher density and thus more complex layouts have a lower (+CTR). With all other factors at play, however, it is not certain what role this plays and further research has to be conducted.

Direct feedback from the participants showed that the bogus assignments fulfilled their intended purpose and distracted the users from the actual purpose of the survey.

An important lesson learned by reviewing the screen recordings was that humans are very creative and **will** circumvent almost any intentionally placed routes. Covering all possible routes and thinking about any user scenario is not possible and one should not rely on users taking a specific path through an application or survey. Some examples encountered include users knowing the answers to some questions and not even visiting the website or users noticing that no input validation is in place and just entering dummy data to pass the survey quickly.

During the evaluation it became clear that the chosen websites contained too many edge cases (like Twitter not providing a way to reject the policy or fluege.de hiding the banner automatically) which complicated the process. Unaccounted differences like the structure or content density of websites introduced additional variability into the results which could have been avoided. Overall, there were too many variables which complicated the evaluation and reduced the applicability of the results especially due to the low sample size.

The distribution method used presented unique challenges in scaling the number of participants. For the purpose of this paper in the limited time frame it was acceptable but when conducting larger scale survey one should consider alternatives which scale better. One example is to rig a website that has a continuous stream of users to monitor user behavior.

\pagebreak
