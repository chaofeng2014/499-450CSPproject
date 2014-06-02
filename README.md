## Introduction
This program is mainly about moving all inline scripts in one HTML to an external JavaScript file and link the external js file to the HTML file. Besides, it will also generate a CSP header as a string. This program will take a HTML file as input, and output a new HTML file which has no inline scirpts (new_WebName.html), one external js file (WebName_external.js), and one txt file which stores inline scripts policy (WebName_policy.txt).

Our goal is to make this program can automatically deal with any HTML file from Alexa Top. The source data of Alexa top websites is in the srouce folder.

## Installation and Usage

    Download source code
    $ git clone git@github.com:chaofeng2014/499-450CSPproject.git

    Download external jar package
	[HtmlUnit](http://htmlunit.sourceforge.net/)
	[Jsoup](http://jsoup.org/)

	Configure Build Path
	Right Click on your project -> Build Path -> Configure Build Path... -> Add External JARs

	Compile the code and run

## Authors
* [Feng Chao](https://github.com/chaofeng2014) - Computer Science, master, McCormick School of Engineering
* [Yuchao Zhou](https://github.com/yuchaozh) - Computer Science, master, McCormick School of Engineering

## Acknowledgements
* Professor: [Yan Chen](http://www.cs.northwestern.edu/~ychen/)
* Mentor: [Yinzhi Cao](http://www.cs.northwestern.edu/~yca179/)
