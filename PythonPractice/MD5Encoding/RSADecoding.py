import rsa
import sys
import hashlib
import GetKeys
def rsaDecoding(encrption):
	# hash = hashlib.md5()
	# hash.update('Martins')
	# value = hash.hexdigest()
	
	# print('Decoding ',encrption,' to ',value,'\n')
	# (bob_pub, bob_priv) = rsa.newkeys(512)
	#key = rsa.PrivateKey.load_pkcs1(GetKeys.getPrivateKey())
	#print 'key is ',key,'\n'
	key = rsa.PublicKeys.load_pkcs1(GetKeys.getPublickey())
	# print('public key is ',bob_pub)
	print('public key is ',key)
	result = rsa.encrypt(encrption,key)

	print('After rsa encrypting, result is ',result)

rsaDecoding(sys.argv[1])

