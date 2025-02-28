let fetchData= async ()=>{
    let url="http://localhost:3000/hotel"
    let res= await fetch(url,{method:"GET"})
    // let data=await res.json()
   // console.log(res);                  //response
    let data=await res.json()
    console.log(data);                     //show data



let show1=document.querySelector("#show")
data.map((e)=>{
   show1.innerHTML+=
   `
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
   <td id="female">${e.female}</td>
   <td id="male">${e.male}</td>
   <td id="kids">${e.kids}</td>
   <td onclick="del('${e.id}')">Cancel</td>
    <td onclick="formfill('${e.id}')">Update</td>
   </tr>

   `
})
}
let del=(id)=>{
    let url=`http://localhost:3000/hotel/${id};`
    fetch(url,{method:"DELETE"});

}
   
let ins=()=>{
    let inpname=document.querySelector("#name").value
    let inpemail=document.querySelector("#email").value
    let inpmobile=document.querySelector("#mobile").value
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

        // Enter name: <input type="text" id="upname" value="${data.name}">
          <form action="">
            <h1>HOTEL BOOKING</h1>
            <input type="text" id="name" placeholder="enter name" value="${data.name}><br><br>
            <div>
            <input type="text" id="email" placeholder="enter email" value="${data.email}>
            <input type="number" id="number" placeholder="mobileno." value="${data.mobile}><br><br>
            </div>
            <div>
            <input type="text" id="address" placeholder="enter address" value="${data.address}><br><br>
            </div> 
            <div>
            <input type="text" id="city" placeholder="city" value="${data.city}>
            <input type="text" id="state" placeholder="state" value="${data.state}><br><br>
            </div>
            <div>
                <input type="number" id="pincode" placeholder="pincode" value="${data.pincode}>
                <input type="text" id="country" placeholder="country" value="${data.country}><br><br>
            </div>
            <div>
                <input type="date" id="datein" placeholder="" value="${data.datein}>
                <input type="date" id="dateout" placeholder="" value="${data.dateout}><br><br>
            </div>
            <div>
                <input type="text" id="person" placeholder="no.of person" value="${data.person}>
               <select name="" id="">
                <option value="male">male</option>
                <option value="male">1</option>
                <option value="male">2</option>
                <option value="male">3</option>
                <option value="male">4</option>
                <option value="male">5</option>
               </select>
            </div><br>
            <div>
                
               <select name="" id="">
                <option value="female">female</option>
                <option value="female">1</option>
                <option value="female">2</option>
                <option value="female">3</option>
                <option value="female">4</option>
                <option value="female">5</option>
               </select>
               <select name="" id="">
                <option value="kids">kids</option>
                <option value="kids">1</option>
                <option value="kids">2</option>
                <option value="kids">3</option>
                <option value="kids">4</option>
                <option value="kids">5</option>
               </select>
            </div><br><br>
            <button type="submit" id="formdata">BOOK NOW</button>
        </form>

        
    `
    document.querySelector("#formdata").innerHTML+=formdata


}
