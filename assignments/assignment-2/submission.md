# CSC 317 Assignment 2 Submission

**Name:** Roan Rafter  
**Student ID:** 923124654  
**GitHub Username:** rwrftr  
**Assignment Number:** 2  


##  HTML Personal Portfolio Website Assignment

### Description:
Assignment 2 asks us to create a basic html website with info about ourselves, images, an iframe, a form, and other foundational html elements



## Approach / What I Did:
I followed a fairly linear approach, keeping sections and elements stacked on top of each other. In the first 2 sections I wanted text or an element to appear alongside the images I had added, and so I used the style attribute and specified to the image that it should float on the left side of the page, with a 20 px gap before the next element. 



## Code Explanation:
Highlight key parts of your HTML code and explain their purpose. Use code blocks for clarity.

### Header:
I used comments to add information about each section. The first few lines specify to the browser how to interpret the rest of the document, stating an html document, in english, using UTF-8, and telling the browser to scale the content to the width of the screen. 

The meta tags after and including the title give information to whatever is indexing the page, defining a title, description, author, icon image, and keyword tags for search engines.

then theres a brief style section that applies to tables in the rest of the document, telling them to render with dividing lines between cells.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8"> <!-- defines ascii charcters the website uses -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- tells the browser how to scale the page for devices with different aspect ratios -->
    
    <!-- 
     the following meta tags specify information about the site for a search engine to index.
     -->
    <title>Roan Rafter - Assignment 2</title>
    <meta name="description" content="Roan Rafter's home page">
    <meta name="tags"        content="HTML, C++, Java, Roan Rafter">
    <meta name="author"      content="Roan Rafter">
    <link type="image/png" sizes="16x16" rel="icon" href="./images/Seagull-favicon.png">

<!-- https://www.w3schools.com/html/html_table_borders.asp
^ above page informed the following "style" section -->
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px;
        }
    </style>
</head>
</html>