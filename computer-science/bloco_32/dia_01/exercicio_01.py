# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def maior_numero(num_1, num_2):
    if num_1 > num_2:
        print(num_1)
    else:
        print(num_2)


maior_numero(30, 20)

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def calc_media(list):
    resultado = 0

    for valor in list:
        resultado += valor
    print(resultado / len(list))


calc_media([10, 30, 10, 10])

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1 ,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n .


def faca_quadrado(n):
    for index in range(n):
        print(n * "*")


faca_quadrado(5)


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas",
# "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .


def qual_maior_nome(list):
    nome_maior = list[0]

    for nome in list:
        if len(nome) > len(nome_maior):
            nome_maior = nome
    print(nome_maior)


qual_maior_nome(["Lara", "Pyettra"])

# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros, que custam
# R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a
# quantidade de latas de tinta a serem compradas e o preço total a partir do
# tamanho de uma parede(em m²).


def quantas_latas_e_seu_preco(tamanho_parede):
    preco_lata = 80
    litros_necessarios = tamanho_parede / 3
    numero_latas = litros_necessarios // 18

    if litros_necessarios % 18:
        numero_latas += 1
    return print(numero_latas, numero_latas * preco_lata)


quantas_latas_e_seu_preco(18)
# fiquei confusa tive que olhar gabarito depois de tentar


def tipo_de_triangulo(lado_1, lado_2, lado_3):
    triangulo = lado_1 + lado_2 > lado_3
    triangulo_equilatero = lado_1 == lado_2 == lado_3
    tringulo_isoceles = lado_1 == lado_2 or lado_2 == lado_3
    # triangulo_escaleno = lado_1 != lado_2 != lado_3

    if not triangulo:
        print("Não é trinângulo")
    elif triangulo_equilatero:
        print("equilatero")
    elif tringulo_isoceles:
        print("isóceles")
    else:
        print("escaleno")


tipo_de_triangulo(1, 1, 3)


def type_of_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3
        and side2 + side3 > side1
        and side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"
