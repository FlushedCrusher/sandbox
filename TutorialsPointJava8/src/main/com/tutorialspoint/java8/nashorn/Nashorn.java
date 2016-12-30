package main.com.tutorialspoint.java8.nashorn;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class Nashorn {

   public static void main(String[] args) {
      
      ScriptEngineManager scriptEnginManager = new ScriptEngineManager();
      ScriptEngine js = scriptEnginManager.getEngineByName("nashorn");
      
      String name = "Daniel";
      Integer result = null;
      
      try {
         js.eval("print('" + name + "')");
         result = (Integer) js.eval("10 + 2");
      } catch(ScriptException e) {
         System.out.println("Error executing script: " + e.getMessage());
      }
      
      System.out.println(result.toString());
      
   }

}
