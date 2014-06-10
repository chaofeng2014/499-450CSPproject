package com.mkyong;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.util.ArrayList;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.safety.Whitelist;
import org.jsoup.select.Elements;

import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.FailingHttpStatusCodeException;
import com.gargoylesoftware.htmlunit.Page;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.WebResponse;
import com.gargoylesoftware.htmlunit.html.HtmlPage;

public class GetURLContent 
{
	public int count = 0;
	ArrayList<String> policys = new ArrayList();
	public void inline2external(String html, String webpage) throws IOException
	{
		// make js and html files
		File html_file = new File("new_" + webpage.trim() + ".html");
		BufferedWriter html_out = new BufferedWriter(new FileWriter(html_file));
		if (!html_file.exists()) 
		{
			html_file.createNewFile();
		}
		
		// Jsoup parse link
		//Document doc = Jsoup.parse(html);
		
		// for test local html file
		//File input = new File("./bing_files/bing.html");
		File input = new File("./test/index.html");
		
		Document doc = Jsoup.parse(input, "UTF-8");

		System.out.println("src scripts: ");
		// locate external js file
		Elements external_scripts = doc.select("script[src]");
		for (Element x : external_scripts)
		{
			// extract js path
			System.out.println(x.attr("src"));
		}
		
		// locate external css file
		Elements external_css = doc.select("link[href]");
		for (Element y : external_css)
		{
			System.out.println(y.attr("href"));
		}
		
		generateCSPHeader(external_scripts, webpage, external_css);
		
		// delete external script code
		Elements scripts = doc.select("script").not("script[src]");
		for (Element y : scripts)
		{
			System.out.println(y);
			// delete <script>...</script> in html
			y.remove();
		}
		scripts2Js(webpage, scripts);
		
		String[] script_directive = {
    			// Mouse Events
    			"onclick", "ondblclick", "onmousedown", "onmousemove", "onmouseover", "onmouseout", "onmouseup", 
    			// Keyboard Events
    			"onkeydown", "onkeypress", "onkeyup", 
    			// Frame/Object Events
    			"onabort", "onerror", "onload", "onresize", "onscroll", "onunload",
    			// Form Events
    			"onblur", "onchange", "onfocus", "onreset", "onselect", "onsubmit"};
		
		for (int i = 0; i < script_directive.length; i++)
		{
			Elements script_src = doc.select("[" + script_directive[i] +"]");
			inline2Js2(script_src, webpage, script_directive[i]);
		}
		addToPolicy(webpage);	
		addExternalJs(doc, webpage);
		
		// write html into a new file
		html_out.write(doc.toString());
		html_out.close();
	}
	
	public String generateCSPHeader(Elements ele, String web, Elements ele_css)
	{
		String CSPHeader = "Content-Security-Policy: default-src 'self'; script-src 'slef' ";
		for (Element y : ele)
		{
			//System.out.println(y);
			CSPHeader = CSPHeader + y.attr("src") + " ";
		}
		CSPHeader = CSPHeader + web + "_external.js ";
		// delete the last space 
		CSPHeader = CSPHeader.substring(0, CSPHeader.length() - 1);
		CSPHeader = CSPHeader + "; ";
		CSPHeader = CSPHeader + "style-src 'self' ";
		for (Element x : ele_css)
		{
			CSPHeader = CSPHeader + x.attr("href") + " ";
		}
		CSPHeader = CSPHeader.substring(0, CSPHeader.length() - 1);
		CSPHeader = CSPHeader + "; ";
		System.out.println("CSP header: \n" + CSPHeader);
		return CSPHeader;
	}
	
	public void addToPolicy(String webpage) throws IOException
	{
		File policy_file = new File(webpage.trim() + "_policy.txt");
		// add true to enable append content to the file
		BufferedWriter policy_out = new BufferedWriter(new FileWriter(policy_file, true));
		if (!policy_file.exists()) 
		{
			policy_file.createNewFile();
		}
		for (String x : policys)
		{
			policy_out.write(x + "\r\n");
			
		}
		policy_out.close();
	}
	
	public void inline2Js2(Elements ele, String webpage, String directive) throws IOException
	{
		File js_file = new File(webpage.trim() + "_external.js");
		// add true to enable append content to the file
		BufferedWriter js_out = new BufferedWriter(new FileWriter(js_file, true));
		if (!js_file.exists()) 
		{
			js_file.createNewFile();
		}
		
		// delete front two bits
		String js_directive = directive.substring(2);
		//System.out.println(js_directive);
		for (Element x : ele)
		{
			// add id check, if exists then use it. otherwise create a new one
			String ele_id = "";
			ele_id = x.id();
			if (ele_id == "")
			{
				x.attr("id", String.valueOf(count));
				ele_id = String.valueOf(count);
			}
			//System.out.println(ele_id);
			String function_content = x.attr(directive);
			policys.add(function_content);
			//System.out.println(function_content);
			//inline2Js(webpage, count, function_content);
			// delete onclick attribute
			x.removeAttr(directive);
			js_out.write("\r\n");
			js_out.write("var element_" + ele_id + " = document.getElementById(\"" + ele_id + "\");");
			js_out.write("\r\n");
			js_out.write("element_" + ele_id + ".addEventListener(\""+ js_directive +"\", function(){" + function_content + "}, false);" );
			count++;
		}
		js_out.close();
	}
	
	
	public void addExternalJs(Document docs, String webpage)
	{
		docs.body().appendElement("script");
		System.out.println(docs.body().children().first().lastElementSibling());
		Element new_script = docs.body().children().first().lastElementSibling();
		new_script.attr("src", webpage + "_external.js");
		System.out.println(docs);
	}
	
	// script tagged with <script> ... </script>
	// directly write it into the js file
	public void scripts2Js(String webpage, Elements func) throws IOException
	{
		File js_file = new File(webpage.trim() + "_external.js");
		// add true to enable append content to the file
		BufferedWriter js_out = new BufferedWriter(new FileWriter(js_file, true));
		if (!js_file.exists()) 
		{
			js_file.createNewFile();
		}
		for (Element x : func)
		{
			// get the content within <script>...</script>
			//System.out.println(x.data());
			js_out.write(x.data().toString());
			//js_out.write(func.toString());
		}
		js_out.close();
	}
	
	// inline script, need to add function to wrap
	public void inline2Js(String webpage, int count, String f_content) throws IOException
	{
		File js_file = new File(webpage.trim() + "_external.js");
		// add true to enable append content to the file
		BufferedWriter js_out = new BufferedWriter(new FileWriter(js_file, true));
		if (!js_file.exists()) 
		{
			js_file.createNewFile();
		}
		js_out.write("\r\n");
		js_out.write("var element_" + count + " = document.getElementById(" + count + ");");
		js_out.write("\r\n");
		js_out.write("element_" + count + ".addEventListener(\"click\", function(){" + f_content + "}, false);" );
		js_out.close();
	}
	
	  //static String webadd;
	public static void main(String[] args) throws FileNotFoundException, IOException 
	{
		GetURLContent getURL = new GetURLContent();
		getURL.inline2external("", "index");
	}
}