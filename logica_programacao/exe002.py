def mediaNota():
    nomeAluno = input("Digite o nome do(a) aluno(a): ")
    nota1 = float(input("Digite a primeira nota do aluno(a): "))
    nota2 = float(input("Digite a segunda nota do aluno(a): "))

    media = (nota1 + nota2) / 2

    return nomeAluno, nota1, nota2, media


#chamar a função e printar na tela
aluno, N1, N2, mediaFinal = mediaNota()
print(f'O(a) aluno(a) {aluno} obteve as seguintes notas e média: \nNota 1: {N1}\nNota2: {N2}\nMédia: {mediaFinal}')
print('O resultado: {}'.format(mediaFinal))   