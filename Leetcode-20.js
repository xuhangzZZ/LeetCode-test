//20.有效的括号 栈
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。


//解法一 栈循环
var isValid = function(s) {
    if(s.length % 2 !== 0) return false
    let stack = [];
        for(let i = 0; i < s.length; i++){
            // let c = s[i];
            if(s[i] == '(' || s[i] == '{' || s[i] == '['){
                stack.push(s[i])
            }
            else{
                if((s[i] == ')' && stack[stack.length-1] == '(') ||
                   (s[i] == '}' && stack[stack.length-1] == '{') ||
                   (s[i] == ']' && stack[stack.length-1] == '[')
                ){
                    stack.pop();
                }
                else return false;
            } 
        }
        if(stack.length === 0){
            return true
        }
        else return false;
}

//解法二 栈+字典
var isValid = function(s) {
    if(s.length % 2) return false;
    let stack = [];
    let map = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            stack.push(s[i]);
        }
        else{
            let last = stack[stack.length-1]; 
            if(map.get(last) === s[i]){
                stack.pop();
            }
            else return false;
        }
    }
    return !stack.length;
};



//解法二 栈循环forEach 错了
// var isValid = function(s) {
//     if(s.length % 2 !== 0) return false;
//     let stack = [];
//     let arr = s.split('');
//     if(!arr.length) return true;
//     arr.forEach(element => {
//         switch(element){
//             case '(':
//             case '{':
//             case '[':
//                 stack.push(element);
//                 break;
//             case ')':
//                 if(stack.pop() !== '(') return false;
//                 break;
//             case '}':
//                 if(stack.pop() !== '{') return false;
//                 break;
//             case ']':
//                 if(stack.pop() !== '[') return false;
//                 break;
//         }
//     });
//     return !stack.length;
// }