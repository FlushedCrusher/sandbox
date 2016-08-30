package main.com.tutorialspoint.java8;

import java.time.DayOfWeek;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.Month;
import java.time.Period;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalAdjusters;
import java.util.Date;

public class DateTime {

   public static void main(String[] args) {
      DateTime dateTime = new DateTime();
//      dateTime.testLocalDateTime();
//      dateTime.testZonedDateTime();
//      dateTime.testChronoUnits();
//      dateTime.testPeriod();   
//      dateTime.testDuration();
//      dateTime.testAdjusters();
//      dateTime.testBackwardCompatability();
//      
//      dateTime.testUnzoneConversion();
      dateTime.testLocalTimeProjection();
   }
   
   public void testLocalDateTime() {
      
      // Get the current date and time
      LocalDateTime currentTime = LocalDateTime.now();
      print("Current DateTime: " + currentTime);
      
      LocalDate date1 = currentTime.toLocalDate();
      print("date1: " + date1);
      
      Month month = currentTime.getMonth();
      int day = currentTime.getDayOfMonth();
      int seconds = currentTime.getSecond();
      print("Month: " + month + ", Day: " + day + ", Seconds: " + seconds);
      
      LocalDateTime date2 = currentTime.withDayOfMonth(10).withYear(2012);
      print("date2: " + date2);
      
      // 12 December 2014
      LocalDate date3 = LocalDate.of(2014,  Month.DECEMBER, 12);
      print ("date3: " + date3);
      
      // 22 hours 15 minutes
      LocalTime date4 = LocalTime.of(22, 15);
      print("date4: " + date4);
      
      // Parse a String
      LocalTime date5 = LocalTime.parse("20:15:30");
      print("date5: " + date5);
      
   }
   
   public void testZonedDateTime() {
      
      // Get the current date and time
      ZonedDateTime date6 = ZonedDateTime.parse("2007-12-03T10:15:30+05:30[Asia/Karachi]");
      print("date6: " + date6);
      
      ZoneId id = ZoneId.of("Europe/Paris");
      print("ZoneId: " + id);
      
      ZoneId currentZone = ZoneId.systemDefault();
      print("CurrentZone: " + currentZone);
      
   }
   
   public void testChronoUnits() {
      
      // Get the current date
      LocalDate today = LocalDate.now();
      print("Current date: " + today);
      
      // Add 1 week to current date
      LocalDate nextWeek = today.plus(1, ChronoUnit.WEEKS);
      print("Next Week: " + nextWeek);
      
      // Add 1 month
      LocalDate nextMonth = today.plus(1, ChronoUnit.MONTHS);
      print("Next Month: " + nextMonth);
      
      // Add 1 year to current date
      LocalDate nextYear = today.plus(1, ChronoUnit.YEARS);
      print("Next Year: " + nextYear);
      
      // Add 10 years to current date
      LocalDate nextDecade = today.plus(1, ChronoUnit.DECADES);
      print("Next Decade: " + nextDecade);
      
   }
   
   public void testPeriod() {
      
      // Get the current date
      LocalDate date1 = LocalDate.now();
      print("Current Date: " + date1);
      
      // Add 1 month to current date
      LocalDate date2 = date1.plus(1, ChronoUnit.MONTHS);
      print("Next Month: " + date2);
      
      Period period = Period.between(date2, date1);
      print("Period: " + period);
      
   }
   
   public void testDuration() {
      
      LocalTime time1 = LocalTime.now();
      Duration twoHours = Duration.ofHours(2);
      
      LocalTime time2 = time1.plus(twoHours);
      Duration duration = Duration.between(time1,  time2);
      
      print("Duration: " + duration);
      
   }
   
   public void testAdjusters() {
      
      // Get the current date
      LocalDate today = LocalDate.now();
      print("Current Date: " + today);
      
      // Get next Teusday
      LocalDate nextTeusday = today.with(TemporalAdjusters.next(DayOfWeek.TUESDAY));
      print("Next Teusday on: " + nextTeusday);
      
      // Get the second Saturday of Next Month
      LocalDate firstInMonth = LocalDate.of(today.getYear(), today.getMonth(), 1);
      LocalDate nextMonth = firstInMonth.plus(1, ChronoUnit.MONTHS);
      LocalDate secondSaturday = nextMonth            
            .with(TemporalAdjusters.nextOrSame(DayOfWeek.SATURDAY))
            .with(TemporalAdjusters.next(DayOfWeek.SATURDAY));
      print("Second Saturday of Next Month: " + secondSaturday);
      
   }
   
   public void testBackwardCompatability(){
      
      //Get the current date
      Date currentDate = new Date();
      System.out.println("Current date: " + currentDate);
      
      //Get the instant of current date in terms of milliseconds
      Instant now = currentDate.toInstant();
      ZoneId currentZone = ZoneId.systemDefault();
      
      LocalDateTime localDateTime = LocalDateTime.ofInstant(now, currentZone);
      System.out.println("Local date: " + localDateTime);
      
      ZonedDateTime zonedDateTime = ZonedDateTime.ofInstant(now, currentZone);
      System.out.println("Zoned date: " + zonedDateTime);
      
      ZonedDateTime zuluTime = ZonedDateTime.ofInstant(now, ZoneId.of("UTC"));
      System.out.println("Zulu date: " + zuluTime);
   }
   
   public void testUnzoneConversion() {
      print("**********************************************");
      
      Long oldLong = new Long("1480492800000");
      LocalDateTime date7 = Instant.ofEpochMilli(oldLong).atZone(ZoneId.systemDefault()).toLocalDateTime();
      print("oldLong: " + oldLong);
      print("localDateTimeFromOldLong: " + date7);
      
      ZonedDateTime date8 = ZonedDateTime.of(date7, ZoneId.of("UTC"));
      print("ZonedDateTime from LocalDateTime Old: " + date8);
      
      Long newLong = new Long(date8.toEpochSecond() * 1000);
      print("newLong: " + newLong);
      
      print("**********************************************");
      
      LocalDateTime date9 = Instant.ofEpochMilli(newLong).atZone(ZoneId.systemDefault()).toLocalDateTime();
      print("localDateTimeFromNewLong: " + date9);
      
      ZonedDateTime date10 = ZonedDateTime.of(date7, ZoneId.systemDefault());
      print("ZonedDateTime from LocalDateTime New: " + date10);
      
      print("**********************************************");
   }
   
   public void testLocalTimeProjection() {
      print("**********************************************");
      
      Long longValue = 1482869758753L;
      print("Original long: " + longValue);
      LocalDateTime date =
            LocalDateTime.ofInstant(Instant.ofEpochMilli(longValue), ZoneId.systemDefault());
      print(date.toString());
      
      ZonedDateTime zonedDate = ZonedDateTime.of(date, ZoneId.of("UTC"));
      
      Long newLong = new Long(zonedDate.toEpochSecond() * 1000);
      print("New long: " + newLong);
      LocalDateTime newDate =
            LocalDateTime.ofInstant(Instant.ofEpochMilli(newLong), ZoneId.systemDefault());
      print(newDate.toString());

      print("**********************************************");
   }
   
   public void print(String x) {
      System.out.println(x);
   }
   
}
