import sys
def printFile(filename):
	f=open(filename,'r')
	for line in f:
		print line
	f.close()
printFile(sys.argv[1])