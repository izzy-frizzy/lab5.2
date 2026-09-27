How did event.preventDefault() help in handling form submission?

*it helps to prevent refreshing the page automatically

What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

*html validation attributes create bubble pop ups to alert the user of the validation while in javascript you can customize the messages

Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

*I used local storage to remember what username by first setting the username in the username event listener function and then using the local storage get item function out side the event listener, the limitations of local storage is that it isn't secure for passwords since it makes it possible to see passwords


Describe a challenge you faced in implementing the real-time validation and how you solved it.

*a challenge i faced was that when i was coding the validity.patternMismatch or validity.too short methods it wasn't working at first and thats because I didn't edit my html and i didn't realize I needed to add html tags like pattern, required and minlength

How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

*I ensured this things by using the valitiy methods like valueMissing or too short or pattern mismatch which are different methods that check at the appropriate time when the 