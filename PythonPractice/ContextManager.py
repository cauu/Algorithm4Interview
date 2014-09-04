def WithoutContextManager():
    f = open("new.txt","w")
    print(f.closed)
    f.write("Hello World!")
    f.close()
    print(f.closed)

def WithContextManager():
    with open("new.txt","w") as f: #with+function+as+returned name
        print(f.closed)
        f.write("Hello World!")
    print(f.closed)

WithoutContextManager()

WithContextManager()

def getNum():
    return open("test.txt","w")


def getNumWithContextManager():
    with getNum() as a: #函数getNum的返回类型a必须实现特殊方法__exit__
               	       	   #才能使用上下文管理器
                       	   	#如果a是int类型则运行时会报错
        print(a.closed)
    print(a.closed)
getNumWithContextManager()

class VOW(object):
    def __init__(self, text):
        self.text = text
    def __enter__(self):
        self.text = "I say: " + self.text    # add prefix
        return self                          # note: return an object
    def __exit__(self,exc_type,exc_value,traceback):
        self.text = self.text + "!"          # add suffix


with VOW("I'm fine") as myvow:
    print(myvow.text)

print(myvow.text)

