public class Pessoa {
    public String nome;
    public int idade;

    void apresentar(String nacionalidade) {
        System.out.println("Olá, meu nome é: " + nome + " e eu sou " + nacionalidade);
    }

    double calcularDesconto(double valor, double percentual) {
        return valor - (valor * percentual/100);
    }

    void alterar(int[] array) {
        array[0] = 99;
    }
}
