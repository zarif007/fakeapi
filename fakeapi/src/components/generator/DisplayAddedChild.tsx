import React from 'react'
import KeyValueComp from './KeyValueComp'


const DisplayAddedChild = ({ data }: any) => {
return (<>
    {
                (data === undefined) ? 'loading....' :
                    <div className='ml-12 w-fit'>

                    <KeyValueComp data={data} />
                        

                        
                        

                </div>
            }
        </>)
}

export default DisplayAddedChild
