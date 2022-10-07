import React from 'react'

function CardComponent() {
    const [selected, setSelected] = React.useState(1);

    return (
            <div className='inline-flex justify-between item-ccenter pb-3  w-4/5 md:w-2/5 lg:w-3/12'>
                <div className="flex flex-col items-start text-left p-5 justify-evenly cursor-pointer" onClick={() => { setSelected(1) }} style={{ border: selected === 1 ? '1px solid #664de5' : '1px solid grey', borderRadius: '5px' }}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={selected === 1 ? "#664de5" : "black"} class="w-6 h-6">
                            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className='font-bold'>For myself</h3>
                    </div>
                    <div>
                        <p className='font-normal text-[grey]'>Write better. think <br /> more clearly. Stay <br /> organized</p>
                    </div>
                </div>
                <div className="flex flex-col items-start text-left p-5 justify-evenly cursor-pointer" onClick={() => { setSelected(2) }} style={{ border: selected === 2 ? '1px solid #664de5' : '1px solid grey', borderRadius: '5px' }}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={selected === 2 ? "#664de5" : "black"} class="w-6 h-6">
                            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className='font-bold'>With my team</h3>
                    </div>
                    <div>
                        <p className='font-normal text-[grey]'>Wikis, docs, tasks &  <br /> more clearly. Stay <br /> organized</p>
                    </div>
                </div>
            </div>
    )
}

export default CardComponent
