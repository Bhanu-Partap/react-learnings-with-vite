// import {useParams, useLocation} from "react-router-dom"

// export default function User() {
//   const {id = 452} = useParams(); 
//   const location = useLocation();
//   console.log(location);
//   return (
//     <>
//           <h1>User Page with {id} id</h1>

//     </>
//   )
// }




export default function User() {
  let users= [
    {id:1, name:"Bmw", email:"bmw@admin.com"},
    {id:2, name:"Lamborghini", email:"Lamborghini@admin.com"},
    {id:3, name:"McLaren", email:"McLaren@admin.com"},
    {id:4, name:"Cadillac", email:"Cadillac@admin.com"},
  ]
  return (
    <>
    {
      users.map((item)=>{
        <div>console.log({item.name})</div>
      })
    }
    </>
  )
}
