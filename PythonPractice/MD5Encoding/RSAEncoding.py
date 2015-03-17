import rsa
import sys
import hashlib
import GetKeys
def rsaEncoding(plainText):
	hash = hashlib.md5()
	hash.update('Martins')
	value = hash.hexdigest()
	
	print('Hashing ',plainText,' to ',value,'\n')
	
	#key = rsa.PrivateKey.load_pkcs1(GetKeys.getPrivateKey())
	#print 'key is ',key,'\n'
	key = rsa.PrivateKey(GetKeys.getPrivateKey(), '123')
	result = rsa.encrypt(value,key)

	print('After rsa encrypting, result is ',result)

rsaEncoding(sys.argv[1])

