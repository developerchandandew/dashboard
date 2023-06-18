import DataTable from 'react-data-table-component';
import data from '../database/Data';
import columns from '../database/Columns';
let Tables=()=>{
 
    
    
    return (
        <div className="p-2">
            <h1 className='mt-12'>Tables</h1>
            <p className='my-5'><a className='text-blue-500 underline'>Dashboard</a> / Tables</p>

            <div className='border-2 border-gray-300 rounded-md'>
                <h1 className='bg-gray-300 py-2 pl-3'> DataTable Example</h1>
            <DataTable
            
               columns={columns}
               data={data}
               pagination
               subHeader
               subHeaderComponent={
                <input type='text' placeholder='Search'/>
               }
            
            />
            </div>
            
        </div>
    )
}
export default Tables 