---
    header-title: Transferleistung 3
    title: 

    author: Til Blechschmidt
    Zenturie: A17a
    Studiengang: Angewandte Informatik
    Matrikelnummer: 8240

    keywords: [gdpr, dsgvo, cookies, web, banner, viewport, survey]
    
    # This can be replaced with any valid bibliography file (.yaml, .json, .bib)
    bibliography: src/bibliography.bib
---

# Introduction

Data privacy has a long history for both companies and states as well as users. With the advent of the internet it became easy — relatively speaking — to collect data about individual users to analyse their behavior. This data could be used for a multitude of purposes by different parties: Website owners could use it to analyse the traffic on their page in order to optimize it, advertising networks can employ this data to create user profiles aiding personalised and targeted advertising. Other uses include selling the data to interested parties for revenue.

In the early days of the world-wide web these practices became widespread and relatively intransparent and the choice of providing options regarding data privacy to the user was with the website providers. This was less than ideal and by the late 20th century and early 21st law enforcement agencies began to regulate the collection of personal data.

Over the years many different levels of regulations have been employed ranging from a simple notice that data was being collected to a full consent request pop-up. Modern regulations like the GDPR require websites to explicitly ask the user for consent before employing tracking technology. These consent flows come about in two major forms: Banners and Modals. Banners block a certain region^[commonly ranging between 5% and 25%] of the viewport, usually at the bottom, and tend to have two buttons to either reject or accept monitoring of user activity. Modals take the same basic concepts employed by banners but block access to page before a decision is made. Both solutions can fulfill the GDPR's requirements but at the same time both are capable of missing the mark! It is highly debatable and up to the jurisdiction whether or not techniques like auto-dismissing consent banners are compliant. This cite from the regulation states the requirements for the consent mechanism:

> Consent should be given by a clear affirmative act establishing a freely given, specific, informed and unambiguous indication of the data subject's agreement to the processing of personal data [...].

With users being exposed to cookie notices, opt-in banners, and consent modals for over two decades and companies attempting to walk a tightrope in the legal grey area the question comes up how many users actually notice and interact with these data privacy related page elements. This includes the question how much of an effect different sizes of banners have on the results.

Given that question this paper will focus on the following two research questions:

1. How did consent requirements evolve in the European Union over the last two decades?
2. What effect does the size of a consent banner have on the number of users interacting with it?

The first question will be answered by researching documents regarding the legislation surrounding data privacy. The second question will be evaluated through a survey which guides users through a few websites with different consent mechanisms.

\pagebreak
