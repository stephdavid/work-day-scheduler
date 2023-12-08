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

* Added jQuery click events for the buttons

* For every hour block, if there is an item in local storage (if two items, the latest), then get that value and using the jQuery val() method, populate the textarea input element

+ Using dayjs, get the current hour. For every hour block determine whether it is earlier or equal to the current hour using a data attribute (data-hour). If earlier, then change the class (background-color) to past, if equal change the class (background-color) to present.

* css changes - class hour given top padding for readability. Text colour of past present and future classes changed to default black for better contrast. Background colours of classes present and future changed to less garish colours.

* Added a clear all (items in storage) button 

* Fixed the aria text for the buttons

* Adjusted the fontawesome icon and added text "Save" to make it easier to read and understand the purpose of the button


### References

Day.js
https://day.js.org/en/<br>

(Day.js) AdvancedFormat
https://day.js.org/docs/en/plugin/advanced-format<br>

Day-Planner
https://github.com/JenG1/Day-Planner/tree/master<br>

W3C - ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used
https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html<br>

click event
https://api.jquery.com/click/<br>

How to Set Value of Textarea in jQuery
https://www.tutorialrepublic.com/faq/how-to-set-value-of-textarea-in-jquery.php<br>

localStorage in JavaScript: A complete guide
https://blog.logrocket.com/localstorage-javascript-complete-guide/<br>

hour
https://day.js.org/docs/en/get-set/hour<br>

Is Before
https://day.js.org/docs/en/query/is-before<br>

Using data attributes
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes<br>


Why Bootstrap 4 and FontAwesome 5 Are A Killer Combo
https://www.danylkoweb.com/Blog/why-bootstrap-4-and-fontawesome-5-are-a-killer-combo-GF
