package main.com.tutorialspoint.java8.annotaions;

import java.lang.annotation.Documented;

@Documented
public @interface DeveloperInfo {
   String Author();
   String Date();
   String lastModified() default "N/A";
   String lastModifiedBy() default "N/A";
}
