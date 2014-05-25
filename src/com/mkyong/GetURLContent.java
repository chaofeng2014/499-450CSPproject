import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.MalformedURLException;

import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.FailingHttpStatusCodeException;
import com.gargoylesoftware.htmlunit.Page;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.WebResponse;
import com.gargoylesoftware.htmlunit.html.HtmlPage;

public class main {
	  //static String webadd;
	  public static void main(String[] args) throws FileNotFoundException, IOException {
		  PrintWriter writer = new PrintWriter("the-file-name.txt", "UTF-8");
		  //read the http address from the txt file
		  try(BufferedReader br = new BufferedReader(new FileReader("top10000.txt"))) {
		        StringBuilder sb = new StringBuilder();
		        String line = br.readLine();
		        //while (line != null) {
		        for(int i=0;i<5;i++){
		            sb.append(line);
		            sb.append(System.lineSeparator());
		            System.out.println("reading: "+line);
		            String[] wa=line.split(",");
		            System.out.println("http://"+wa[1]);	
		            //java.util.logging.Logger.getLogger("com.gargoylesoftware").setLevel(java.util.logging.Level.OFF);
		            
		            final WebClient webClient = new WebClient(BrowserVersion.CHROME);		    
		            //WebClient webClient = new WebClient();
		            webClient.getOptions().setJavaScriptEnabled(false);
		            Page page;
		            //get html
		            String content="";
					try {
						page = webClient.getPage("http://"+wa[1]);
						WebResponse response = page.getWebResponse();
						content = response.getContentAsString();
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
					}finally{		  
					System.out.println(content);
					writer.println(wa[0]+","+wa[1]);
					writer.println(content);
		            line = br.readLine();	
					}
		        }		      		
	  }
		  writer.close();
	 }
}