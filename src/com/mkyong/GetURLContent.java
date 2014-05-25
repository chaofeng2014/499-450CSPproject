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

import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.FailingHttpStatusCodeException;
import com.gargoylesoftware.htmlunit.Page;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.WebResponse;
import com.gargoylesoftware.htmlunit.html.HtmlPage;

public class GetURLContent 
{
	
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

    	for (int i = 0; i < inline_script.size(); i++)
    	{
    		System.out.println(inline_script.get(i));
    	}
	}
	
	public void getHTML() throws IOException
	{
		File file = new File("youtube.txt");
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
	            //System.out.println("http://"+wa[i]);	
	            //java.util.logging.Logger.getLogger("com.gargoylesoftware").setLevel(java.util.logging.Level.OFF);
	            
	            final WebClient webClient = new WebClient(BrowserVersion.CHROME);		    
	            //WebClient webClient = new WebClient();
	            webClient.getOptions().setJavaScriptEnabled(false);
	            HtmlPage page;
	            //get html
				try 
				{
					//page = webClient.getPage("http://"+wa[1]);
					page = webClient.getPage("http://youtube.com");
					
					final String pageAsXml = page.asXml();
					BufferedWriter out = new BufferedWriter(new FileWriter(file));  
			    	out.write(pageAsXml);
			    	out.close();
			    	
					WebResponse response = page.getWebResponse();
					
					// extract inline script
					System.out.println("~~~~~~~~~ " + wa[1]);
					extractScript(page);
					
					
					//System.out.println(content);
					//write the html code into txt file
					//writer.println(wa[0]+","+wa[1]);
					//writer.println(content);
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