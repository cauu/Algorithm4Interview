import sys

print('The command line arguments are :')
for i in sys.argv:
    print(i)
else:
    print('\n')
print('The python path is ',sys.path,'\n')
