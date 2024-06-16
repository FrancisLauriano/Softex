# Escreva um algoritmo que solicite ao usuário dois números e
# exiba a soma deles.

def soma():
    numero1 = input('Digite o primeiro número: ')
    numero2 = input('Digite o segundo número: ')

    soma = numero1 + numero2

    return soma

resultado = soma()
print(f'A soma é: {resultado}')