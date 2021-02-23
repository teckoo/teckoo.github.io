# Fast & slow pointers

The Fast & Slow pointer approach, also known as the Hare & Tortoise algorithm, is a pointer algorithm that uses two pointers which move through the array (or sequence/LinkedList) at different speeds. This approach is quite useful when dealing with cyclic LinkedLists or arrays.

By moving at different speeds (say, in a cyclic LinkedList), the algorithm proves that the two pointers are bound to meet. The fast pointer should catch the slow pointer once both the pointers are in a cyclic loop.

# Problems

1. Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

    All other distances between the fast and slow pointers will reduce to one of these two possibilities. Let’s analyze these scenarios, considering the fast pointer always moves first:

    a. If the fast pointer is one step behind the slow pointer: The fast pointer moves two steps and the slow pointer moves one step, and they both meet.

    b. If the fast pointer is two steps behind the slow pointer: The fast pointer moves two steps and the slow pointer moves one step. After the moves, the fast pointer will be one step behind the slow pointer, which reduces this scenario to the first scenario. This means that the two pointers will meet in the next iteration.

1. follow-up problem: Given the head of a LinkedList with a cycle, find the length of the cycle.

1. Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

1. Happy Nubmer: Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

1. Given the head of a Singly LinkedList, write a method to return **the middle node** of the LinkedList.

1. Palindrome LinkedList: Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

1. Rearrange a LinkedList: Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

1. Cycle in a Circular Array (hard): We are given an array containing positive and negative numbers. Suppose the array contains a number ‘M’ at a particular index. Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices. You should assume that the array is circular which means two things:

    If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement.
    If, while moving backward, we reach the beginning of the array, we will jump to the last element to continue the movement.
    Write a method to determine if the array has a cycle. The cycle should have more than one element and should follow one direction which means the cycle should not contain both forward and backward movements.
