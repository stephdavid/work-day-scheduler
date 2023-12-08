# work-day-scheduler
Module 7 Challenge - Third-Party APIs: Work Day Scheduler

Challenge: Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code, featuring dynamically updated HTML and CSS powered by jQuery.

---

### Webpage

Coding Quiz Challenge
https://stephdavid.github.io/work-day-scheduler/

---

### Screenshots


### Acceptance Criteria

The app should:

* Display the current day at the top of the calender when a user opens the planner.
 
* Present timeblocks for standard business hours when the user scrolls down.
 
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
* Allow a user to enter an event when they click a timeblock

* Save the event in local storage when the save button is clicked in that timeblock.

* Persist events between refreshes of a page


### Process

* To begin, I have added the "Timeblocks" rows to the html page. While not required as the provided html and css is in bootstrap, I'll go with the flow. 😊 I've noted (rather VS Code has highlighted) that there are no labels for the elements <textarea> and <button>. The container flex doesn't work when I add them. Something to look into later.

* I have added today's date - but it's in a cryptic format. Something to ask about in class tonight.

* A good class today. Hat tip to Husman, our instructor for letting us know how to handle "ordinal" numbers. The date now reads as requested.

* As well, I tried to handle the label issue, adding the label and giving it, rather than the textarea or button elements, the bootstrap class attributes. But the display is off. Still a TODO:

* The next morning: A good reason to use ARIA: Added an aria-label to the textarea and button element for accessibility.








### References

D.js
https://day.js.org/en/<br>

Day-Planner
https://github.com/JenG1/Day-Planner/tree/master<br>

W3C - ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used
https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html<br>



