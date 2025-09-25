var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productDiscount = document.getElementById('productDiscount');
var count = document.getElementById('productCount');
var total = document.getElementById('totalSum');
var submit = document.getElementById('submit');
var span = document.getElementById('span');

var box = [];

function add() {
    submit.innerHTML = 'ADD';
    count.disabled = false ;
    product = {
        name : productName.value,
        price : productPrice.value,
        discount : productDiscount.value,
        total : total.innerHTML,
    };

    if(count.value > 0){
        for(var x = 0 ; x < count.value ; x++){
            box.push(product);
        }
    }else {
        box.push(product);
    };

    display();



    productName.value = '';
    productPrice.value = '';
    productDiscount.value = '';
    count.value = '';
    total.innerHTML = '';

    document.getElementById('span').innerHTML = box.length;
}

function display() {
    var cartoona = '';
    for (var i = 0 ; i < box.length ; i++){
        cartoona += 
        `
        <tr>
            <td class="text-center">${box[i].name}</td>
            <td class="text-center">${box[i].price}</td>
            <td class="text-center">${box[i].discount}</td>
            <td class="text-center">${box[i].total}</td>
            <td class="text-center"><button class='btn btn-warning' onclick='update(${i})'>UPDATE</button></td>
            <td class="text-center"><button class='btn btn-danger' onclick='deleteOne(${i})'>DELETE</button></td>
        </tr>
        `;
    };
    document.getElementById('tBody').innerHTML = cartoona;
}

function deleteAll(){
    box.splice(0)
    display();
    document.getElementById('span').innerHTML = 0;
}

function deleteOne(i){
    box.splice(i,1);
    display();
}

function getTotal(){
    var cash = Number(productPrice.value) - Number(productDiscount.value);
    document.getElementById('totalSum').innerHTML = cash;
}

function update(i){
    submit.innerHTML = 'UPDATE';
    productName.value = box[i].name;
    productPrice.value = box[i].price;
    productDiscount.value = box[i].discount;
    count.disabled = true;
    box.splice(i,1);
}

// // const calc = (x,y,z) => x/y*z;
// // console.log(calc(6,6,6));

// // const calc = (a,b,c) => [a+b+c,-a-b-c,a*b*c];
// // console.log(calc(1,2,3)[0]);
// // console.log(calc(1,2,3)[1]);
// // console.log(calc(1,2,3)[2]);

// // const calc = (a,b,c) => {
// //     return {
// //         sum : a+b+c ,
// //         tr7 : a-b-c ,
// //         drb : a*b*c ,
// //     }
// // }
// // console.log(calc(2,2,2).sum);
// // console.log(calc(2,2,2).drb);

// localStorage.setItem('products',JSON.stringify(box));

// if (localStorage.getItem('products') != null){
//     box = JSON.parse(localStorage.getItem('products'));
//     display();
// } else {
  //     box = [];
  // }
  
  // JS PROJECT


// note
// let change = '';

// if(localStorage.getItem('notes') != null){
//     document.getElementById('h1').innerHTML = 'NOTES';
//     displayNote();
//     noteBox = JSON.parse(localStorage.getItem('notes'));
// } else {
//   noteBox = [];
// };

// //بتشتغل و بتعرضلي الفورم اللي هكتب فيه اللي انا عايزه displayNoteForm فنكشن + note لما بدوس علي 
// //اللي موجوده في الفورم بياخد المدخلات و يخزنهم في لوكال ستوردج و يعملهم دسبلاي add بعد كده لما بدوس علي 

// //note form is here

// function displayNoteForm() {
//   let noteformbox = 
//   `
//   <div class="form-floating">
//   <input type="text" class="form-control w-75 mt-2 ms-4" id="noteTitle" placeholder="Add title">
//   <label for="floatingInput" class="ms-4 ">Add title</label>
//   </div>
//   <div class="mb-2">
//   <label for="exampleFormControlTextarea1" class="form-label"></label>
//   <textarea class="form-control w-75 mt-1 ms-4" id="noteText" rows="3"></textarea>
//   </div>
//   <div class="form-floating mb-2 d-flex">
//   <input type="text" class="form-control w-50 mt-2 ms-4" id="noteDate" placeholder="Add date">
//   <label for="floatingInput" class="ms-4 mt-2">Add date</label>
//   <button class="btn btn-primary w-25 h-25 mt-4 ms-4" onclick="addNote()">ADD</button>
//   </div>
//   `;

//   document.getElementById('myForm').innerHTML = noteformbox;
// }

// //add note

// function addNote() {
//   noteInputs = {
//     noteTitle : document.getElementById('noteTitle').value,
//     noteText : document.getElementById('noteText').value,
//     noteDate : document.getElementById('noteDate').value,
//   }
//   noteBox.push(noteInputs);
  
//   localStorage.setItem('notes',JSON.stringify(noteBox));

//   document.getElementById('h5').innerHTML = 'NOTE ADDED SUCCESSFULLY';
//   h5.style.color = 'green';

//   function addsuccessfully(){
//     document.getElementById('h5').innerHTML = '';
//   }
//   document.getElementById('myForm').innerHTML = '';

//   setTimeout(addsuccessfully,2000);
//   if(change === 'note'){
//     displayNote();
//   }
// }

// // note card

// function displayNote(){
//   let noteCard = '';

//   for (let i = 0 ; i < noteBox.length ; i++){
//   noteCard += 
//   `
//   <div class="card text-center w-25 m-3">
//     <div class="card-header">${noteBox[i].noteTitle}</div>
//     <div class="card-body">
//       <p class="card-text">${noteBox[i].noteText}</p>
//       <div class="d-flex">
//         <button class="btn btn-warning ms-3" onclick="updateNote(${i})">UPDATE</button>
//         <button class="btn btn-danger ms-3" onclick='deleteNote(${i})'>DELETE</button>
//       </div>
//     </div>
//       <div class="card-footer text-body-secondary">${noteBox[i].noteDate}</div>
//   </div>
//   `;
//   }
//   document.getElementById('addDiv').innerHTML = noteCard;
//   document.getElementById('myForm').innerHTML = '';

// }

// // لما بدوس اب ديت نوت بيعرضلي الفورم متخزن فيه القيم القديمه 
// // لما بدوس علي كلمه اب ديت اللي موجوده في الفورم بياخد القيم الجديده اللي انا كتبتها و يخزمها مكان القيم القديمه في لوكال ستوردج

// function updateNote(i) {
//   document.getElementById('myForm').innerHTML = 
//   `
//   <div class="form-floating">
//   <input type="text" class="form-control w-75 mt-2 ms-4" id="noteTitle" placeholder="Add title">
//   <label for="floatingInput" class="ms-4 ">Add title</label>
//   </div>
//   <div class="mb-2">
//   <label for="exampleFormControlTextarea1" class="form-label"></label>
//   <textarea class="form-control w-75 mt-1 ms-4" id="noteText" rows="3"></textarea>
//   </div>
//   <div class="form-floating mb-2 d-flex">
//   <input type="text" class="form-control w-50 mt-2 ms-4" id="noteDate" placeholder="Add date">
//   <label for="floatingInput" class="ms-4 mt-2">Add date</label>
//   <button class="btn btn-warning w-25 h-25 mt-4 ms-4" onclick="addUpdatedCard(${i})">UPDATE</button>
//   </div>
//   `;

//   noteTitle.value = noteBox[i].noteTitle;
//   noteText.value = noteBox[i].noteText;
//   noteDate.value = noteBox[i].noteDate;
// }

// function addUpdatedCard(i){
//   noteBox[i].noteTitle = document.getElementById('noteTitle').value;
//   noteBox[i].noteText = document.getElementById('noteText').value;
//   noteBox[i].noteDate = document.getElementById('noteDate').value;

//   document.getElementById('addDiv').innerHTML =
//   `
//   <div class="card text-center w-25 m-3">
//     <div class="card-header">${noteBox[i].noteTitle}</div>
//     <div class="card-body">
//       <p class="card-text">${noteBox[i].noteText}</p>
//       <div class="d-flex">
//         <button class="btn btn-warning ms-3" onclick="updateNote(${i})">UPDATE</button>
//         <button class="btn btn-danger ms-3" onclick='deleteNote(${i})'>DELETE</button>
//       </div>
//     </div>
//       <div class="card-footer text-body-secondary">${noteBox[i].noteDate}</div>
//   </div>
//   `;
//   displayNote();
//   document.getElementById('myForm').innerHTML = '';
//   localStorage.setItem('notes',JSON.stringify(noteBox));

//   document.getElementById('h5').innerHTML = 'NOTE UPDATED SUCCSSFULLY';
//   h5.style.color = 'yellow';

//   function addsuccessfully(){
//     document.getElementById('h5').innerHTML = '';
//   }

//   setTimeout(addsuccessfully,2000);
// }

// function deleteNote(i){
//   noteBox.splice(i,1);
//   localStorage.setItem('notes',JSON.stringify(noteBox));
//   document.getElementById('h5').innerHTML = 'NOTE DELETED SUCCSSFULLY';
//   h5.style.color = 'red';
//   displayNote();
//   function addsuccessfully(){
//     document.getElementById('h5').innerHTML = '';
//   }

//   setTimeout(addsuccessfully,2000);
// }

// //page note title

// // function h1Note() {
// //   document.getElementById('h1').innerHTML = 'NOTES';
// // }


// // جزء النوت خلص






























// // tasks

// //task form

// if(localStorage.getItem('tasks') != null){
//   document.getElementById('h1').innerHTML = 'TASKS';
//   taskBox = JSON.parse(localStorage.getItem('tasks'));
//   displayTask();
// } else {
//   taskBox = [];
// }

// function displayTaskForm() {
//   let taskformbox = 
//   `
//   <div class="d-flex">
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-2" id="task1" placeholder="task 1">
//   <label for="floatingInput" class="ms-3">task 1</label>
//   </div>
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-3" id="task5" placeholder="Add title">
//   <label for="floatingInput" class="ms-4">task 5</label>
//   </div>
//   </div>
//   <div class="d-flex">
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-2" id="task2" placeholder="task 1">
//   <label for="floatingInput" class="ms-3">task 2</label>
//   </div>
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-3" id="task6" placeholder="Add title">
//   <label for="floatingInput" class="ms-4">task 6</label>
//   </div>
//   </div>
//   <div class="d-flex">
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-2" id="task3" placeholder="task 1">
//   <label for="floatingInput" class="ms-3">task 3</label>
//   </div>
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-3" id="task7" placeholder="Add title">
//   <label for="floatingInput" class="ms-4">task 7</label>
//   </div>
//   </div>
//   <div class="d-flex">
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-2" id="task4" placeholder="task 1">
//   <label for="floatingInput" class="ms-3">task 4</label>
//   </div>
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-3" id="task8" placeholder="Add title">
//   <label for="floatingInput" class="ms-4">task 8</label>
//   </div>
//   </div>
//   <div class="d-flex justify-content-end w-75 ms-5">
//   <button class="btn btn-primary w-25 h-25 mt-3" onclick="addTask()">ADD</button>
//   </div>
//   `
//   document.getElementById('myForm').innerHTML = taskformbox;
// }

// // task

// function addTask() {
//   taskInputs = {
//     task1 : document.getElementById('task1').value,
//     task2 : document.getElementById('task2').value,
//     task3 : document.getElementById('task3').value,
//     task4 : document.getElementById('task4').value,
//     task5 : document.getElementById('task5').value,
//     task6 : document.getElementById('task6').value,
//     task7 : document.getElementById('task7').value,
//     task8 : document.getElementById('task8').value,
//   }
//   taskBox.push(taskInputs);

//   localStorage.setItem('tasks',JSON.stringify(taskBox));
//   document.getElementById('myForm').innerHTML = '';


//   document.getElementById('h5').innerHTML = 'TASK ADDED SUCCESSFULLY';
//   h5.style.color = 'green';

//   function addsuccessfully(){
//     document.getElementById('h5').innerHTML = '';
//   }

//   setTimeout(addsuccessfully,2000);
//   if(change === 'task'){
//     displayTask();
//   }
// }

// function displayTask(){
//   let taskCard = '';

//   for (var x = 0 ; x < taskBox.length ; x++){
//     taskCard += 
//     `
//     <div class="card text-center w-25 h-50 m-3">
//       <div class="card-header">
//           <button class="btn btn-primary" onclick='doneTask(${x})'>DONE</button>      
//       </div>
//       <div class="card-body">
//         <div class="card-text d-flex">
//           <div class="tasks1 w-50 h-100">
//             <p class="f4tasks mb-2">1-${taskBox[x].task1}</p>
//             <p class="f4tasks mb-2">2-${taskBox[x].task2}</p>
//             <p class="f4tasks mb-2">3-${taskBox[x].task3}</p>
//             <p class="f4tasks mb-2">4-${taskBox[x].task4}</p>
//           </div>
//           <div class="tasks2 w-50 h-100">
//             <p class="mb-2">5-${taskBox[x].task5}</p>
//             <p class="mb-2">6-${taskBox[x].task6}</p>
//             <p class="mb-2">7-${taskBox[x].task7}</p>
//             <p class="mb-2">8-${taskBox[x].task8}</p>
//           </div>
//         </div>
//       </div>
//         <div class="card-footer text-body-secondary">
//           <button class="btn btn-warning" onclick='updateTaskForm(${x})'>UPDATE</button>
//           <button class="btn btn-danger ms-3" onclick='deleteTask(${x})'>DELETE</button>
//         </div>
//     </div>
//     `;
// }
//   document.getElementById('addDiv').innerHTML = taskCard;
//   document.getElementById('myForm').innerHTML = '';
// }

// function updateTaskForm(x){
//   let taskformupdate = 
//   `
//   <div class="d-flex">
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-2" id="task1" placeholder="task 1">
//   <label for="floatingInput" class="ms-3">task 1</label>
//   </div>
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-3" id="task5" placeholder="Add title">
//   <label for="floatingInput" class="ms-4">task 5</label>
//   </div>
//   </div>
//   <div class="d-flex">
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-2" id="task2" placeholder="task 1">
//   <label for="floatingInput" class="ms-3">task 2</label>
//   </div>
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-3" id="task6" placeholder="Add title">
//   <label for="floatingInput" class="ms-4">task 6</label>
//   </div>
//   </div>
//   <div class="d-flex">
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-2" id="task3" placeholder="task 1">
//   <label for="floatingInput" class="ms-3">task 3</label>
//   </div>
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-3" id="task7" placeholder="Add title">
//   <label for="floatingInput" class="ms-4">task 7</label>
//   </div>
//   </div>
//   <div class="d-flex">
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-2" id="task4" placeholder="task 1">
//   <label for="floatingInput" class="ms-3">task 4</label>
//   </div>
//   <div class="form-floating taskinputw">
//   <input type="text" class="form-control mt-1 ms-3" id="task8" placeholder="Add title">
//   <label for="floatingInput" class="ms-4">task 8</label>
//   </div>
//   </div>
//   <div class="d-flex justify-content-end w-75 ms-5">
//   <button class="btn btn-warning w-50 h-25 mt-3" onclick="updateTask(${x})">UPDATE</button>
//   </div>
//   `;
//   document.getElementById('myForm').innerHTML = taskformupdate;
//   task1.value = taskBox[x].task1;
//   task2.value = taskBox[x].task2;
//   task3.value = taskBox[x].task3;
//   task4.value = taskBox[x].task4;
//   task5.value = taskBox[x].task5;
//   task6.value = taskBox[x].task6;
//   task7.value = taskBox[x].task7;
//   task8.value = taskBox[x].task8;
// }

// function updateTask(x){
//   taskBox[x].task1 = task1.value; 
//   taskBox[x].task2 = task2.value;
//   taskBox[x].task3 = task3.value;
//   taskBox[x].task4 = task4.value;
//   taskBox[x].task5 = task5.value;
//   taskBox[x].task6 = task6.value;
//   taskBox[x].task7 = task7.value;
//   taskBox[x].task8 = task8.value;
  
//     document.getElementById('addDiv').innerHTML = 
//     `
//     <div class="card text-center w-25 h-50 m-3">
//       <div class="card-header">
//           <button class="btn btn-primary" onclick='doneTask(${x})'>DONE</button>      
//       </div>
//       <div class="card-body">
//         <div class="card-text d-flex">
//           <div class="tasks1 w-50 h-100">
//             <p class="f4tasks mb-2">1-${taskBox[x].task1}</p>
//             <p class="f4tasks mb-2">2-${taskBox[x].task2}</p>
//             <p class="f4tasks mb-2">3-${taskBox[x].task3}</p>
//             <p class="f4tasks mb-2">4-${taskBox[x].task4}</p>
//           </div>
//           <div class="tasks2 w-50 h-100">
//             <p class="mb-2">5-${taskBox[x].task5}</p>
//             <p class="mb-2">6-${taskBox[x].task6}</p>
//             <p class="mb-2">7-${taskBox[x].task7}</p>
//             <p class="mb-2">8-${taskBox[x].task8}</p>
//           </div>
//         </div>
//       </div>
//         <div class="card-footer text-body-secondary">
//           <button class="btn btn-warning" onclick='updateTaskForm(${x})'>UPDATE</button>
//           <button class="btn btn-danger ms-3" onclick='deleteTask(${x})'>DELETE</button>
//         </div>
//     </div>
//     `;
//   displayTask();
//   localStorage.setItem('tasks',JSON.stringify(taskBox));
//   document.getElementById('myForm').innerHTML = '';
//   document.getElementById('h5').innerHTML = 'TASKS UPDATED SUCCSSFULLY';
//   h5.style.color = 'yellow';

//   function addsuccessfully(){
//     document.getElementById('h5').innerHTML = '';
//   }

//   setTimeout(addsuccessfully,2000);
// }

// function deleteTask(x){
//   taskBox.splice(x,1);
//   localStorage.setItem('tasks',JSON.stringify(taskBox));
//   document.getElementById('h5').innerHTML = 'TASK DELETED SUCCSSFULLY';
//   h5.style.color = 'red';
//   displayTask();
//   function addsuccessfully(){
//     document.getElementById('h5').innerHTML = '';
//   }

//   setTimeout(addsuccessfully,2000);
// }
// function doneTask(x){
//   taskBox.splice(x,1);
//   localStorage.setItem('tasks',JSON.stringify(taskBox));
//   document.getElementById('h5').innerHTML = 'TASK IS DONE';
//   h5.style.color = 'blue';
//   displayTask();
//   function addsuccessfully(){
//     document.getElementById('h5').innerHTML = '';
//   }

//   setTimeout(addsuccessfully,2000);
// }

// // جزء التاسك خلص



// function displayNotesAndTasks(){
//   let notesAndTasks = '';

//   for (let i = 0 ; i < noteBox.length ; i++){
//   notesAndTasks += 
//   `
//   <div class="card text-center w-25 m-3">
//     <div class="card-header">${noteBox[i].noteTitle}</div>
//     <div class="card-body">
//       <p class="card-text">${noteBox[i].noteText}</p>
//       <div class="d-flex">
//         <button class="btn btn-warning ms-3" onclick="updateNote(${i})">UPDATE</button>
//         <button class="btn btn-danger ms-3" onclick='deleteNote(${i})'>DELETE</button>
//       </div>
//     </div>
//       <div class="card-footer text-body-secondary">${noteBox[i].noteDate}</div>
//   </div>
//   `;
//   }
//   for (var x = 0 ; x < taskBox.length ; x++){
//     notesAndTasks += 
//     `
//     <div class="card text-center w-25 h-50 m-3">
//       <div class="card-header">
//           <button class="btn btn-primary">DONE</button>      
//       </div>
//       <div class="card-body">
//         <div class="card-text d-flex">
//           <div class="tasks1 w-50 h-100">
//             <p class="f4tasks mb-2">1-${taskBox[x].task1}</p>
//             <p class="f4tasks mb-2">2-${taskBox[x].task2}</p>
//             <p class="f4tasks mb-2">3-${taskBox[x].task3}</p>
//             <p class="f4tasks mb-2">4-${taskBox[x].task4}</p>
//           </div>
//           <div class="tasks2 w-50 h-100">
//             <p class="mb-2">5-${taskBox[x].task5}</p>
//             <p class="mb-2">6-${taskBox[x].task6}</p>
//             <p class="mb-2">7-${taskBox[x].task7}</p>
//             <p class="mb-2">8-${taskBox[x].task8}</p>
//           </div>
//         </div>
//       </div>
//         <div class="card-footer text-body-secondary">
//           <button class="btn btn-warning" onclick='updateTaskForm(${x})'>UPDATE</button>
//           <button class="btn btn-danger ms-3" onclick='deleteTask(${x})'>DELETE</button>
//         </div>
//     </div>
//     `;}
//   document.getElementById('addDiv').innerHTML = notesAndTasks;
//   if(change === 'notesandtasks'){
//     displayNotesAndTasks();
//   }
// }



// function h1noteandtask(){
//   document.getElementById('h1').innerHTML = 'NOTES AND TASKS';
//   displayNotesAndTasks()
//   change = 'notesandtasks';
// }
// function h1Note() {
//   document.getElementById('h1').innerHTML = 'NOTES';
//   displayNote();
//   change = 'note';
// }
// function h1Task() {
//   document.getElementById('h1').innerHTML = 'TASKS';
//   displayTask();
//   localStorage.setItem('tasks',JSON.stringify(taskBox));
//   change = 'task';
// }
// function h1reviews() {
//   document.getElementById('h1').innerHTML = 'REVIEWS';
//   displayReviews();
// }
// function h1gallery() {
//   document.getElementById('h1').innerHTML = 'GALLERY';
//   displayImg();
//   change = 'gallery';
// }
// function h1clear(){
//   document.getElementById('addDiv').innerHTML = '';
//   document.getElementById('h1').innerHTML = '';
//   change = '';
// }

// let reviews;

// fetch('https://jsonplaceholder.typicode.com/comments')
//   .then((result) => result.json())
//   .then((data) => {
//     reviews = data; 
//     console.log(reviews);
// });

// function displayReviews(){
//   let cartoona ='';

//   for(let z = 0 ; z < 50 ; z++){
//     cartoona += 
//   `
//     <div class="card m-2 ms-3" style="width: 18rem;">
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item text-center" id="name">${reviews[z].name}</li>
//         <li class="list-group-item text-center" id="email">${reviews[z].body}</li>
//         <li class="list-group-item text-center" id="comment">${reviews[z].email}</li>
//       </ul>
//     </div>
//   `;
//   }
//   document.getElementById('addDiv').innerHTML = cartoona;
// };

// if (localStorage.getItem('images') != null){
//   imgBox = JSON.parse(localStorage.getItem('images'))
//   displayImg();
// }else{
//   imgBox = [];
// }

// function displayImgForm(){
//   img = 
//   `
//     <div class="input-group w-75 ms-5 mt-5">
//       <input type="file" class="form-control" id="imgInput">
//       <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onclick='addImg()'>ADD</button>
//     </div>
//   `;
//   document.getElementById('myForm').innerHTML = img;
// };

// function addImg() {
//   imgInput = document.getElementById('imgInput').files[0];
//   imgUrl = URL.createObjectURL(imgInput);

//   imgBox.push(imgUrl);
//   localStorage.setItem('images',JSON.stringify(imgBox))

//   document.getElementById('myForm').innerHTML = '';
//   if(change === 'gallery'){
//     displayImg();
//   }
// }

// function displayImg() {
//   let addimg = '';

//   for(var y = 0 ; y < imgBox.length ; y++){
//     addimg += 
//     `
//       <div class="imgdiv m-3">
//         <img src="${imgBox[y]}" alt="" class="imgdimention m-3">
//         <div class='d-flex align-items-center justify-content-evenly w-100'>
//           <button class="btn btn-warning">UPDATE</button>
//           <button class="btn btn-danger">DELETE</button>
//         </div>
//       </div>
//     `;
//     }

//   document.getElementById('addDiv').innerHTML = addimg;
// }

// 289 => 918
// let change = '';

// function button(){
//   if (change === 'work'){
//     document.getElementById('work').style.backgroundColor = '#C0C0C0';
//     document.getElementById('work').style.borderTopLeftRadius = '10px';
//     document.getElementById('work').style.borderBottomRightRadius = '10px';
//     document.getElementById('work').style.borderBottomColor = '#C0C0C0';
//     document.getElementById('personal').style.backgroundColor = '';
//     document.getElementById('personal').style.borderTopLeftRadius = '';
//     document.getElementById('personal').style.borderBottomRightRadius = '';
//     document.getElementById('personal').style.borderBottomColor = '';
//     document.getElementById('ideas').style.backgroundColor = '';
//     document.getElementById('ideas').style.borderTopLeftRadius = '';
//     document.getElementById('ideas').style.borderBottomRightRadius = '';
//     document.getElementById('ideas').style.borderBottomColor = '';
//     document.getElementById('favorites').style.backgroundColor = '';
//     document.getElementById('favorites').style.borderTopLeftRadius = '';
//     document.getElementById('favorites').style.borderBottomRightRadius = '';
//     document.getElementById('favorites').style.borderBottomColor = '';
//   }else if (change === 'personal'){
//     document.getElementById('work').style.backgroundColor = '';
//     document.getElementById('work').style.borderTopLeftRadius = '';
//     document.getElementById('work').style.borderBottomRightRadius = '';
//     document.getElementById('work').style.borderBottomColor = '';
//     document.getElementById('personal').style.backgroundColor = '#C0C0C0';
//     document.getElementById('personal').style.borderTopLeftRadius = '10px';
//     document.getElementById('personal').style.borderBottomRightRadius = '10px';
//     document.getElementById('personal').style.borderBottomColor = '#C0C0C0';
//     document.getElementById('ideas').style.backgroundColor = '';
//     document.getElementById('ideas').style.borderTopLeftRadius = '';
//     document.getElementById('ideas').style.borderBottomRightRadius = '';
//     document.getElementById('ideas').style.borderBottomColor = '';
//     document.getElementById('favorites').style.backgroundColor = '';
//     document.getElementById('favorites').style.borderTopLeftRadius = '';
//     document.getElementById('favorites').style.borderBottomRightRadius = '';
//     document.getElementById('favorites').style.borderBottomColor = '';
//   }else if (change === 'ideas'){
//     document.getElementById('work').style.backgroundColor = '';
//     document.getElementById('work').style.borderTopLeftRadius = '';
//     document.getElementById('work').style.borderBottomRightRadius = '';
//     document.getElementById('work').style.borderBottomColor = '';
//     document.getElementById('personal').style.backgroundColor = '';
//     document.getElementById('personal').style.borderTopLeftRadius = '';
//     document.getElementById('personal').style.borderBottomRightRadius = '';
//     document.getElementById('personal').style.borderBottomColor = '';
//     document.getElementById('ideas').style.backgroundColor = '#C0C0C0';
//     document.getElementById('ideas').style.borderTopLeftRadius = '10px';
//     document.getElementById('ideas').style.borderBottomRightRadius = '10px';
//     document.getElementById('ideas').style.borderBottomColor = '#C0C0C0';
//     document.getElementById('favorites').style.backgroundColor = '';
//     document.getElementById('favorites').style.borderTopLeftRadius = '';
//     document.getElementById('favorites').style.borderBottomRightRadius = '';
//     document.getElementById('favorites').style.borderBottomColor = '';
//   }else if (change === 'favorites'){
//     document.getElementById('work').style.backgroundColor = '';
//     document.getElementById('work').style.borderTopLeftRadius = '';
//     document.getElementById('work').style.borderBottomRightRadius = '';
//     document.getElementById('work').style.borderBottomColor = '';
//     document.getElementById('personal').style.backgroundColor = '';
//     document.getElementById('personal').style.borderTopLeftRadius = '';
//     document.getElementById('personal').style.borderBottomRightRadius = '';
//     document.getElementById('personal').style.borderBottomColor = '';
//     document.getElementById('ideas').style.backgroundColor = '';
//     document.getElementById('ideas').style.borderTopLeftRadius = '';
//     document.getElementById('ideas').style.borderBottomRightRadius = '';
//     document.getElementById('ideas').style.borderBottomColor = '';
//     document.getElementById('favorites').style.backgroundColor = '#C0C0C0';
//     document.getElementById('favorites').style.borderTopLeftRadius = '10px';
//     document.getElementById('favorites').style.borderBottomRightRadius = '10px';
//     document.getElementById('favorites').style.borderBottomColor = '#C0C0C0';
//   }
// }

// function displayWork(){
//   change = 'work';
//   button();
// }

// function displayPersonal(){
//   change = 'personal';
//   button();
// }

// function displayIdeas(){
//   change = 'ideas';
//   button();
// }

// function displayFavorites(){
//   change = 'favorites';
//   button();
// }




if(localStorage.getItem('note') != null){
  noteBox = JSON.parse(localStorage.getItem('note'));
  display();
}else {
  noteBox = [];
}

let section = 'all';

document.getElementById('work2').addEventListener('click',() => section = 'work');
document.getElementById('personal2').addEventListener('click',() => section = 'personal');
document.getElementById('idea2').addEventListener('click',() => section = 'idea');

function add(){
  
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();

  let note = {
    noteTitle : document.getElementById('noteTitle').value,
    noteText : document.getElementById('noteText').value,
    noteTime : `${hour}:${minute}`,
    noteDate : `${month}/${day}/${year}`,
    section : section,
  };
  noteBox.push(note);
  localStorage.setItem('note',JSON.stringify(noteBox))

  display();

  document.getElementById('noteTitle').value = '';
  document.getElementById('noteText').value = '';

}

function display(){
  let cartoona = '';

  for(let x = 0 ; x < noteBox.length ; x++){
    cartoona += 
    `
          <div class="d-flex notes justify-content-between align-items-center my-4">
            <div class="ms-3">
              <p class="note-title mb-1 fw-bold" style="color: #5F5F5F;">${noteBox[x].noteTitle}</p>
              <p class="note-date mb-1 text-black">${noteBox[x].noteDate}</p>
            </div>
            <i class="fa-solid fa-book-open note-display" onclick="displayNote(${x})"></i><i class="fa-solid fa-trash-can note-delete" onclick="deleteNote(${x})"></i>
            <p class="note-time me-3 mt-3">${noteBox[x].noteTime}<b style="color: #5F5F5F;">AM</b></p>
          </div>
    `;
  };
  document.getElementById('middle-bar').innerHTML = cartoona;
}

function displayNote(x){
  document.getElementById('noteText').value = noteBox[x].noteText;
  document.getElementById('noteTitle').value = noteBox[x].noteTitle;
  noteBox.splice(x,1);
  localStorage.setItem('note',JSON.stringify(noteBox));
}

function deleteNote(x){
  noteBox.splice(x,1);
  localStorage.setItem('note',JSON.stringify(noteBox));
  if (section === 'all'){
    display();
  }else {
    filter(section);
  };
}

function active(elementId) {
  const everyClass = document.querySelectorAll('.li-style');
  everyClass.forEach(item => item.classList.remove('active'));
  const chosenClass = document.getElementById(elementId);
  chosenClass.classList.add('active');
  if (elementId === 'all'){
    display();
  }else {
    section = elementId;
    filter(section);
  };
}

function filter(sectionName){
  let filtered = noteBox.filter(note => note.section === sectionName);
  let cartoona = '';

  for(let x = 0 ; x < filtered.length ; x++){
    cartoona += 
    `
          <div class="d-flex notes justify-content-between align-items-center my-4">
            <div class="ms-3">
              <p class="note-title mb-1 fw-bold" style="color: #5F5F5F;">${filtered[x].noteTitle}</p>
              <p class="note-date mb-1 text-black">${filtered[x].noteDate}</p>
            </div>
            <i class="fa-solid fa-book-open note-display" onclick="displayNote(${x})"></i><i class="fa-solid fa-trash-can note-delete" onclick="deleteNote(${x})"></i>
            <p class="note-time me-3 mt-3">${filtered[x].noteTime}<b style="color: #5F5F5F;">AM</b></p>
          </div>
    `;
  };
  document.getElementById('middle-bar').innerHTML = cartoona;
}

function active2(elementId2){
  const everyClass2 = document.querySelectorAll('.li-style-2');
  everyClass2.forEach(item2 => item2.classList.remove('active2'));
  const chosenClass2 = document.getElementById(elementId2);
  chosenClass2.classList.add('active2');
}