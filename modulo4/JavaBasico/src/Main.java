import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Exercicio01 exec = new Exercicio01();

        //exec.exercícios();

        Pessoa pessoa = new Pessoa();
        pessoa.nome = "Nicolau";
        pessoa.idade = 26;

        pessoa.apresentar("brasileiro");



        /*
        * int mes = 1;

        String estacao = switch (mes) {
            case 12, 1, 2 -> "Verão";
            case 3, 4, 5 -> "Outono";
            case 6, 7, 8 -> "Inverno";
            case 9, 10, 11 -> "Primavera";
            default -> "mês Inválido";
        };

        System.out.println(estacao);

        int tentativa = 0;

        do {
            tentativa++;
            System.out.println("Tentativa: " + tentativa);
        } while (tentativa < 3);

        for (int i = 0; i <= 10; i++) {
            System.out.println(i);
        }

        int[] numeros = new int[]{10, 20, 30};

        String[] cores = {"Azul", "Branco", "Preto"};

        for (String cor : cores) {
            System.out.println(cor);
        }*/



    }
    /*
    Tipos Primitivos -> São 8, byte, short, int, float...
    Tipos por Referência -> Guardam o endereço de um objeto. String, Arrays...

    byte - 8 bits - -128 a 127
    short - 16 bits
    int - 32 bits
    long - 64 bits
    float - 32 bits ~7bits casa de precisão.
    double - 64 bits - ~15 casas de precisão
    char - 16 bits
    boolean - true or false
    * */

}
