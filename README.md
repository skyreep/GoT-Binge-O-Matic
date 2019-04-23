# GoT Binge-O-Matic

## Preview
<img src="/images/thumbnail.png" width="800px">

## Demo
A live demo is available here: https://skyreep.github.io/GoT-Binge-O-Matic/

## Description
A Game of Thrones countdown clock built with HTML, CSS, Bootstrap, and vanilla JavaScript. It also calculates how much time you would need to spend binging the show each day before the season 8 premiere in order to successfully watch every prior episode beforehand. It is updated every 1s and will change automatically once the premiere airs. Completed for an 8 hour rapid development cycle project in the CSCI-495 IS Capstone course at Coastal Carolina University.

## Dependencies
<ul>
  <li>Bootstrap</li>
</ul>

## Usage
Want to contribute? Great!

To enhance the website, follow these steps:
<ul>
  <li>Fork the repo</li>
  <li>Create a new branch (git checkout -b improve-feature)</li>
  <li>Make the appropriate changes in the files</li>
  <li>Add changes to reflect the changes made</li>
  <li>Commit your changes (git commit -am 'Improve feature')</li>
  <li>Push to the branch (git push origin improve-feature)</li>
  <li>Create a Pull Request</li>
</ul>

## Future Work
while the hero image and content sections are fluid containers and I have built media queries to adjust the background image, the 600px media query won't work on modern high res device displays like iPad and iPhones which have an extremely rich pixel density. As a result I believe I need to implement a new media query that focuses on pixel density rather than pixel based display width. [UPDATE] This issue was fixed by implementing a media query that changes image based on browser orientation (landscape/portait)
 
