def f(x):
    x[0] = 100
    print(x)

a = [1,2,3]
f(a)
print(a)

def fx(x):
    x=100
    print(x)
a=10
fx(a)
print(a)

class SampleMore(object):
    def __call__(self, a):
        return a + 5

add = SampleMore()     # A function object
print(add(2))          # Call function    
li=[2,4,5]
print(list(map(add, li))) # Pass around function object
print(list(li))

print(list(map(lambda x: x+10, range(42))))
print([x+1 for x in range(42)])

global a
a=1
def testGlobal():
    a=100
    print(a)
testGlobal()
print(a)

a=5
print(a)
