# Parameters

To begin with, as outlined in @sec:method:design, a set of websites with varying cookie banner sizes have to be chosen for the survey. An overview with important key factors can be found in +@tbl:websites. Each page, why it has been chosen, and what the assignment will be is described below. All pages listed have been submitted to the Internet Archive at the time the survey was published to retain a reproducible record of how they looked as the web is constantly changing. The links are provided in the footnotes. Additionally, screenshots of the survey interface have been captured for each page.

\newcommand{\yes}{{\color{accept}Yes}}
\newcommand{\no}{{\color{reject}No}}

\newcommand{\high}{\color{accept}}
\newcommand{\medium}{\color{maybe}}
\newcommand{\low}{\color{reject}}

| Website     | TC   | CC   |      CR |     Size |          Color |
|-------------|------|------|--------:|---------:|---------------:|
| Backblaze   | \no  | \yes |  1.00:1 | $22.0\%$ |  White / White |
| IKEA        | \yes | \yes |  1.00:1 | $17.3\%$ |  White / White |
| Mindfactory | \yes | \yes |  1.10:1 | $16.6\%$ | Orange / White |
| Flüge.de    | \no  | \no  |  2.58:1 | $12.6\%$ |   White / Blue |
| Netflix     | \yes | \yes | 16.82:1 |  $9.6\%$ |  White / Black |
| Twitter     | \yes | \no  |  5.61:1 |  $5.0\%$ |   Grey / Black |

Table: Websites evaluated^[TC: No tracking takes place before consent is given, CC: Consent flow is compliant, CR: [Contrast ratio]((https://www.w3.org/TR/WCAG20/#contrast-ratiodef))] {#tbl:websites}

<!-- markdownlint-disable MD024 -->

## Backblaze^[[Backblaze snapshot](https://web.archive.org/web/20200803100221/https%3A%2F%2Fwww.backblaze.com%2F)]

This page has been chosen for its very large popup at roughly 22\% as seen in [@fig:snapshot-backblaze]. Since it does not block the page modally, it is still considered a banner even though it could be interpreted otherwise. At this size it is considered a major hindrance to the usability of the website but despite that the task has been designed carefully to permit solving without interacting with the banner. It has the same color as the page background, yielding a theoretical contrast ratio of 1:1. However, a drop shadow is present separating it visually from the page.

**Assignment:** The task on this page will be to retrieve the maximum storage limit for the personal backup plan. To obtain this information the user has to navigate to the product page using one of two possible links. On the following site the information can be found in multiple places. While still solvable this task has been chosen to potentially seed confusion as the answer — that there is no upper limit to the backup storage — may not be obvious which might trick users into thinking the information is obstructed by the cookie banners.

## IKEA^[[IKEA snapshot](https://web.archive.org/web/20200803095633/https%3A%2F%2Fwww.ikea.com%2Fde%2Fde%2Fp%2Fribba-rahmen-schwarz-10378445%2F)]

This online shop has been selected for its sizable banner at approximately 17.3\% which manages to blend into the background with a very slight drop shadow and the same white color as seen in [@fig:snapshot-ikea]. Additionally, this shop provides the opportunity to design a task which forces the user to interact with the banner on one of the two possible navigation routes.

**Assignment:** The objective for this web shop is to obtain the price of a picture frame called "*RIBBA*". An additional constraint is that the exact size of 61x91cm has to be found, which has been chosen deliberately as it creates two possible navigation paths. While the first one uses the search and scrolling to get the result, the second one requires the user to visit the product page of the picture frame and open the size dropdown. The last option in the dropdown (61x91cm) is covered by the cookie banner, effectively forcing the user to interact with it.

## Mindfactory^[[Mindfactory snapshot](https://web.archive.org/web/20200803095946/https%3A%2F%2Fwww.mindfactory.de%2F)]

This computer shop has been elected for its use of orange on white colors, which is expected to increase noticeability of the banner. It blocks the main navigation, which opens up the possibility for forced interactions. As the background is white and the banner orange it is very prominent and thus expected to not be overlooked by any user. A screenshot can be seen in [@fig:snapshot-mindfactory].

**Assignment:** To direct the user through a path which requires a forced interaction the task calls for the number of 1 TB USB Stick models currently in the shop. To find this number the user has to open up the navigation menu called "Hardware" and click "USB Sticks" which directs him to an overview. A new hierarchical navigation opens up on the left which has a subcategory for 1 TB sticks. Once selected the user can either count the sticks as the amount is very low or read a label at the very top of the list.

## Fluege.de^[[Fluege.de snapshot](https://web.archive.org/web/20200803100114/https%3A%2F%2Fwww.fluege.de%2F)]{#sec:fluege.de}

Intriguingly this page is not only colorful but also non-compliant in all aspects. While it does maintain a high contrast with white on blue and a drop shadow (ref. [@fig:snapshot-fluege.de]), the popup manages to disappear when the user interacts with any text inputs on the page. Not that it matters, as this page does not honor any consents and tracks the user regardless, enabling even more external trackers when consent is actually given. At roughly 12.6\% it is covering the middle field in terms of screen space occupied.

**Assignment:** Since this page dismisses the consent popup as soon as the user interacts with the page, there is no point in staying on this page for prolonged periods of time. Thus, to keep the interaction short, this task asks the user to enter a few route details and retrieve the departure time of the first flight listed in the results. While the result list is loading, the banner is briefly visible for a few seconds as seen in [@fig:snapshot-fluege.de-loading].

## Netflix^[[Netflix snapshot](https://web.archive.org/web/20200803095759/https%3A%2F%2Fwww.netflix.com%2F)]

This popular page has been included because it is compliant in all aspects and very simplistic. Its banner covers roughly 9.6\% of the screen and has a high contrast ratio of approximately 17:1 (ref. [@fig:snapshot-netflix]). Due to the relatively small size and inverted colors it is an interesting contender which could shed light on the importance of color contrast.

**Assignment:** As this page has not much to interact with, the assignment here is to scroll down to the FAQ on the bottom of the site and find the price of the most expensive subscription available.

## Twitter^[[Twitter snapshot](https://web.archive.org/web/20200803100018/https%3A%2F%2Ftwitter.com%2Fi%2Fmoments)]

The last page is a social network with a semi-compliant grey on black banner which notifies the user that they will be tracked if they continue (ref. [@fig:snapshot-twitter]). It covers a paltry 5% of the screen. While they do not track before the user navigates around the site, they are not providing a means of rejecting tracking and have an implicit accept^[Although on Twitter they keep the banner around until the user actively dismisses it as opposed to Fluege.de where it is dismissed automatically] which is strictly speaking non-compliant.

**Assignment:** To complete this task the user has to visit a users profile and search for the age of the latest tweet. While rather simplistic, this task shows whether the user interacts with the banner before it is too late.

<!-- markdownlint-enable MD024 -->

\pagebreak
