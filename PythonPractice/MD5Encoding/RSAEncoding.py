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
	key = rsa.PublicKey.load_pkcs1(GetKeys.getPublicKey())

	result = rsa.encrypt(plainText,key)

	return result



# hash = hashlib.md5()
# hash.update(plainText)
# value = hash.hexdigest()
# result = rsaEncoding(sys.argv[1])
# print('After rsa decrpting, result is ',result)
# f = open( 'cypher.txt','w')
# f.write(result)