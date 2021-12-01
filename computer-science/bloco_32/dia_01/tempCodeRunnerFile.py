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