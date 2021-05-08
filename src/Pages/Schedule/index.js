import React from 'react'

const Schedule = () => {
    return (
        <div className="flex  justify-center min-h-screen bg-gray-100">
            <div className="w-7/12">
                <div className="bg-white mt-12 shadow py-4 px-5 mt-300 rounded">
                    <div className="flex justify-between">
                        <div className="flex p-3">
                            December 2020
                            <svg className="w-5 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                        <div className="flex p-3">
                            1 2 3 4
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-1/3 p-2">
                        <div className="flex bg-white mt-5 shadow p-10 rounded">
                           
                        </div>
                    </div>
                    <div className="w-2/3 p-2">
                        <div className="flex bg-white mt-5 shadow p-10 rounded">
                    
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <div className="flex bg-white mt-5 shadow p-10 rounded"></div>
                    </div>
                    <div className="w-2/3 p-2">
                        <div className="flex bg-white mt-5 shadow p-10 rounded"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Schedule
