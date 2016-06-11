/**
 * FileName: app.js
 * 
 * @author Tom Tsiliopoulos
 * @date June 1, 2016
 * 
 * StudentID: 300818557
 * website: comp125-s2016-lesson4.azurewebsites.net
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    
    /* this is a test for Cloud 9 */
    
    // define an array of HTML elements
    var paragraphElements = [];
    
    // second way to define an array
    //var paragraphs = new Array();
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    
    // define your paragraphs array;
    var paragraphs = [];
    
    // create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");
    
    // check to see if sendButton exists
    if(sendButton) {
        // event listener
        sendButton.addEventListener("click", sendButtonClick);
    }
    
    
    // event handler function
    function sendButtonClick(event) {
        console.log("clicked!");
    }
    
    // create a reference to the firstName field
     var firstName = document.getElementById("firstName");
    
    // create a reference to the form
    var contactForm = document.getElementById("contactForm");
    
    
    if(contactForm) {
        // event listener with inline anonymous event handler function
        contactForm.addEventListener("submit", function(event){
            event.preventDefault();
            console.log("submitted");
            showFormInput();
            contactForm.reset();
        });
    }
    
    /**
     * This function shows the input from each form field 
     * on the console
     * 
     * @method showFormInput
     * @return {void} 
     */
    function showFormInput() {
        console.log("++++++++++++++++++++++++++++++++");
        console.log("First Name: " + firstName.value);
        console.log("++++++++++++++++++++++++++++++++");
    }
    
   
    
    
    // data for my pages
    paragraphs[0] = "<span class='firstSentence'>This is my first paragraph.</span> ";
    paragraphs[1] = "<span class='firstSentence'>This is my second paragraph.</span>.";
    paragraphs[2] = "<span class='firstSentence'>This is my third paragraph.</span> .";
    
    
    
    // check to see if paragraph one exists
    var paragraphElementsLength = paragraphElements.length;
    
    // if paragraph exists then populate each paragraph on the page
    for (var index = paragraphElementsLength; index >= 0; index--) {
        if(paragraphElements[index]) {
         paragraphElements[index].innerHTML = paragraphs[index];
        }
    }
    
    
})();