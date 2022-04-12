class IBinaryTree {



    constructor(size) {
        /**
         * 总节点数量
         */
        this.size = size
    }

     /**
      * 是否空树
      */
     isEmpty()

     /**
      * 是否包含元素
      *
      * @return true 如果包含，false 不包含
      */
     contains(item){}

     /**
      * 清空整棵树
      */
     clear(){}

     /**
      * 获取树的高度
      */
     height(){}

     /**
      * 是否满二叉树（国内叫真二叉树）
      */
     isFull(){}

     /**
      * 是否完美二叉树（国内叫满二叉树）
      */
     isPerfect(){}

     /**
      * 是否完全二叉树
      */
     isComplete(){}

     /**
     * 前序遍历
     */
    preorderTraversal(visitor){}

    /**
     * 中序遍历
     */
    inorderTraversal(visitor){}

    /**
     * 后序遍历
     */
    postorderTraversal(visitor){}

    /**
     * 层序遍历
     */
    levelOrderTraversal(visitor){}
}
