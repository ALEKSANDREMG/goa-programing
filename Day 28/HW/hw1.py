exam = int(input("enter your exam score :"))
if  90<= exam <100:
    print("A")
elif  80<= exam <89:
    print("B")
elif 70<= exam <79:
    print("C")
elif  60<= exam <69:
    print("D")
elif 0<= exam <60:
    print("F")
else:
    print("exam score was between 0--100")