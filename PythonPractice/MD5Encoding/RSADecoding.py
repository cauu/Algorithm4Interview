import rsa
import sys
import hashlib
import GetKeys
def rsaDecoding():
	"""
	TODO: Using md5 generate corresponding md5_cipher.txt file 
	for each cipher text.
	For example, I want to encoding my phone no. 5262120
	just type 
	>> python RSAEncoding phone 5262120
	Then it will creates a file called phone(md5).txt
	If I want find out my encrpted phone no. , I need to type 
	>> python rsaDecoding phone
	It will go through all files and find out phone(md5).txt and 
	decode with my rsa private key.
	"""
	f = open('cypher.txt','r')
	cypher = f.read()
	print(cypher)
	key = rsa.PrivateKey.load_pkcs1(GetKeys.getPrivateKey())
	
	print('public key is ',key)
	result = rsa.decrypt(cypher,key)

	print('After rsa decrypting, result is ',result)

rsaDecoding()

