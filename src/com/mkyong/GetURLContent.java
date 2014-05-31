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
		
		
		//System.out.println(doc);
		//doc.select("[onclick]").attr("id", "asdf");
		
		// locate external js file
		Elements external_scripts = doc.select("script[src]");
		for (Element x : external_scripts)
		{
			// extract js path
			System.out.println(x.attr("src"));
		}
		
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
		
		Elements script_src = doc.select("[" + script_directive[0] +"]");
		
		inline2Js2(script_src, webpage, script_directive[0]);
		addToPolicy(webpage, script_directive[0]);
		
//		int onclick_count = 0;
//		for (Element x : script_src)
//		{
//			// add string type id to onclick
//			x.attr("id", String.valueOf(onclick_count));
//			String function_content = x.attr("onclick");
//			System.out.println(function_content);
//			inline2Js(webpage, onclick_count, function_content);
//			// delete onclick attribute
//			x.removeAttr("onclick");
//			//System.out.println(x);
//			onclick_count++;
//		}
		
		addExternalJs(doc, webpage);
		// write html into a new file
		html_out.write(doc.toString());
		html_out.close();
	}
	
	public void addToPolicy(String webpage, String directive) throws IOException
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
			System.out.println("here~~~~~~~~~~~~~" + x);
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
		int count = 0;
		String js_directive = directive.substring(2);
		System.out.println(js_directive);
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
			System.out.println(ele_id);
			String function_content = x.attr("onclick");
			policys.add(function_content);
			System.out.println(function_content);
			//inline2Js(webpage, count, function_content);
			// delete onclick attribute
			x.removeAttr("onclick");
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
	
	public void extractScript(HtmlPage page_content)
	{
		final ArrayList<?> script_part = (ArrayList<?>) page_content.getByXPath("//script");

    	String[] script_directive = {
    			// Mouse Events
    			"onclick", "ondblclick", "onmousedown", "onmousemove", "onmouseover", "onmouseout", "onmouseup", 
    			// Keyboard Events
    			"onkeydown", "onkeypress", "onkeyup", 
    			// Frame/Object Events
    			"onabort", "onerror", "onload", "onresize", "onscroll", "onunload",
    			// Form Events
    			"onblur", "onchange", "onfocus", "onreset", "onselect", "onsubmit"};

    	ArrayList inline_script = new ArrayList();
    	inline_script.addAll(script_part);
    	//inline_script.addAll(onclick_part);
    	for (String x : script_directive)
    	{
    		final ArrayList<?> part = (ArrayList<?>) page_content.getByXPath("//@" + x);
    		inline_script.addAll(part);
    	}

//    	for (int i = 0; i < inline_script.size(); i++)
//    	{
//    		System.out.println(inline_script.get(i));
//    	}
	}
	
	public void getHTML() throws IOException
	{
		File file = new File("facebook_test.txt");
        file.createNewFile();
		//read the http address from the txt file
		try(BufferedReader br = new BufferedReader(new FileReader("top10000.txt"))) 
		{
			StringBuilder sb = new StringBuilder();
		    String line = br.readLine();
		    //while (line != null) {
		    for(int i = 1; i < 2; i++)
		    {
	            sb.append(line);
	            sb.append(System.lineSeparator());
	            //System.out.println("reading: "+line);
	            String[] wa=line.split(",");
	            
	            //String page_title = "bing";
	            String page_title = "index";
	            
	            final WebClient webClient = new WebClient(BrowserVersion.CHROME);		    
	            //WebClient webClient = new WebClient();
	            webClient.getOptions().setJavaScriptEnabled(false);
	            HtmlPage page;
	            //get html
				try 
				{
					//page = webClient.getPage("http://"+wa[1]);
					page = webClient.getPage("http://facebook.com");
				
					final String pageAsXml = page.asXml();
					final String pageAsText = page.asText();
					
					
					inline2external(pageAsXml, page_title);
					BufferedWriter out = new BufferedWriter(new FileWriter(file));  
			    	out.write(pageAsXml);
			    	out.close();
			    	
					WebResponse response = page.getWebResponse();
					
					// extract inline script
					System.out.println("~~~~~~~~~ " + wa[1]);
					
					extractScript(page);
					
				} catch (FailingHttpStatusCodeException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (MalformedURLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}finally
				{		  
					webClient.closeAllWindows();
				}
	        }		      		
		}
	}
	  //static String webadd;
	public static void main(String[] args) throws FileNotFoundException, IOException 
	{
		GetURLContent getURL = new GetURLContent();
		getURL.getHTML();
	}
}