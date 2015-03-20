import rsa
import sys
import hashlib
import GetKeys
def rsaEncoding(plainText):
	"""
	Intruction:
		This function will read ur rsa private key from 
		./keys/rsa_private_key.pem and use this key as 
		ur private key to encoding the first argument of
		ur command.
	Example:
		By using 
		python RSADecoding text 
		u will encoding word 'text'
	"""
	hash = hashlib.md5()
	hash.update('Martins')
	value = hash.hexdigest()
	
	print('Hashing ',plainText,' to ',value,'\n')
	
	#key = rsa.PrivateKey.load_pkcs1(GetKeys.getPrivateKey())
	#print 'key is ',key,'\n'
	key = rsa.PrivateKey.load_pkcs1(GetKeys.getPrivateKey())
	# print('public key is ',bob_pub)
	print('private key is ',key)
	result = rsa.encrypt(value,key)

	print('After rsa decrpting, result is ',result)

rsaEncoding(sys.argv[1])