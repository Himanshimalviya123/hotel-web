let fetchData= async ()=>{
    let url="http://localhost:3000/hotel"
    let res= await fetch(url,{method:"GET"})
    // let data=await res.json()
   // console.log(res);                  //response
    let data=await res.json()
    console.log(data);                     //show data
    Datashow(data)
}
 let searchh=async()=>{
    let searchinp=document.querySelector("#Searchinp").value.toLowerCase()
    let url='http://localhost:3000/hotel'
    let res=await fetch(url,{method:"GET"})
    let data=await res.json()

    let filterData=data.filter((e)=>{
        return e.name.toLowerCase().includes(searchinp) 
    })
Datashow(filterData)
  }

let Datashow=(data)=>{

let show1=document.querySelector("#show")
show1.innerHTML=""

data.map((e)=>{
  show1.innerHTML+= `
   <tr id="element">
   
   <td id="name">${e.name}</td>
   <td id="email">${e.email}</td>
   <td id="mobile">${e.mobile}</td>
   <td id="address">${e.address}</td>
   <td id="city">${e.city}</td>
   <td id="state">${e.state}</td>
   <td id="pincode">${e.pincode}</td>
   <td id="country">${e.country}</td>
   <td id="datein">${e.datein}</td>
   <td id="dateout">${e.dateout}</td>
   <td id="person">${e.price*e.person}</td>
   
    <td onclick="confirmdeletee('${e.id}')">Cancel</td>
    <td onclick="formfill('${e.id}')">Update</td>
   </tr>

   `
})
}
let confirmdeletee=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            del(id)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
}


let del=(id)=>{
    let url=`http://localhost:3000/hotel/${id}`
    fetch(url,{method:"DELETE"});

}
   
let ins=()=>{
    let inpname=document.querySelector("#name").value
    let inpemail=document.querySelector("#email").value
    let inpmobile=document.querySelector("#number").value
    let inpaddress=document.querySelector("#address").value
    let inpcity=document.querySelector("#city").value
    let inpstate=document.querySelector("#state").value
    let inppincode=document.querySelector("#pincode").value
    let inpcountry=document.querySelector("#country").value
    let inpdatein=document.querySelector("#datein").value
    let inpdateout=document.querySelector("#dateout").value
    let inpperson=document.querySelector("#person").value



    let url='http://localhost:3000/hotel'

    fetch(url,{

        method:"POST" ,

        headers:{
            "Content-type":"application/json"
        },

        body:JSON.stringify(
            {
                "name":inpname,
                "email":inpemail,
                "mobile":inpmobile,
                "address":inpaddress,
                "city":inpcity,
                "state":inpstate,
                "pincode":inppincode,
                "country":inpcountry,
                "datein":inpdatein,
                "dateout":inpdateout,
                "person":inpperson,
                "name":inpname,
                "price":500
            }
        )
    })

    location.href="curdtable.html"
    return false;
    
}

let formfill= async(id)=>{
    let url=`http://localhost:3000/hotel/${id}`
    let res= await fetch(url,{method:"GET"})
    let data=await res.json()
    console.log(data);                     //show data

    let formdata=`

      
          <form action="">
            <h1>HOTEL BOOKING</h1>
            <input type="text" id="upname" placeholder="enter name" value="${data.name}">
            <div>
            <input type="text" id="upemail" placeholder="enter email" value="${data.email}">
            <input type="number" id="upnumber" placeholder="mobileno" value="${data.mobile}">
            </div>
            <div>
            <input type="text" id="upaddress" placeholder="enter address" value="${data.address}">
            </div> 
            <div>
            <input type="text" id="upcity" placeholder="city" value="${data.city}">
            <input type="text" id="upstate" placeholder="state" value="${data.state}">
            </div>
            <div>
                <input type="number" id="uppincode" placeholder="pincode" value="${data.pincode}">
                <input type="text" id="upcountry" placeholder="country" value="${data.country}"><br><br>
            </div>
            <div>
                <input type="date" id="updatein" placeholder="" value="${data.datein}">
                <input type="date" id="updateout" placeholder="" value="${data.dateout}"><br><br>
            </div>
            <div>
                <input type="text" id="upperson" placeholder="no of person" value="${data.person}"><br><br>
               
            <input type="submit" value="update" onclick="return finalupdate('${data.id}')">
        </form>

        
    `
    document.querySelector("#formdata").innerHTML+=formdata


}

let finalupdate= async (id)=>{
    let inpname=document.querySelector("#upname").value
    let inpemail=document.querySelector("#upemail").value
    let inpmobile=document.querySelector("#upnumber").value
    let inpaddress=document.querySelector("#upaddress").value
    let inpcity=document.querySelector("#upcity").value
    let inpstate=document.querySelector("#upstate").value
    let inppincode=document.querySelector("#uppincode").value
    let inpcountry=document.querySelector("#upcountry").value
    let inpdatein=document.querySelector("#updatein").value
    let inpdateout=document.querySelector("#updateout").value
    let inpperson=document.querySelector("#upperson").value



    let url=`http://localhost:3000/hotel/${id}`

    fetch(url,{

        method:"PUT" ,

        headers:{
            "Content-type":"application/json"
        },

        body:JSON.stringify(
            {
                "name":inpname,
                "email":inpemail,
                "mobile":inpmobile,
                "address":inpaddress,
                "city":inpcity,
                "state":inpstate,
                "pincode":inppincode,
                "country":inpcountry,
                "datein":inpdatein,
                "dateout":inpdateout,
                "person":inpperson,
                "price":500
            }
        )
    })

    location.href="curdtable.html"
    return false;
    
}



