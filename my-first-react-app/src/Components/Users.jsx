
//  function Users(props) {
//   return (
//     <>
//         <h1>User {props.data.Name}</h1>
//     </>
//     )
// }

// export default Users


// 38 SEND DATA FROM CHILD TO PARENT COMPONENT //


 function Users(props) {
  return (
    <>
        <h2>User Name: </h2>
        <button onClick={props.alert}>Click ME</button>
    </>
    )
}

export default Users