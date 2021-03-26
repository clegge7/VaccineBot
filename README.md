# VaccineBot
A bot to detect available vaccine appointments at HEB locations and alert the user if there are available appointments within 30 miles.

1. Add the 'alerts.js' file to Firefox as a temporary extension by going to about:debugging#/runtime/this-firefox in Firefox and clicking on "Load Temporary Add-on".

2. Navigate to https://vaccine.heb.com/scheduler enable autoplay for this site only.

3. Enjoy.

The extension refreshes the page every 4.5 seconds. When a vaccine available within 30 miles and with at least 3 time slots available, the entire website background turns bright red and a nuclear siren goes off. Just gotta keep the page open in a minimized window or something while it does it's thing or keep it on another monitor.
