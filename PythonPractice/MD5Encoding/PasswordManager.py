import os 
import rsa
import RSADecoding
import RSAEncoding
import Config
import getpass

def main():
	register(Config.config['loginPasswordFile'])

	if not login(Config.config['loginPasswordFile']):
		return 

	cmd = input('1. Record new password.\n2. Show all password.\nType any key to quit.\n')
	while cmd == 1 or cmd == 2:
		if cmd == 1:
			pwdToRecord = raw_input('please enter your password:')
			createNewPwdRecord(pwdToRecord+'_cipher.txt',RSAEncoding.rsaEncoding(pwdToRecord))
			# print 'Encrypt your password to ',pwdToRecord,'_cipher.txt'
		elif cmd == 2:
			showAllFile(Config.config['pwdManageDir'])
		cmd = input('1. Record new password.\n2. Show all password.\nType any key to quit.\n')


def showAllFile(pwdManageDir):
	#pwdManageDir = 'myPassword'	
	if  not os.path.exists(pwdManageDir):	# Check if directory is existed 
		os.mkdir(pwdManageDir)
	files = os.listdir(pwdManageDir)
	for f in files:
		with open(pwdManageDir+'/'+f,'r') as _file:
			print RSADecoding.rsaDecoding(_file.read())


def checkFileExist(fileName):
	return os.path.exists(fileName)
	# with open(fileName,'w') as f:
	# 	f.seek(0) 	# move to the beginning of this file
	# 	first_char = f.read(1)	#read the first word
	# 	if not first_char:
	# 		print 'file',fileName,'exist'
	# 		return false
	# 	else:
	# 		f.seek(0)
	# 		return true

def createNewPwdRecord(fileName,encryptedPwd):
	if not checkFileExist('myPassword'):
		os.mkdir('myPassword')
	_tempFileName = fileName.split(':')
	with open('myPassword/'+_tempFileName[0],'w') as f:
		f.write(encryptedPwd)

def register(loginPasswordFile):
	if not os.path.exists(loginPasswordFile):
		f = open(loginPasswordFile,'w')
		f.close()
	with open(loginPasswordFile,'r+w') as f:
		if f.read() == '':
			print f,f.read()
			newPwd = getpass.getpass()
			f.write(md5Encoding(newPwd))
			f.close()


def login(loginPasswordFile):
	with open(loginPasswordFile,'r') as f:
		pwd = getpass.getpass()
		counter = 0
		# print f.read() == pwd,f.read(),pwd
		registedPwd = f.read()
		while md5Encoding(pwd) != registedPwd:
			pwd = ''
			print 'password is wrong,please enter again:'
			pwd = getpass.getpass()
			counter+=1 
			if counter >= 3:
				print 'End'
				return False
		return True

def md5Encoding(value):
	import base64
	try:
		import hashlib
		hash = hashlib.md5()
	except ImportError:
	    # for Python << 2.5
	    import md5
	    hash = md5.new()
	hash.update(value)
	return hash.digest()

main()
