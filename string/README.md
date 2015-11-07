***
###0-ZigZag Conversion  

***  
给定一个string，对其做zigzag映射，并输出映射后的string。如:
  
```
convert("PAYPALISHIRING", 3)
```
to

```
P   A   H   N
A P L S I I G
Y   I   R
以字符串的形式输出，得到
PAHNAPLSIIGYIR
```
  
###解决思路
  
***
说实话，我并不太理解题目的描述，看了论坛里面的解答之后，大家可以把zigzag conversion理解成一种固定的映射关系，这样只要使用公式把字符串中的字符映射到正确的位置，就可以得到结果了。

###1-Valid Palindrome 

***  
忽略符号和字母大小写，判断一个给定的字符串是否是回文(palindrome)。  
首先解释一下什么是“回文”。如果一个string无论是正着读，还是倒着读，结果都相同，那么它就是一段回文。  
如```aaabbbaaa```就是一段回文。

  
###解决思路
  
***
从头和尾同时开始遍历一个string，若str[head]!=str[tail]那么该string就不是回文。  
  
###2-Palindrome Linked List

***  
判断一个单向链表是否是回文。

  
###解决思路
  
***
同1。  
另一种解法：使用两个指针，fast和slow，fast的移动速度是slow的两倍，因此当fast到达结尾时，slow刚好到达链表中间。此时我们将剩余的链表反转(reverse)，分别从头尾开始遍历链表，若头尾结点的值不想等，则该链表不是回文。

###3-Palindrome Number

***  
判断一个整数是否是回文。（不要使用额外空间）
这道题有几个坑需要特别注意:  
1. 负数是否是回文？（此处默认所有负数都不是回文）
2. 如果允许使用额外空间，那么将number直接转换成一个string是更加简单的思路。
3. 可以将整数反转，然而反转后的整数可能会溢出。
  
###解决思路
  
***
比较general的解决方法，首先获取整数的位数，然后从头、尾分别遍历该整数即可。