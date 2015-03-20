import rsa
import sys
import hashlib
import GetKeys
def rsaDecoding():
	# hash = hashlib.md5()
	# hash.update('Martins')
	# value = hash.hexdigest()
	
	# print('Decoding ',encrption,' to ',value,'\n')
	# (bob_pub, bob_priv) = rsa.newkeys(512)
	#key = rsa.PrivateKey.load_pkcs1(GetKeys.getPrivateKey())
	#print 'key is ',key,'\n'
	f = open('cypher.txt','r')
	cypher = f.read()
	print(cypher)
	key = rsa.PrivateKey.load_pkcs1(GetKeys.getPrivateKey())
	# print('public key is ',bob_pub)
	print('public key is ',key)
	result = rsa.decrypt(cypher,key)

	print('After rsa decrypting, result is ',result)

rsaDecoding()

