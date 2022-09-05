# An English text needs to be encrypted using the following encryption scheme.First, the spaces are removed from the text. Let **L** be the length of this text.Then, characters are written into a grid, whose rows and columns have the following constraints:

## **[✓L]≤row≤column≤[✓L],where [x] is floor function and [x] is ceil function**

## *Example*

> s= if man was meant to stay on the ground god would have  given us roots


After removing spaces, the string is  **54** characters long. **square root of 54**  is between **8** and **7** , so it is written in the form of a grid with 7 rows and 8 columns.

```javascript
ifmanwas  
meanttos          
tayonthe  
groundgo  
dwouldha  
vegivenu  
sroots
```

- Ensure that **rows*columns ≥ L**

- If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e. .
The encoded message is obtained by displaying the characters of each column, with a space between column texts. The encoded message for the grid above is:

> imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

Create a function to encode a message.

## **Function Description**

Complete the encryption function in the editor below.

encryption has the following parameter(s):

- string s: a string to encrypt

### **Returns**

- string: the encrypted string

### **Input Format**

One line of text, the string **s**

### **Constraints**

**1≤length of s≤81**
s contains characters in the range ascii[a-z] and space, ascii(32).

### **Sample Input**

```javascript 
haveaniceday
```

### **Sample Output 0**

```javascript
hae and via ecy
```

### **Explanation 0**


**L=12**, **square root of 12**  is between  **3** and **4**  .
Rewritten with **3** rows and **4**  columns:

```javascript
have
anic
eday
```

### **Sample Input 1**

```javascript
feedthedog   
``` 

### **Sample Output 1**

```javascript

fto ehg ee dd
```

### **Explanation 1**


**L=10**, **square root of 10**  is between  **3** and **4**  .
Rewritten with **3** rows and **4**  columns:

```javascript
feed
thed
og
```

### **Sample Input 2**

```javascript

chillout
```

### **Sample Output 2**

```javascript

clu hlt io
```

### **Explanation 2**

**L=8**, **square root of 8**  is between  **2** and **3**  .
Rewritten with **3** rows and **3**  columns(**2*3=6<8 so we have to use 3X3**)

```javascript
chi
llo
ut
```