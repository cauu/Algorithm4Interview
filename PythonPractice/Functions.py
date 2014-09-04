def sayHello(): #This is a fucntion without parameters
    """Test doc string.
    """
    print('Hello World!')

#sayHello() #call the function

def printMax(a,b): #This is a function with parameters
    if a>b:
        print(a,'is max')
    elif b>a:
        print(b,'is max')
    else:
        print('a and b are equal')

#printMax(1,5)

def someFunction():
    pass
#print(someFunction())

def testEnumerate():
    s='abcdef'
    for (index,number) in enumerate(s): #Index and number只是两个变量名
                           	       #其中index代表索引，number代表值
        print(index)
        print(number)
#testEnumerate()

def testDicEnumerate():
    s={1:'a',2:'b'}
    e=enumerate(s)
    print(list(e))
    print(type(s))
   # for (key,value) in enumerate(s):
  #      print(key)
#testDicEnumerate()

def testZip():
    str1=[1,2,3]
    str2=[4,5,6]
    zipped=zip(str1,str2)
    print(list(zipped))
    na=zip(*zipped)
    print(list(na)   
#testZip()
