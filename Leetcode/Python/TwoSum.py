class Solution:
 # @return a tuple, (index1, index2)
 #该方法可行，但效率很低,其时间复杂度为O(n**2)
 #遍历数组时需考虑到数字可为负或者0
 #第二种方法只需要遍历一遍数组，通过dictionary的特性快速
 #查找需要的值
    def twoSumSol1(self,num, target):
        for i in range(len(num)):
    #        if num[i]>target:
    #           continue
            for j in range(i,len(num)):
    #           if num[j]>target:
    #                continue
                if num[i]+num[j]==target:
                    return (i+1,j+1)


    def twoSumSol2(self,num,target):
        result=[]
        scanedDict={}
        for i in range(len(num)):
            if target-num[i] in scanedDict:
                result.append(scanedDict.get(target-num[i]))
                result.append(i+1)
                return result
            scanedDict[num[i]]=i+1

sol=Solution()
print(sol.twoSumSol2([0,4,3,0], 0))
                
print(sol.twoSumSol1([-3,4,3,90],0))
