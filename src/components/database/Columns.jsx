const columns =[
    {
        name:'Name',
        selector: row=>row.name,
        sortable:true
    },
    {
        name:'Position',
        selector: row=>row.position,
        sortable:true
    },
    {
        name:'Office',
        selector: row=>row.office,
        sortable:true
    },
    {
        name:'Age',
        selector: row=>row.age,
        sortable:true
    },
    {
        name:'Start Date',
        selector: row=>row.startdate,
        sortable:true
    },
    {
        name:'Salary',
        selector: row=>row.salary,
        sortable:true
    }
   ]

   export default columns;