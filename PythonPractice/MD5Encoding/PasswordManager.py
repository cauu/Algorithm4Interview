import os 
import rsa
import RSADecoding
import RSAEncoding

def main():
	m_userPwdFile = 'password.txt'
	if not checkFileExist(m_userPwdFile):
		tempF = open(m_userPwdFile,'w')
		tempF.close()

	with open(m_userPwdFile,'r') as f:
		pwd = raw_input('Pls enter your password:')
		counter = 0
		# print f.read() == pwd,f.read(),pwd
		while pwd != f.read():
			pwd = input('password is wrong, please enter again:') 
			counter+=1 
			if counter >= 3:
				print 'End'
				return 

	cmd = input('1. Record new password.\n2. Show all password.\nType any key to quit.\n')
	while cmd == 1 or cmd == 2:
		if cmd == 1:
			pwdToRecord = raw_input('please enter your password:')
			createNewPwdRecord(pwdToRecord+'_cipher.txt',RSAEncoding.rsaEncoding(pwdToRecord))
			# print 'Encrypt your password to ',pwdToRecord,'_cipher.txt'
		elif cmd == 2:
			showAllFile('myPassword')
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
	# with open(fileName) as f:
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

main()
