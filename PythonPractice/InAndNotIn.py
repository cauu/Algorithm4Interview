"""This is a standard format of doc string comment.

Followed by some details of this class or function

Arg:
    arg0:
    arg1:
    
Returns:
    description of the return variable.

Raises:
    IOError:An error occurred accessing the bigtable.
"""


#test in
a='test'
b='aaatestbbb'
print(a in b)
#test is
a='test'
b='test'
print(a is b)
#test << and >>
a=1
b=a<<2
print('b is ',b)
#test ^
a=5
b=4
a=a^b
b=a^b
a=a^b
print('a is',a,'b is',b)
#test ~
a=4
print(~a)
#test if elif else
if a>0:
    print('morning\n')
else:
    print('evening\n')
#test while and else
count=0
while count<10:
    print('count is ',count)
    count+=1
else:
    print('while is end')
#test for else
for i in range(1,5):
    print(i)
    if 3==i:
        break
else:   #this is a comment
    print('loop is over')   #dont aligne comments
