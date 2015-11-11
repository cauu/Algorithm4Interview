/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function() {
    this.val = "";
    this.children = new Array(26);
    this.freq = 0;
};

var Trie = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
    if(!word) {
        return;
    }
    var ch, node;
    var parent = this.root;
    
    for(var i = 0;i<word.length;i++) {
        ch = word[i];

        var index = ch.charCodeAt() - 'a'.charCodeAt();
        if(!parent.children[index]) {
            parent.children[index] = new TrieNode();
            parent.children[index].val = ch;
        }

        node = parent.children[index];
        node.freq++;
       
        parent = node;
    }
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
    if(!word || !this.root) {
        return false;
    }

    var ch, node, parent = this.root;
    
    for(var i = 0; i<word.length;i++) {
        ch = word[i];
        node = parent.children[ch.charCodeAt() - 'a'.charCodeAt()];
        if(!node || node.freq === 0) {
            return false;
        }
        else {
            parent = node;
        }
    }
    
    var sum = 0;
    for(var i=0;i < parent.children.length;i++) {
        if(!!parent.children[i]) {
            sum+=parent.children[i].freq;
        }
    }
    if(sum === parent.freq) {
        return false;
    }
    
    return true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
    if(!prefix || !this.root) {
        return false;
    }
    var ch, node, parent = this.root;
    
    for(var i = 0; i<prefix.length;i++) {
        ch = prefix[i];
        node = parent.children[ch.charCodeAt() - 'a'.charCodeAt()];
        if(!node || node.freq === 0) {
            return false;
        }
        else {
            parent = node;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */   

