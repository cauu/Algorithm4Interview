def testGen():
    a=100
    yield a
    a*=10
    yield a
    a*=100
    yield a
    a=1
    yield a
    yield 0.1
for i in testGen():
    print(i)

def gen():
    for i in range(5):
        yield i+1
for i in gen():
    print(i)
    
def listComprehension():
    L=[]
    for x in range(10):
        L.append(x**2)
    return L
print((listComprehension()))

def testLambda():
    func=lambda x,y:x+y
    print(func(1,2))

#testLambda()
    
def simpleAdd(a,b):
    return a+b

def testFuncBeCalled(f,a,b):
    print(f(a,b))
testFuncBeCalled(simpleAdd,3,5)
