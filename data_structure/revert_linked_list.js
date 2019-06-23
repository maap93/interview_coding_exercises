/** Recursive function that revers a linked list */

function reverse_list(list) {

    if ((list === null) || (list === undefined)) {
        return list;
    }

    if (list.next === null) {
        return list;
    }

    var tail = list.next;
    var head = reverse_list(list.next);

    tail.next = list;
    list.next = null;

    return head;
}