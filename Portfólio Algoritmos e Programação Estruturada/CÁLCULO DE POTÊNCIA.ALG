Algoritmo "Cálculo de Potência"
// Disciplina   : [Algoritmos e Programação Estruturada]
// Professor   : Vanessa Matias Leite
// Descrição   : Calcula e apresenta o resultado de uma potência
// Autor(a)    : Fernando Henrique Panini
// Data atual  : 19/10/2022
Var
base,expoente,cont,resultado: inteiro


Inicio
      escreva("Digite o valor da base: ")
      leia(base)
      escreva("Digite o valor do expoente: ")
      leia(expoente)
      resultado<-1
      enquanto (cont<expoente) faca
               resultado<-resultado*base
               cont<-cont+1
      fimenquanto
      escreval(base," ^",expoente," =",resultado)

Fimalgoritmo