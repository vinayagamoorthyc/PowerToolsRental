import axios from "axios";

function ExpTable(props) {
  const handleDelete=(id)=>{
    axios.delete('https://powerlendbackend.onrender.com/deleteExp/'+id).
    then(e=> {console.log(e)
      window.location.reload()
    })
    .catch(err=> console.log(err))
  };

  return (
    <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.experience}</td>
          <td><button class="btn btn-danger" onClick={(e)=>{handleDelete(props._id)}}>Remove</button></td>
        </tr>
    </tbody>  
  );
}

export default ExpTable;