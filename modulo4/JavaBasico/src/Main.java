import java.util.*;
import java.util.stream.IntStream;

public class Main {
    public static void main(String[] args) {

//        List<String> compras = new ArrayList<>();
//
//        compras.add("Arroz");
//        compras.add("Feijão");
//        compras.add("Macarrão");
//        System.out.println(compras.toString());
//        compras.remove("Feijão");
//        System.out.println(compras.toString());

//        Set<String> visitantes = new HashSet<>();
//
//        visitantes.add("João");
//        visitantes.add("Maria");
//        visitantes.add("José");

//        Map<String, Integer> idades = new HashMap<>();
//
//        idades.put("João", 25);
//        idades.put("Maria", 03);
//        idades.put("José", 40);
//
//        for(String nome : idades.keySet()) {
//            System.out.println(nome);
//        }
//
//        for(Integer idade : idades.values()) {
//            System.out.println(idade);
//        }
//
//        for(Map.Entry<String, Integer> par : idades.entrySet()) {
//            System.out.println(par.getKey() + par.getValue());
//        }

//        List<Integer> numeros = List.of(1,2,3,4,5);
//
//        int soma = numeros.stream().filter(n -> n % 2 == 0).mapToInt(n -> n * 2).sum();
//        System.out.println(soma);
        //Stream (Fonte) -> Filter (seleção) -> map(transforma) -> collect(encerra)
        //Lambda - Uma função curta, que ela é escrita no seu lugar de uso.

        List<String> palavras = List.of("Java", "Phyton", "C++", "JavaScript");

        palavras.stream().filter(p -> p.length() > 4).forEach(System.out::println);
        palavras.stream().map(String::toUpperCase).forEach(System.out::println);

        //Usando Streams, a partir de 'palavras' criem um outro array que armazena o tamanho de cada palavra
        List<Integer> tamanhos = palavras.stream().map(String::length).toList();
        tamanhos.forEach(System.out::println);

        //List<Integer> de 1 a 20, imprima só os múltiplos de 3
        List<Integer> a = List.of(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
        a.stream().filter(n -> n % 3 == 0).forEach(System.out::println);

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
