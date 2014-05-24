package com.mkyong;
 
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
 
public class GetURLContent {
	public static void main(String[] args) throws FileNotFoundException, IOException {
		//save to this filename
		String fileName = "/Users/hz/Documents/workspace/450InternetSecurity/content/";
		File file = new File(fileName);
		if (!file.exists()) {
			file.createNewFile();
		}
		
		PrintWriter writer = new PrintWriter("results", "UTF-8");
		//read the http address from the txt file
		  try(BufferedReader br2 = new BufferedReader(new FileReader("top10000.txt"))) {
		        StringBuilder sb = new StringBuilder();
		        String line = br2.readLine();
		        //while (line != null) {
		        for(int i=0;i<10;i++){
		            sb.append(line);
		            sb.append(System.lineSeparator());
		            System.out.println("reading: "+line);
		            String[] wa=line.split(",");
		            System.out.println("http://"+wa[1]);	
		            URL url;
		 
		    		try {
		    			// get URL content
		    			url = new URL("http://"+wa[1]);
		    			URLConnection conn = url.openConnection();
		     
		    			// open the stream and put it into BufferedReader
		    			BufferedReader br = new BufferedReader(
		                                   new InputStreamReader(conn.getInputStream()));
		     
		    			String inputLine;
		    			
		    			//use FileWriter to write file
		    			FileWriter fw = new FileWriter(file.getAbsoluteFile());
		    			BufferedWriter bw = new BufferedWriter(fw);
		    			writer.println(wa[0]+","+wa[1]);
		    			while ((inputLine = br.readLine()) != null) {
		    				bw.write(inputLine);
							writer.println(inputLine);
		    				System.out.println(inputLine);
		    			}		    
		    			bw.close();
		    			br.close();
		    			System.out.println("Done");
		    			
		
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		   line = br2.readLine();
	}
	}
		  writer.close();
}
}