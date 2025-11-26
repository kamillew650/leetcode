
export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


export function createTreeNode(values: (number | null)[]): TreeNode {
    const fistValue = values.shift() ?? undefined;
    let head = new TreeNode(fistValue)
    let nodes: (TreeNode | null)[] = [head];
    while(values.length > 0) {
        let nextNodes = []
        for(const node of nodes) {
            if(node === null) {
                nextNodes.push(null, null);
                continue;
            }

            const leftValue = values.shift();
            if(leftValue != null) {
                node.left = new TreeNode(leftValue);
            }

            nextNodes.push(node.left);

            const rightValue = values.shift();
             if(rightValue != null) {
                node.right = new TreeNode(rightValue);
            }

            nextNodes.push(node.left);
        }
        nodes = nextNodes;
    }

    return head;
}