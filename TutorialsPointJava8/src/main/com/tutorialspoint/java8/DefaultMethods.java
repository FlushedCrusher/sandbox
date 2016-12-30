package main.com.tutorialspoint.java8;

public class DefaultMethods {

   public static void main(String[] args) {
      Vehicle truck = new Truck();
      
      truck.print();
   }
   
}

interface Vehicle {
   default void print() {
      System.out.println("I am  vehicle!");
   }
   static void honk() {
      System.out.println("Beep!");
   }
}

interface FourWheeler {
   default void print() {
      System.out.println("I am  four wheeler!");
   }
   static void offRoad() {
      System.out.println("Offroading whoot!");
   }
}

class Truck implements Vehicle, FourWheeler {
   public void print() {
      Vehicle.super.print();
      Vehicle.honk();
      FourWheeler.super.print();
      FourWheeler.offRoad();
      System.out.println("I am a four wheeler truck vehicle!");
   }
}