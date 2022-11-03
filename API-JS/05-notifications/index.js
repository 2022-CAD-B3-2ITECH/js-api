"use strict";

window.onload = async event => {

    // Check if the browser supports notifications
    if (!('Notification' in window))
    {
        console.log("This browser does not support notifications.");
    }

    // Check if the browser allow notifications
    else if (await isNotificationAllowed())
    {
        createNotification("Notification Title", "Notification Content");
        console.log("Notifications are granted !");
    }

    // If browser don't allow notification
    else
    {
        // alert("Merci d'autoriser les notifs !!")
        console.log("Damn! Notifications are denied...");
    }
}


/**
 *  permission value (denied or granted (or default))
 * 
 * @returns {boolean}
 */
async function isNotificationAllowed ()
{
    const permission = await Notification.requestPermission();
    return permission === 'granted';
}
  
/**
 * Create a new notification
 * 
 * @param {string} title 
 * @param {string} message 
 */
function createNotification(title, message)
{
    const img = '/API-JS/05%20-%20notifications/unicorn-64.jpg';
    new Notification(title, { body: message, icon: img });
}
  