package main.com.tutorialspoint.java8;

import java.util.ArrayList;
import java.util.List;

public class MethodReferences {

   public static void main(String[] args) {
      List<String> names = new ArrayList<String>();
      
      names.add("Daniel");
      names.add("Ken");
      names.add("Paul");
      names.add("Joe");
      names.add("Scrappy");
      names.add("Sophie");
      
      names.forEach(System.out::println);
   }

}
