package model;

public class Produto {
    private final String codigo;
    private String nome;
    private double preco;
    private int estoque;

    public Produto(String codigo, String nome, double preco, int estoque) {

        if(codigo == null || codigo.isBlank()) {
            throw new IllegalArgumentException("Código é obrigatório");
        }

        if(preco <= 0) {
            throw new IllegalArgumentException("Preço deve ser maior que zero");
        }

        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    public void vender(int quantidade) {

    }

}
