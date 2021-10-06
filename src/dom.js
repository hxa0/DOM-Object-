window.dom = {
    create(string) {
        const container = document.createElement('template');
        container.innerHTML = string.trim();
        // console.log(container);
        return container.content.firstChild;
    },
    // 添加一个弟弟
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    //添加一个哥哥
    before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    //添加一个儿子
    append(parent, node) {
        parent.appendChild(node);
    },
    //添加一个父级元素
    wrap(node, parent) {
        dom.before(node, parent);
        dom.append(parent, parent);
    },
    //删除节点
    remove(node) {
        node.parentNode.removeChild(node);
        return node;
    },
    //删除子元素
    empty(node) {

        const array = [];
        let x = node.firstChild;
        while (x) {
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return array;
    },
    //增加标题
    attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }

    },
    //增加文本
    text(node, string) { //适配
        if ('innerText' in node) {
            node.innerText = string
        } else {
            node.textContent = string
        }
    },
    //改写html内容
    html(node, string) {
        if (arguments.length == 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    //添加样式
    style(node, name, value) {
        if (arguments.length === 3) { //三个参数，写入样式，// dom.style(div,'color','red')
            node.style[name] = value //node.style.name是个数组，所以加【】，
        } else if (arguments.length == 2) { //如果两个参数，还要判断第二参数的类型
            if (typeof name === 'string') { //如果name的数据类型是字符串//  dom.style(div,'color')//想获取style里面的color
                return node.style[name] //返回name的样式，这里的name就是color
            } else if (name instanceof Object) { // 如果是对象 形式//dom.style(div,{color:'red'})
                const object = name //此时的name栏就是一个对象，把对象赋值给变量object,如果用name会很奇怪
                for (let key in object) { //遍历数组
                    node.style[key] = object[key] // node里面的key与参数对象的key一一对应
                }
            }
        }
    },
    //class属性相关
    class: {
        add(node, className) { //增加class名字
            node.classList.add(className)
        },
        remove(node, className) { //删除class名字
            node.classList.remove(className)
        },
        has(node, className) { //判断没有class名
            return node.classList.contains(className) //返回，否则调用时为undefined
        }
    },
    //增加、删除事件监听
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    //获取标签
    find(selector, scope) { //提供选择器，返回对应的数组  
        return (scope || document).querySelectorAll(selector) // 如果一个参数就在document里面寻找，如果两个，就在第二个参数里面寻找
    },
    //找到父级元素
    parent(node) {
        return node.parentNode
    },
    //找到子级元素
    children(node) {
        return node.children
    },
    //找到同级元素
    siblings(node) {
        return Array.from(node.parentNode.children).filter(n => n !== node)
            // 得到的是伪数组，有个数组转换过程，排除自己，只要是和传入的node相同，就排除
    },
    //找到后面的元素
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    //找到前面的元素
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    //遍历所有的节点
    each(nodeList, fn) {
        for (let i = 0; i <= nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    //获取元素排行牢记
    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for (i = 0; i <= list.length; i++) {
            if (list[i] == node) {
                break
            }
        }
        return i
    }

};