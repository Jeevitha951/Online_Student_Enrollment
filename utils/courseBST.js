class TreeNode {
    constructor(courseId, courseData) {
        this.courseId = courseId;
        this.courseData = courseData;
        this.left = null;
        this.right = null;
    }
}

class CourseBST {
    constructor() {
        this.root = null;
    }

    insert(courseId, courseData) {
        const newNode = new TreeNode(courseId, courseData);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.courseData.name.toLowerCase() < node.courseData.name.toLowerCase()) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    search(query) {
        return this._searchNode(this.root, query.toLowerCase());
    }

    _searchNode(node, query) {
        if (!node) return [];
        const results = [];
        if (node.courseData.name.toLowerCase().includes(query)) {
            results.push({ id: node.courseId, ...node.courseData });
        }
        return [...results, ...this._searchNode(node.left, query), ...this._searchNode(node.right, query)];
    }
}

module.exports = new CourseBST();
