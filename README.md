## Introduction
This program is mainly about moving all inline scripts in one HTML to an external JavaScript file and link the external js file to the HTML file. Besides, it will also generate a CSP header as a string. This program will take a HTML file as input, and output a new HTML file which has no inline scirpts (new_index.html), one external js file (index_external.js), and one txt file which stores inline scripts policy (index_policy.txt).

Our goal is to make this program can automatically deal with any HTML file from Alexa Top. The source data of Alexa top websites is in the srouce folder.

## Installation and Usage

  Download external jar package [HtmlUnit](http://htmlunit.sourceforge.net/); [Jsoup](http://jsoup.org/) first
	
    Download source code
    $ git clone git@github.com:chaofeng2014/499-450CSPproject.git

	Configure Build Path
	Right Click on your project -> Build Path -> Configure Build Path... -> Add External JARs

	Rename the HTML file to index.html 

	Put the index.html into a folder called test at the same level of src

	Compile the code and run

## Demo
There is a demo in the demo.zip. Double click the executable jar to run the program. Keep the file structure to enable run the program.

## Authors
* [Feng Chao](https://github.com/chaofeng2014) - Computer Science, master, McCormick School of Engineering
* [Yuchao Zhou](https://github.com/yuchaozh) - Computer Science, master, McCormick School of Engineering

## Acknowledgements
* Professor: [Yan Chen](http://www.cs.northwestern.edu/~ychen/)
* Mentor: [Yinzhi Cao](http://www.cs.northwestern.edu/~yca179/)
