def AddNumber(n):
    if 0==n:
        return 0
    return n+AddNumber(n-1)


def testList():
    list1=[1,2,5,6,7]
    print(list1.count(1))
    print(type(list1))

def testTuple():
    list1=(1,2,3)
    print(type(list1))


def testMultiParam(*name):
    print(type(name))
    print(name)

testList()


