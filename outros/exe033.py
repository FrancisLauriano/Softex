# Desenvolva um programa que leia o comprimento de três
# retas e diga ao usuário se elas podem ou não formar um triângulo.

def formaTriangulo():
    a = int(input('Infome o tamanho do primeiro comprimento: '))
    b = int(input('Infome o tamanho do segundo comprimento: '))
    c = int(input('Infome o tamanho do terceiro comprimento: '))

    if a - b < c and a + b > c:
        mensagem = 'Com os comprimentos {}, {} e {} é possível formar um triângulo'.format(a, b, c)
    elif a - c < b and a + c > b:
        mensagem = 'Com os comprimentos {}, {} e {} é possível formar um triângulo'.format(a, b, c)
    elif b - c < a and  b + c > a:
        mensagem = 'Com os comprimentos {}, {} e {} é possível formar um triângulo'.format(a, b, c)
    else:
        mensagem = 'Com os comprimentos {}, {} e {} não é possível formar um triângulo'.format(a, b, c)

    return mensagem

texto = formaTriangulo()
print(texto)
        

