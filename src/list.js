
function List(){
     const details=[
        {
        id:1,
        name:'Vimal',
        roll:'23'
    },
    {
        id:2,
        name:'Cathy',
        roll:'24'
    },
    {
        id:3,
        name:'Manoj',
        roll:'25'
    },
];
    return(
   <div>
   {details.map(data =>
        (
        <div key={data.id}>
            <p> My id is {data.id}</p>
        <p>My name is {data.name}</p>
        <p> my roll no is {data.roll}</p>
        </div>))
  } 
   </div>
  )
}

export default List;