import java.util.Scanner;

public class Exercicio01 {
    void exercicios() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Qual exercício deseja ver? ");
        int exercicio = scanner.nextInt();

        switch(exercicio) {
            case 1:
                System.out.print("Digite um número: ");
                int numeroFixo = scanner.nextInt();
                if (numeroFixo % 2 == 0) {
                    System.out.println("O número " + numeroFixo + " é par");
                } else {
                    System.out.println("O número " + numeroFixo + " é ímpar");
                }
                break;
            case 2:
                int dia = 1;
                switch(dia) {
                    case 1:
                        System.out.println("Domingo");
                        break;
                    case 2:
                        System.out.println("Segunda-feira");
                        break;
                    case 3:
                        System.out.println("Terça-feira");
                        break;
                    case 4:
                        System.out.println("Quarta-feira");
                        break;
                    case 5:
                        System.out.println("Quinta-feira");
                        break;
                    case 6:
                        System.out.println("Sexta-feira");
                        break;
                    case 7:
                        System.out.println("Sábado");
                        break;
                    default:
                        break;
                }
                break;
            case 3:
                for(int i = 0; i <= 100; i++) {
                    if(i % 5 == 0 && i % 3 == 0) {
                        System.out.println(i);
                    }
                }
                break;
            case 4:
                int fatorial = 1;
                int somaFatorial = 1;

                while(fatorial <= 10) {
                    somaFatorial *= fatorial;
                    fatorial++;
                }
                System.out.println("Soma total: " + somaFatorial);
                break;
            case 5:
                int[] numeros = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
                for(int i = 0; i <= numeros.length; i++) {
                    if ((i + 1) % 2 == 0) {
                        System.out.println(numeros[i]);
                    }
                }
                break;
            case 6:
                int[] numerosSomaArray = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
                int somaArray = 0;
                for(int numero : numerosSomaArray) {
                    somaArray += numero;
                }
                System.out.println("Soma de todos os elementos: " + somaArray);
                System.out.println("Média da soma: " + (somaArray / numerosSomaArray.length));
                break;
            case 7:
                int[] arrayNumeros = {3, 6, 10, 20, 2};
                int maiorNumero = arrayNumeros[0];
                int menorNumero = arrayNumeros[0];
                int indexMaiorNumero = 0;
                int indexMenorNumero = 0;

                for(int i = 0; i < arrayNumeros.length; i++) {
                    if(arrayNumeros[i] < menorNumero) {
                        menorNumero = arrayNumeros[i];
                        indexMenorNumero = i;
                    } else if(arrayNumeros[i] > maiorNumero) {
                        maiorNumero = arrayNumeros[i];
                        indexMaiorNumero = i;
                    }
                }

                System.out.println("Maior número: " + maiorNumero + " | Índice: " + indexMaiorNumero);
                System.out.println("Menor número: " + menorNumero + " | Índice: " + indexMenorNumero);
                break;
            case 8:
                break;
            case 9:
                break;
            default:
                System.out.println("Exercício inválido");
                break;

        }
    }

}
