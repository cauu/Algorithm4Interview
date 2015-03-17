#encoding:utf-8
#该脚本可以获取linux命令行参数
#变量sys.argv保存了命令行中参数的数组
# import sys
# print 'script name:',sys.argv[0]
# for i in sys.argv:
# 	print 'can shu are :',i

#下面的代码可以获取命令行中的命令选项及其
#参数
import sys,getopt
opts, args = getopt.getopt(sys.argv[1:], 'hi:o:')#冒号表示选项后带参数，及命令-i和-o之后有参数
input_file = ''
output_file = ''

for op,value in opts:
	if op == '-i' :
		print 'op is i value is ',value
		input_file = value
	elif op == '-o' :
		print 'op is i value is ',value
	elif op == '-h' :
		print 'op is i value is ',value

