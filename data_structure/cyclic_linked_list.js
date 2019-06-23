/** Function to detect a cycle in a given linked list 
 *  using Floyd's Hare and Tortoise Algorithm.
*/

function has_cycle(list) {
    var hare = list;
    var tortoise = list;

    while (hare && hare.next) {
        tortoise = tortoise.next;
        hare = hare.next.next;

        if (tortoise === hare) {
            return true;
        }
    }

    return false;
}