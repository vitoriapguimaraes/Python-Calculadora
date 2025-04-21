# Calculadora em Python

#####################################################################
# Selecione o número da operação desejada:                          #
#     1 - Soma                                                      #
#     2 - Subtração                                                 #
#     3 - Multiplicação                                             #
#     4 - Divisão                                                   #
# Digite sua opção (1, 2, 3, 4):                                    #
# Digite o primeiro número:                                         #
# Digite o segundo número:                                          #
#####################################################################

import sys
from scripts.colors import Cores

print(Cores.AMARELO)
print(f"{' Calculadora em Python ':*^40} ") 
print(f"{Cores.FIM}")

print(Cores.BRANCO)
print("\nSelecione o número da operação desejada: \n")
print(Cores.FIM)
print("1 - Soma")
print("2 - Subtração")
print("3 - Multiplicação")
print("4 - Divisão")

operacao = input("\nDigite sua opção (1/2/3/4): ")

op_possiveis = ["1", "2", "3", "4"]

if operacao not in op_possiveis:
    print("\nO campo não foi preenchido corretamente.")
    sys.exit()  # Para a execução do programa
operacao = int(operacao)

def verificar_numero(entrada):
    try:
        entrada = float(entrada)  # Tenta converter para número (aceita inteiros e decimais)
    except ValueError:
        print("\nO campo não foi preenchido corretamente.")
        sys.exit()  # Para a execução do programa

num1 = input("\nDigite o primeiro número: ")
verificar_numero(num1)
num1 = float(num1)

num2 = input("\nDigite o segundo número: ")
verificar_numero(num2)
num2 = float(num2)
		
match operacao:
    case 1:
        resultado = num1 + num2
        texto_operador = "+"
        print(f"\n{num1} {texto_operador} {num2} = {resultado}")
    case 2:
        resultado = num1 - num2
        texto_operador = "-"
        print(f"\n{num1} {texto_operador} {num2} = {resultado}")
    case 3:
        resultado = num1 * num2
        texto_operador = "*"
        print(f"\n{num1} {texto_operador} {num2} = {resultado:.3f}")
    case 4:
        try:
            resultado = num1 / num2
        except ZeroDivisionError:
            print(Cores.VERMELHO)
            print("\nNão é possível fazer essa operação.")
            print(Cores.FIM)
        else:
            texto_operador = "/"
            print(f"\n{num1} {texto_operador} {num2} = {resultado:.3f}")

print("-"*50)

import timeit
tempo_execucao = timeit.timeit('sum(range(1000))', number=10000)
print(f"Tempo de execução: {tempo_execucao:.3f} segundos")