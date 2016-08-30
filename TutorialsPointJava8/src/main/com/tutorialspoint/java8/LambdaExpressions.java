package main.com.tutorialspoint.java8;

public class LambdaExpressions {
 final static String salutation = "Hello! ";
   
   public static void main(String[] args) {
      
      LambdaExpressions tester = new LambdaExpressions();
      
      MathOperation additon = (a, b) -> a + b;
      MathOperation subtraction = (a, b) -> a - b;
      MathOperation multiplication = (a, b) -> a * b;
      MathOperation division = (a, b) -> a / b;
      MathOperation mod = (a, b) -> a % b;
      
      printNumber(tester.operate(10, 5, additon));
      printNumber(tester.operate(10, 5, subtraction));
      printNumber(tester.operate(10, 5, multiplication));
      printNumber(tester.operate(10, 5, division));
      printNumber(tester.operate(10, 5, mod));
      
      GreetingService greetService1 = message -> 
         System.out.println("Hello " + message);
      GreetingService greetService2 = message -> {
         System.out.println("Hello " + message);
      };
      GreetingService greetService3 = message ->
         System.out.println(salutation + message);
      
      greetService1.sayMessage("Daniel");
      greetService2.sayMessage("Montanez");
      greetService3.sayMessage("Daniel");
      
   }

   interface MathOperation {
      int operation(int a, int b);
   }
   
   interface GreetingService {
      void sayMessage(String message);
   }
   
   private int operate(int a, int b, MathOperation mathOperation) {
      return mathOperation.operation(a, b);
   }
   
   private static void printNumber(int x) {
      System.out.println(x);
   }
}
