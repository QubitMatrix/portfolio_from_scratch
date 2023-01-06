import React from "react";
export default function DSBlog (){
    return(<div id="ds-blog-mid">
        <h3><u>Data Structures for Beginners(A complete guide):</u></h3>
        <p>Most of us see a question and just start typing out some logic that comes to our mind. Most of the time we don’t give importance to which approach is to be followed. While a program can have many possible answers, there is only a few which is optimal. As good programmers our aim is to find the most optimal solution.</p>
        <p>So how can we do this?<br/><img id="dsa-img" src={require("../assets/dsa.png")} alt="dsa"/><br/>The answer is <b>Data Structures and Algorithms</b>!!!.<br/>With these two ‘weapons’ we can solve any complex question and also make our approach optimal.</p><br/>
        <p>In this post we are going to cover the basics about Data Structures.</p>
        <h4 style={{marginBottom:"-10px"}}>Topics covered:</h4>
        <ol>
            <li>Importance of Data Structures</li>
            <li>Sample statistic to show need for Data Structures</li>
            <li>List of Data Structures</li>
        </ol>
        <p><em>Each Data structure is a vast topic by itself, due to this reason many topics are only discussed on a very basic level and there is a lot more to learn about them. I have tried to keep it as short as possible, still it can be a 10 to 15 minutes read.<br/> So grab your cup of coffee and dive in!!!</em></p><br/>
        <p>Let's start off with the main question.<br/><em>Why should I use Data Structure in my logic?</em></p>
        <p>Imagine you have a whole rack of books scattered everywhere without any specific order or arrangement. You would take a really long time to search for one book right.<br/>But what if you took a little extra time to arrange it in the right position? Wouldn’t it save you a lot of time in all future searches for a book.<br/>That’s what data structures are about. It makes the data more organised for the purpose and makes future operations on it easier and faster, provided the data is inserted in the right order (i.e., using the appropriate data structure)<br/>It is very important to choose the right structure based on the need and application. We should consider which operation is done the most and choose a structure which can optimise that operation.</p><br/>
        <u><h3>Big O Notation</h3></u><p>To compare the efficiency of different data structures we use something known as the Big O Notation.<br/><br/>Big O Notation is widely used to measure the efficiency of an algorithm in terms of its time and space requirements.<br/><u>Time complexity</u> is the computation time taken for the code to execute as the input size increases.<br/><u>Space complexity</u> is the amount of memory used for its execution.</p>
        <ul>
            <li>Linear complexity O(n): means that for an input of size 'n' we have the code performing 'n' instructions.</li>
            <li>Quadratic complexity O(n<sup>2</sup>): means that for an input of size 'n' the code performs 'n<sup>2</sup>' instructions.</li>
            <li>Constant complexity O(1): means that for an input of size 'n' the code performs only a constant number of instructions irrespective of the size of input. This gets very efficient when the size is very large.</li>
        </ul>        
        <br/><br/><br/>
        Now that we are clear with complexities, let's go ahead with some statistics.<br/><br/>
        <p>Let's take a simple example:<br/>-&gt;You want to search for some of your favourite books in your large collection of books(example of insert once, search multiple times)<br/><br/>
        Approach 1:<br/><u>Using <b>List</b> structure</u><br/>You had arranged all yours books in a random order in your racks. Now you will have to search the collection linearly to find the book and worst still if you had forgotten that your friend had borrowed that book, you will end up searching the entire collection for no reason.<br/>Time complexity:O(n)[linear complexity]<br/><br/>
        Approach 2:<br/><u>Using <b>Binary Search Tree</b>(or binary search on sorted list)</u><br/>Say you had arranged the books in alphabetical order. You can check the middle book first, if it comes after the name of your favourite book then search the first half, or else search the second half(known as divide and conquer method)<br/>You have now reduced the time complexity to O(log<sub>2</sub>n)[logarithmic time complexity]<br/>Now if you are familiar with time complexities you may question how is this efficient if it is not sorted cause major sorting techniques take a time of O(n log<sub>2</sub>n) and then an additional O(log<sub>2</sub>n) for binary search while searching linearly would take only O(n)<br/>Here is where the matter of which operation is performed the most comes into play, in this example sorting would be done once but we are doing search operation multiple times, in the long run Binary search proves to be more efficient than linear search.<br/><br/>
        Approach 3:(the most efficient for unique data)<br/><u>Using <b>Hashmap or Hashset</b></u><br/>Now hashmaps is a data structure that can be used for unique data or data with unique keys.<br/>If your library racks had a number for each position and you were able to find a unique value(called hash value) for each book using some function(called hash function) then you can place it in that position. Now when you want to search for your book all you have to do is find the hash value from the hash function and go to that position and take your book.<br/>We have now found a way to search the book in constant time independant of your total number of books.<br/>This is called constant time complexity, denoted by O(1).</p>Hashset is similar to hashmap except the fact that hashmap always points to an unique key(has key-value pairs) but hashset can have same hashcode(stored as object, no key-value pairs) for two elements leading to collisions.This is why hashmaps are faster than hashsets.<br/><br/><br/>
        <span>Time taken for 10<sup>6</sup> search queries in a dataset of 10<sup>4</sup> unique elements</span><br/><a href="https://user-images.githubusercontent.com/60323193/211067255-d7d674c2-eb23-4135-a91e-94726ff53bb2.jpg"><img src="https://user-images.githubusercontent.com/60323193/211066418-e0dd0d10-ecea-4ed1-9b06-8537eb5e4496.jpg"/></a><br/>Click on output to view code<br/><br/><br/>
        <p>Now that we have understood the need for Data Structures let's dive into the various types of data structures!</p>
        <p style={{marginTop:"35px"}}>Data Structures are mainly of two types:
        <dl>
            <dt>
                -&gt;Linear(Eg: list,stack,queue,hashmap(dictionary in python),hashset(sets in python))
                <dd>
                    In this type, the elements may be placed randomly or sequentially in the computer memory based on the implementation, but the access is always sequential.
                </dd>
            </dt>
            <dt>
                -&gt;Non-Linear(Eg: Tree,Graph)
                <dd>
                    In this type, the elements may be placed randomly or sequentially in the computer memory and even the access can be sequential or random.
                </dd>
            </dt>
        </dl>
        </p>
        <img id="classification-img" src={require("../assets/classification.png")} alt="classification"/>
        <p>For all the data structures the main operations that we can perform are: create,insert,delete,search,destroy</p><br/>
        <p><b>1.<u>List</u></b><br/>A basic structure where all the elements are always accessed sequentially.<br/><br/>
        <u>Uses:</u><br/>This structure can be used when we want to access all the elements in a sequential manner with lesser memory consumption.<br/>It is mostly used to implement other data structures and it offers very limited use by itself.<br/><br/>A list can be implemented by two ways:<br/>1.<u>Array:</u> the storage is sequential in the memory.<br/>2.<u>Linked list:</u> the storage in memory can be random, this can be achieved by linking the current to next with a pointer(this leads to additional memory requirement).Linked list are of various types like singly linked list, doubly linked list, circular singly linked list, etc, which are not going to be discussed in detail in this post.<br/><br/>Time complexity of every structure depends on the implementation of the structure.<br/><br/>
        Time complexity of lists:<br/></p>
        <table id="complexity-table-list">
            <thead>
                <tr>
                    <th>Operation</th>
                    <th>Array implementation</th>
                    <th>Linked list implementation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Search</td>
                    <td>O(n)</td>
                    <td>O(n)</td>
                </tr>
                <tr>
                    <td>Insert</td>
                    <td>O(1)</td>
                    <td>O(n)</td>
                </tr>
                <tr>
                    <td>Delete</td>
                    <td>O(1)</td>
                    <td>O(n)</td>
                </tr>
            </tbody>
        </table><br/>
        <p>Space complexity: O(n)<br/>more precisely O(2n) for linked list representation but it is approximated to O(n)</p><br/>
        <p><b>2.<u>Stack</u></b><br/>A list with a top pointer makes a stack. This list can be accessed or modified only through the top pointer and the other elements remain inaccessible. This structure is used when we want to do a last in first out operation (LIFO).<br/>Push means inserting into a stack and pop means removing it from the stack. Peek means just viewing the top of the stack</p><img id="stack-img" src={require("../assets/stack.png")} alt="stack"/><br/>
        <u>Uses:</u>
        <ol>
            <li>Recursive stack maintained by the program between calls.</li>
            <li>Infix to prefix or postfix conversion.</li>
            <li>Undo and redo in editors.</li>
        </ol>
        <a href="#complexity-table-list">Time</a> and space complexity depends on the implementation of stack(using array or linked list)<br/><br/><br/>
        <p><b>3.<u>Queue</u></b><br/>A list with a front and rear pointer makes a queue structure. This structure can only be modified via its front or rear pointers while the others remain inaccessible. Various implementations of queues are possible like simple queue, circular queue, double ended queue, priority queue, etc. (The only difference is how the front and rear pointers are defined and what they perform).<br/>Enqueue means pushing into the queue from the rear end and dequeue means taking an element out from the front end.<br/>A queue is a first in first out(FIFO) structure</p><img id="queue-img" src={require("../assets/queue.png")} alt="queue"/><br/>
        <u>Uses:</u>
        <ol>
            <li>CPU scheduling</li>
            <li>Binary tree traversal(iterative version)</li>
            <li>Breadth-First-Search(BFS)</li>
        </ol>   
        <span>Just like stacks the queue structure can also be implemented using lists and have their corresponding <a href="#complexity-table-list">complexities</a>.</span><br/><br/><br/>
        <p><b>4.<u>Tree</u></b><br/>This is one of the most important structure and has wide range of uses, even the files stored in your system uses a tree structure.<br/>Trees have various sub-structures which can be used as per the need.<br/>E.g.: AVL, splay tree, RBT (red black tree), BST (binary search tree), Trie tree, heaps, B Trees.<br/><em>Due to the vastness of the topic, these won’t be discussed in detail.</em></p>
        <u>Uses:</u>
        <ul>
            <li><u>AVL:</u><br/>A balanced tree which can be used for cases with few insertions and large search queries.<br/>O(log<sub>2</sub>n)-for search</li><br/> 
            <li><u>Splay Tree:</u><br/>A structure which can be used to move the most recent search to the top thus making it easier to search it in the future.<br/>E.g.:In hospital records: a record which is searched once will be needed more frequently than those of discharged patients so moving this to a more easier to search position reduces the time for search queries.</li><br/>
            <li><u>BST:</u><br/>A binary tree in which the root's value is greater than each left subtree and lesser than each right subtree makes a binary search tree.Inserting is time comsuming but search complexity is logarithmic so it is used for scenarios with few insertions and multiple searches.</li><img id="bt-bst-img" src={require("../assets/bt-bst.jpg")} alt="bt-vs-bst"/><br/><br/>
            <li><u>Trie Tree:</u><br/>Trie tree (also known as prefix tree or digital tree) is a type of <a href="https://en.wikipedia.org/wiki/M-ary_tree">k-ary</a> search tree which can be used for searching keys.<br/>Using BST to search for a word of length M in a set of N keys then time time complexity would be O(M*log N)[for a well balanced BST], but using Trie we can bring it down to O(M). But at what cost do we get this benefit? The space complexity of a Trie. While most structures have linear or logarithmic space, trie trees have quadratic space complexity because of all the pointers it holds for each key.<br/>It can be used for autocorrect features, dictionaries and substring matching.</li><br/><img src={require("../assets/trie.png")} id="trie-img" alt="trie"/><br/><br/><br/>
            <li><u>Heaps:</u><br/>A tree should have two properties to be called a heap.<br/>1.Structural property- the tree should be a complete binary tree.<br/>2.Value property(parental dominance)- all the parent nodes should have a value greater than the child nodes(if maxheap) or all the parent nodes should have value lesser than the child nodes(if minheap).<br/>It is a tree structure which can be used for sorting (heap sort) and priority implementation (priority queues).</li><br/>
            <li><u>B Trees:</u><br/>It is a balanced tree which makes the execution speed to retrieve information from the disc faster by increasing the number of children.<br/><em>A balanced binary tree reduces the time complexity of search to O(log<sub>2</sub>n), similarly a balanced tree with 'm' child nodes can do the search in O(log<sub>m</sub>n). This forms the basis of B Trees. </em></li><br/><img src={require("../assets/b-tree.png")} id="btree-img" alt="B Tree"/><br/><br/>
        </ul><br/>
        <p><b>5.<u>Hashmap</u></b><br/>A hashmap is created by calculating a hash value for each element and using it to place it in the hashmap. When searching for an element, the hash value can be calculated and searched in constant time.<br/><br/>This structure can be used to get the fastest search result cause it can search in constant time (lots of collisions can make it O(n) which is very unlikely).<br/>Now what are these collisions?<br/>Collision occurs when two or more elements have the same hash value. Collision handling is done by linear probing, quadratic probing, double hashing, separate chaining or rehashing.<br/>Rehashing is done when the space in the map is not enough. To maintain an optimal hashmap the load factor(load factor = number of elements/total size of hashmap) is set to 0.75 which ensures minimum collisions.</p><br/><br/>
        <p><b>6.<u>Graph</u></b><br/>A graph is a set of nodes(vertices) connected by edges. A graph can be cyclic or acyclic, directed or undirected, weighted or unweighted, connected or not connected.<br/><br/>
        A graph can be implemented using any of the following:
        <ol>
            <li>Adjacency Matrix</li>
            <li>Adjacency List</li>
            <li>Adjacency Multilist</li>
        </ol>
        A graph can be traversed by either using a depth first search(DFS) or breadth first search(BFS).<br/>
        DFS:<br/>Check connectivity of graph, check if path exists between two vertices, check number of components in the graph.<br/>
        BFS:<br/>Helps to get the shortest path between two vertices and can do everything that a DFS traversal can do.<br/><br/>
        <u>Uses:</u><br/>Graphs can be used in computer networks, social analysis and shortest path problems.</p><img src={require("../assets/graph.png")} alt="graph" id="graph-img"/><br/><br/><br/><br/>
        Data structures by itself is a very extensive topic and as stated earlier I have tried my best to keep it short and to the point but data structures have a lot more to offer and everything mentioned above is just a bird's view of the vast world of data structures.<br/>
        Kudos to those who had the patience to have read the entire post. I would like to conclude with a famous quote by Linus Torvalds.<br/><em>"Bad programmers worry about the code. Good programmers worry about data structures and their relationships."</em>
    <br/><br/><br/><br/><br/><br/>
    </div>);
    
}