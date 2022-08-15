import {useState} from 'react'

// const courses = [
//   {
//     id:1,
//     name: 'ReactJs'
//   },

//   {
//     id:2,
//     name: 'HTML & CSS'
//   },

//   {
//     id:3,
//     name: 'VueJS'
//   }

// ]



// function App() {
//   const [courseId, setCourseId] = useState([]);
  
//   const handleCheck = (id) => {
//     setCourseId(prev => {
//       const isChecked = courseId.includes(id);
//       if(isChecked)
//       {
//         return courseId.filter(check => {
//           return check !== id;
//         })
//       }
//       else
//       {
//         return [...prev,id]
//       }
//     })
//   }

//   const handleSubmit = () => {
//     console.log(courseId);
//   }
//   return (
//     <div className='App' style={{padding:20}}>
//       {
//         courses.map((course) => {
//           return (
//             <div key={course.id}>
//                 <input 
//                   type= "checkbox"
//                   checked = {courseId.includes(course.id)}
//                   onChange = {() => handleCheck(course.id)}
//                 />
//                 <label>{course.name}</label>
//             </div>
//           )
//         }) 
//       }
//       <button onClick = {handleSubmit} >Submit</button>
//     </div>
//   );
// }




// function App(){
//   const [job, setJob] = useState('');
//   const [jobs, setJobs] = useState(() => {
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'));
//     return storageJobs ?? [];
//   });
//   function handleClick() {
//     setJobs(prev => {
//       const newJobs = [...prev, job];
//       const jsonJobs = JSON.stringify(newJobs);
//       localStorage.setItem('jobs', jsonJobs);
//       return newJobs;
//     });
//     setJob('');
//   }

//   return (
//     <div style={{padding: 32}}>
//       <input 
//       value={job}
//       onChange = {e => setJob(e.target.value)}
//       />
//       <button onClick={handleClick}>Add</button>
//       <ul>
//         {
//           jobs.map((job , index) => 
//           <li key={index}>{job}</li>)
//         }
//       </ul>
//     </div>
//   )
// }

// Practice the app

// const Totalquestion = [
//   {
//     idQ: 1,
//     ques: 'A dog Have: ',
//     arrayAns: [
//                 {id: 1,
//                 ans: '1 legs'},

//                 {id: 2,
//                 ans: '2 legs'},

//                 {id: 3,
//                 ans: '3 legs'},

//                 {id: 4,
//                 ans: '4 legs'}
//               ]
//   },
//   {
//     idQ: 2,
//     ques: 'How many months in a year: ',
//     arrayAns: [
//                 {id: 1,
//                 ans: '8 Months'},

//                 {id: 2,
//                 ans: '9 Months'},

//                 {id: 3,
//                 ans: '10 Months'},

//                 {id: 4,
//                 ans: '4 Months'}
//               ]
//   }
// ]


// function App() {

//   // const [ans, setAns] = useState([]);
//   const [ques, setQues] = useState([]);
//   // const [ques, setQues] = useState();
//   function handleButton(){

//   }
  
//   function checkAns(){
  
//   }
  
//   function handleEvent(idQ,id){
//     setQues((prev) => {
//       var check = false;
//       ques.forEach(item => {
//         if(item['id'] === idQ){
//           check = true;
//           const checked = item['ans'].includes(id);
//           if(checked){
//             item['ans'] =  item['ans'].filter((each) => each !== id)
//           }
//           else{
//             item['ans'] =  [...item['ans'], id]
//           }
//         }
//       });
//       if(!check){
//         return [...prev, {id: idQ, ans: [id]}]
//       }
//     })

//   }

//   function handleChecked(idQ, id){
//     ques.forEach(item => {
//       if(item['id'] === idQ){
//         return item['ans'].includes(id);
//       }
//     })
//     return true;
//   }

//   return (
//     <div style= {{padding: 32}}>
//       {
//         Totalquestion.map( question =>
//         (
//           <div key={question.idQ}>
//             <p>{question.ques}</p>
//             {question.arrayAns.map( item => 
//               (<div key={item.id}>
//                 <input type= "checkbox"
//                 checked = {()=> handleChecked(question.idQ, item.id)}
//                 onChange={() => handleEvent(question.idQ, item.id)}
//                 />
//                 {item.ans}
//               </div>) 
//               )}
//           </div>
//         )  
//         )
//       }
//       <button onClick={handleButton}>Submit</button><br></br>
//       <button onClick={checkAns}>Check the score</button>

//     </div>
//   )
// }

function App() {
  var num = 0 ;
  const [numAdd, setNumAdd] = useState(0);
  const [numSub, setNumSub] = useState(0);
  const [value, setValue] = useState(0);

  function handleAdd(){
    setNumAdd(numAdd+1);
    setValue(numAdd+1);
    setNumSub(numAdd+1);
  }
  function handleSubs(){
    setNumSub(numSub-1);
    setNumAdd(numSub-1);
    setValue(numSub-1);
  }
  return (
    <div style={{padding:32}}>
      <input value={value}/> 
      <button style={{margin: 5}} onClick = {handleAdd} > + </button>
      <button style={{margin: 5}} onClick = {handleSubs}> - </button>
    </div>
  )
}

export default App;
