def getPrivateKey():
	f=open('keys/rsa_private_key.pem','r')
	return f.read()

def getPublicKey():
	f=open('keys/rsa_public_key.pem','r')
	return f.read()