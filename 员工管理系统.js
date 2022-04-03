Depart_list = ["销售部","研发部","人事部","财务部"]
// 获取表单标签和表单中的各个标签
var add_form = document.querySelector("#f1");
var sf_name = document.querySelector(".add_staff .sf_name");
var age = document.querySelector(".add_staff .age");
var depart = document.querySelector(".add_staff #depart");
// 获取表格标签
var table = document.querySelector(".staff_mes table");
add_form.onsubmit = function () {
    // 判断输入是否为空
    if (sf_name.value.length === 0 || age.value.length === 0){
        alert("输入不能为空")
        return false
    }
    // 判断年龄是否为数字
    if (isNaN(age.value)){
        alert("年龄只能为数字")
        return false
    }

    // 创建一个tr标签并添加到员工表格
    var tr = document.createElement("tr");
    table.appendChild(tr);

    // 创建一个td标签，用姓名赋值并添加到刚创建的tr标签里
    var td_name = document.createElement("td");
    td_name.innerHTML = sf_name.value;
    tr.appendChild(td_name);

    // 创建一个td标签，用年龄赋值并添加到刚创建的tr标签里
    var td_age = document.createElement("td");
    td_age.innerHTML = age.value;
    tr.appendChild(td_age);

    // 创建一个td标签，用部门赋值并添加到刚创建的tr标签里
    var td_depart = document.createElement("td");
    td_depart.innerHTML = depart.value;
    tr.appendChild(td_depart);

    // 创建一个td标签和一个button按钮
    var td_del = document.createElement("td");
    var del_button = document.createElement("button")
    del_button.className = "del_button"
    del_button.innerHTML = "删除"
    // 将button按钮添加到tr标签中
    td_del.appendChild(del_button)
    // 把tr标签添加到表格中
    tr.appendChild(td_del)

    // 创建一个td标签和一个button按钮
    var td_com = document.createElement("td");
    var com_button = document.createElement("button")
    com_button.className = "com_button"
    com_button.innerHTML = "编辑"
    // 将button按钮添加到tr标签中
    td_com.appendChild(com_button)
    // 把tr标签添加到表格中
    tr.appendChild(td_com)

    // 将表单内输入框中的内容清空
    sf_name.value = ""
    age.value = ""
    // 给两个按钮添加事件
    del()
    com()
    return false;
}
function del() {
    // 获取到所有的删除按钮
    var del_button = document.querySelectorAll(".staff_mes table .del_button")

    for (var index = 0;index < del_button.length;index++){
        // 给按钮添加事件
        del_button[index].onclick = function () {
            // 将按钮所在的那行数据从表格中删除
            this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement)
    }}

}


function com() {
    // 获取到所有的编辑按钮
    var com_button = document.querySelectorAll(".staff_mes table .com_button")
    for (var index = 0;index < com_button.length;index++){
        // 给按钮添加事件
        com_button[index].onclick = function () {
            // 获取到按钮所在行的各个标签
            var name = this.parentElement.parentElement.firstElementChild;
            var age = name.nextElementSibling;
            var depart = age.nextElementSibling;
            var com_button = this.parentElement;
            // 获取到标签中的文本内容
            var t_name = name.innerText;
            var t_age = age.innerText;
            var t_depart = depart.innerText;

            // 创建一个td标签和一个input输入框
            var n_name = document.createElement("td")
            var name_text = document.createElement("input")
            name_text.type = "text"
            // 将原本的文本内容添加到输入框中
            name_text.value = t_name
            // 将input标签添加到td标签中
            n_name.appendChild(name_text)
            // 用td标签替换原来的td标签
            name.parentElement.replaceChild(n_name,name)

            // 创建一个td标签和一个input输入框
            var n_age = document.createElement("td")
            var age_text = document.createElement("input")
            age_text.type = "text"
            // 将原本的文本内容添加到输入框中
            age_text.value = t_age
            // 将input标签添加到td标签中
            n_age.appendChild(age_text)
            // 用td标签替换原来的td标签
            age.parentElement.replaceChild(n_age,age)

            // 创建一个td标签和一个input输入框
            var n_depart = document.createElement("td")
            var depart_text = document.createElement("input")
            depart_text.type = "text"
            // 将原本的文本内容添加到输入框中
            depart_text.value = t_depart
            // 将input标签添加到td标签中
            n_depart.appendChild(depart_text)
            // 用td标签替换原来的td标签
            depart.parentElement.replaceChild(n_depart,depart)

            // 创建一个td标签和一个button按钮
            var n_button = document.createElement("td")
            var button = document.createElement("button")
            // 设置按钮
            button.innerText = "确认"
            button.className = "change_button"
            // 将按钮添加到td标签中
            n_button.appendChild(button)
            // 用td标签替换原来的td标签
            com_button.parentElement.replaceChild(n_button,com_button)
            // 给新创建的确认按钮添加事件
            change()
        }}

}

function change() {
    // 获取所有的确认标签
    var change_button = document.querySelectorAll(".staff_mes table .change_button")
    for (var index = 0;index < change_button.length;index++){
        // 给按钮添加事件
        change_button[index].onclick = function (){
            // 获取按钮所在行的标签
            var name = this.parentElement.parentElement.firstElementChild;
            var age = name.nextElementSibling;
            var depart = age.nextElementSibling;
            var change_button = this.parentElement;
            // 获取标签输入框中的文本
            var t_name = name.firstElementChild.value;
            var t_age = age.firstElementChild.value;
            var t_depart = depart.firstElementChild.value;

            // 判断输入框内是否为空
            if (t_name.length === 0 || t_age.length === 0 || t_depart.length === 0){
                alert("输入框不能为空")
                return false
            }
            // 判断年龄是否为数字
            if (isNaN(t_age)){
                alert("年龄只能为数字")
                return false
            }
            // 判断输入的部门是否存在
            var flag = true;
            for (var i = 0;i < Depart_list.length;i++){
                if (Depart_list[i] === t_depart){
                    flag = false;
                }
            }
            if (flag){
                alert("部门不存在，或输入不完整");
                return false;
            }

            // 创建td标签并将name输入框中的文本赋值给td
            var n_name = document.createElement("td");
            n_name.innerText = t_name;
            // 用td标签替换原来的td标签
            name.parentElement.replaceChild(n_name,name)

            // 创建td标签并将age输入框中的文本赋值给td
            var n_age = document.createElement("td");
            n_age.innerText = t_age;
            // 用td标签替换原来的td标签
            age.parentElement.replaceChild(n_age,age)

            // 创建td标签并将depart输入框中的文本赋值给td
            var n_depart = document.createElement("td");
            n_depart.innerText = t_depart;
            // 用td标签替换原来的td标签
            depart.parentElement.replaceChild(n_depart,depart)

            // 创建一个td标签和一个button按钮
            var n_button = document.createElement("td")
            var button = document.createElement("button")
            // 设置按钮
            button.innerText = "编辑"
            button.className = "com_button"
            // 将按钮添加到td标签中
            n_button.appendChild(button)
            // 用td标签替换原来的td标签
            change_button.parentElement.replaceChild(n_button,change_button)
            // 给新创建的编辑按钮添加事件
            com()

        }}

}
// 给初始化的一行数据中的两个按钮添加事件
del()
com()