#当m+n为奇数时，排序好的数组中间的数就是median，
#当m+n为偶数时，median为中间两个数的平均值
#需要注意的是该方法的时间复杂度为O(m+n)
class Solution:
    def findMedianSortedArrays(self, A, B):
        newArray=[]
        i=0
        j=0
        while i!=len(A) and j!=len(B):
            if A[i]<=B[j]:
                newArray.append(A[i])
                i+=1
            else:
                newArray.append(B[j])
                j+=1
        print('newArray is ',newArray)
        if i==len(A):
            newArray.extend(B[j:len(B)])
        else:
            newArray.extend(A[i:len(A)])
        print(newArray)
        if len(newArray)%2==0:
            return (newArray[len(newArray)//2-1]+newArray[len(newArray)//2])/float(2)
        else:
            return newArray[len(newArray)//2]
    def binarySearch():
        

        
sol=Solution()
print(sol.findMedianSortedArrays([0],[2,3]))
