package main.com.tutorialspoint.java8;

import java.util.Arrays;
import java.util.IntSummaryStatistics;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import main.com.tutorialspoint.java8.annotaions.DeveloperInfo;

@DeveloperInfo(
      Author = "Daniel J. Montanez",
      Date = "11/22/2016"
)
public class Streams {

   public static void main(String[] args) {
      // Filter Streams
      List<String> strings = Arrays.asList("abc", "", "bc", "efg", "", "abcd", "jkl");
      List<String> filtered = strings.stream().filter(string -> !string.isEmpty()).collect(Collectors.toList());
      System.out.println(filtered.toString());
      // Limit & ForEach Streams
      Random random = new Random();
      random.ints().limit(5).forEach(System.out::println);
      // IntStream generate; ThreadLocalRandom; Map Stream
      List<Integer> numbers = IntStream.generate(() -> ThreadLocalRandom.current().nextInt(10)).limit(5).boxed().collect(Collectors.toList());
      System.out.println(numbers.toString());
      List<Integer> squaresList = numbers.stream().map(i -> i * i).collect(Collectors.toList());
      System.out.println(squaresList.toString());
      // Nested Loops Stream w/ IntStream
      IntStream.rangeClosed(1, 3)
      .forEach(i -> IntStream.rangeClosed(1, 3)
            .forEach(j -> IntStream.rangeClosed(1, 3)
                  .forEach(k -> System.out.println(i + " * " + j + " * " + k + " = " + i * j * k))
            )
      );
      // Another Filter Stream example
      System.out.println(
            "Empty strings in list: " + strings.stream().filter(string -> string.isEmpty()).count()
      );
      // Another limit Stream Example
      random.ints().limit(5).forEach(System.out::println);
      // Sorted Stream
      random.ints().limit(5).sorted().forEach(System.out::println);
      System.out.println(
            "Empty strings in list parallel stream: " + strings.parallelStream().filter(string -> string.isEmpty()).count()
      );
      // Parallel Processing 
      System.out.println(
            "Non-Empty strings in list parallel stream: " + strings.parallelStream().filter(string -> !string.isEmpty()).count()
      );
      // More Collectors
      String mergedString = strings.stream().filter(string -> !string.isEmpty()).collect(Collectors.joining(", "));
      System.out.println(mergedString);
      int[] a = {1, 2, 3, 4, 5};
      Function<Integer, String> intConverter = (n) -> String.valueOf(n);
      String[] b = new String[a.length];
      int i = 0;
      for(int n : a) {
         b[i++] = intConverter.apply(n);
      }
      System.out.println(Stream.of(b).collect(Collectors.joining(" ")));
      // Statistics
      IntSummaryStatistics stats = numbers.stream().mapToInt((x) -> x).summaryStatistics();
      
      System.out.println("Highest number in list : " + stats.getMax());
      System.out.println("Lowest number in list : " + stats.getMin());
      System.out.println("Sum of all numbers : " + stats.getSum());
      System.out.println("Average of all numbers : " + stats.getAverage());
   }   
}