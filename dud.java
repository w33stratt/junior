import java.util.Scanner;
   
class Deret {
  public static void main(String args[]){
            
    Scanner input = new Scanner(System.in);
       
    System.out.println("##  Program Java Membuat Deret Angka  ##");
    System.out.println("========================================");
    System.out.println();
      
    int jumlah_deret,i;
     
    System.out.print("Jumlah deret yang diinginkan: ");
    jumlah_deret = input.nextInt();
    System.out.println();
  
    for (i=1; i<=jumlah_deret; i++) {
      System.out.print(i*i + " ");
    }
     
    System.out.println();
  }
}