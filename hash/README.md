###0-Bulls and Cows
  
***
####问题：
  
给定一个四位secret，如"1234"和它对应的"guess"，如"3564"，分别统计<font style="color:red">位置和大小都相同(bulls)</font>的数字和<font style="color:red">位置不同，大小相同(cows)</font>的数字个数（不可重复计算）。
  
```
Secret number:  "1807"
Friend's guess: "7810"
Hint: 1 bull and 3 cows. 
```
to  
   
```
Secret number:  "1123"
Friend's guess: "0111"
Hint: 1 bulls 1 cows.
```
  
####解决思路
  
***
我采用了两遍遍历的方式，首先将bulls选出来，并从secret和guess中删掉，再在剩下的secret中寻找和guess中数字相等的数字，就是cows。（Hint：可以用hashmap来储存secret中各个数字对应的位置。）

