import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../../assets'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'




const Home = (props) => {

    //Restrict the page
    const {user} = props
    if(!user){
        return <Redirect to="/login"></Redirect>
    }


    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full ">
                <div className="bg-gradient-to-b from-red-600  to-rose-700 lg:rounded-b-3xl">
                    <div className=" text-white uppercase px-6  lg:px-32 py-9 lg:text-2xl font-semibold">
                        Sewa lapangan basket & bulutangkis
                 </div>
                    <div className="flex flex-row px-6 lg:px-32 py-3 items-center text-white">
                        <svg className="flex w-6 lg:w-12 h-6 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <div className="flex pl-5 text-lg lg:pl-10 lg:text-2xl text-white ">
                            Bangli
                        </div>
                    </div>
                    <div className="flex flex-row px-6 lg:px-32 pt-9 pb-60 items-center">
                        <svg className=" flex w-6 lg:w-12 lg:h-12" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30 60C37.9565 60 45.5871 56.8393 51.2132 51.2132C56.8393 45.5871 60 37.9565 60 30C60 22.0435 56.8393 14.4129 51.2132 8.7868C45.5871 3.16071 37.9565 0 30 0C22.0435 0 14.4129 3.16071 8.7868 8.7868C3.16071 14.4129 0 22.0435 0 30C0 37.9565 3.16071 45.5871 8.7868 51.2132C14.4129 56.8393 22.0435 60 30 60ZM33.75 15C33.75 14.0054 33.3549 13.0516 32.6516 12.3484C31.9484 11.6451 30.9946 11.25 30 11.25C29.0054 11.25 28.0516 11.6451 27.3484 12.3484C26.6451 13.0516 26.25 14.0054 26.25 15V30C26.2502 30.9945 26.6454 31.9482 27.3488 32.6512L37.9538 43.26C38.3022 43.6084 38.7158 43.8848 39.171 44.0733C39.6262 44.2619 40.1141 44.359 40.6069 44.359C41.0996 44.359 41.5875 44.2619 42.0427 44.0733C42.498 43.8848 42.9116 43.6084 43.26 43.26C43.6084 42.9116 43.8848 42.498 44.0733 42.0427C44.2619 41.5875 44.359 41.0996 44.359 40.6069C44.359 40.1141 44.2619 39.6262 44.0733 39.171C43.8848 38.7158 43.6084 38.3022 43.26 37.9538L33.75 28.4475V15Z" fill="white" />
                        </svg>
                        <div className="flex pl-5 text-lg lg:pl-10 lg:text-2xl text-white ">
                            Jam sewa 8.00 - 22.00
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full lg:w-3/4 lg:-mt-32 mb-52 bg-white border border-gray-200 shadow-md  lg:rounded-2xl ">
                <div className="sticky top-0">
                    <div className="flex bg-white justify-between  px-2 lg:px-4 py-4 border-b border-gray-200  lg:rounded-2xl ">
                        <div className="flex flex-row items-center p-2 text-sm lg:text-lg text-black font-Roboto">
                            Desember
                            <svg className="w-4 lg:w-5 ml-2" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1111 10.8889V2M30.8889 10.8889V2M10.8889 19.7778H33.1111M6.44444 42H37.5556C38.7343 42 39.8648 41.5317 40.6983 40.6983C41.5317 39.8648 42 38.7343 42 37.5556V10.8889C42 9.71015 41.5317 8.57969 40.6983 7.74619C39.8648 6.9127 38.7343 6.44444 37.5556 6.44444H6.44444C5.2657 6.44444 4.13524 6.9127 3.30175 7.74619C2.46825 8.57969 2 9.71015 2 10.8889V37.5556C2 38.7343 2.46825 39.8648 3.30175 40.6983C4.13524 41.5317 2.2657 42 6.44444 42Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg className="w-2 lg:w-3 ml-2" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.760327 0.812467C1.24731 0.313549 1.90771 0.0332712 2.59631 0.0332712C3.2849 0.0332712 3.94531 0.313549 4.43229 0.812467L12.9838 9.57616L21.5352 0.812467C21.7748 0.558285 22.0613 0.35554 22.3782 0.216063C22.695 0.0765868 23.0358 0.00317115 23.3806 0.000100483C23.7254 -0.00297018 24.0673 0.064365 24.3865 0.198178C24.7056 0.331991 24.9956 0.529602 25.2394 0.779479C25.4832 1.02936 25.676 1.3265 25.8066 1.65356C25.9372 1.98063 26.0029 2.33107 25.9999 2.68444C25.9969 3.0378 25.9253 3.38702 25.7892 3.71171C25.6531 4.0364 25.4552 4.33006 25.2072 4.57556L14.8197 15.2208C14.3328 15.7197 13.6724 16 12.9838 16C12.2952 16 11.6348 15.7197 11.1478 15.2208L0.760327 4.57556C0.27349 4.07649 0 3.3997 0 2.69401C0 1.98833 0.27349 1.31154 0.760327 0.812467Z" fill="black" />
                            </svg>
                        </div>
                        <div className="flex flex-row items-center p-2">
                            <div className="bg-rose-600 p-1.5 lg:p-2 mx-2 rounded-full">
                                <svg className=" w-5 lg:w-6" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37 25.6135C33.4154 27.2348 29.4219 27.7254 25.5515 27.0199C21.6811 26.3144 18.1176 24.4462 15.3357 21.6643C12.5538 18.8824 10.6856 15.3189 9.98012 11.4485C9.27458 7.57806 9.76518 3.58455 11.3865 0C8.53282 1.28965 6.03456 3.25236 4.10609 5.71974C2.17763 8.18712 0.876528 11.0855 0.314417 14.1663C-0.247695 17.247 -0.0540361 20.4181 0.878778 23.4076C1.81159 26.397 3.45571 29.1155 5.67009 31.3299C7.88447 33.5443 10.603 35.1884 13.5924 36.1212C16.5819 37.054 19.753 37.2477 22.8338 36.6856C25.9145 36.1235 28.8129 34.8224 31.2803 32.8939C33.7476 30.9654 35.7103 28.4672 37 25.6135Z" fill="white" />
                                </svg>
                            </div>
                            <div className="bg-rose-600 p-1.5 lg:p-2 mx-2 rounded-full">
                                <svg className=" w-5 lg:w-6" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5 0C8.31344 0 0 8.31409 0 18.5C0 28.6866 8.31409 37 18.5 37C28.6866 37 37 28.6859 37 18.5C37 8.31344 28.6859 0 18.5 0ZM5.44153 8.70223C7.3187 11.2205 8.42935 14.2477 8.63625 17.416H2.20482C2.41924 14.1606 3.59088 11.1626 5.44153 8.70223ZM2.20482 19.584H8.63625C8.42957 22.7544 7.31913 25.7795 5.44146 28.2977C3.59088 25.8373 2.41924 22.8394 2.20482 19.584ZM17.416 34.7952C13.3097 34.5248 9.6135 32.7305 6.88872 29.9733C9.22182 27.0095 10.5884 23.3847 10.8075 19.584H17.416V34.7952ZM17.416 17.416H10.8075C10.5881 13.6179 9.22138 9.99014 6.88901 7.02646C9.61371 4.26938 13.3099 2.47524 17.416 2.20482V17.416ZM34.7952 17.416H28.3638C28.5704 14.2456 29.6809 11.2205 31.5585 8.7023C33.4091 11.1627 34.5808 14.1606 34.7952 17.416ZM19.584 2.20482C23.6903 2.47524 27.3865 4.26953 30.1113 7.02675C27.7782 9.99051 26.4116 13.6153 26.1925 17.416H19.584V2.20482ZM19.584 34.7952V19.584H26.1925C26.4121 23.3795 27.7793 27.0099 30.111 29.9735C27.3863 32.7306 23.6901 34.5248 19.584 34.7952ZM31.5581 28.2982C29.6814 25.7798 28.5708 22.7503 28.3637 19.584H34.7952C34.5808 22.8396 33.409 25.8378 31.5581 28.2982Z" fill="white" />
                                </svg>
                            </div>
                            <div className="bg-rose-600 p-1.5 lg:p-2 mx-2 rounded-full">
                                <svg className="w-5 lg:w-6" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36.0942 16.6714L29.5871 15.2145L28.8957 9.11896C28.8356 8.58247 28.4147 8.1593 27.8783 8.10149L21.8822 7.42394L21.1677 1.02774C21.1307 0.71094 20.9665 0.421885 20.7098 0.232265C20.4555 0.0403331 20.134 -0.0406022 19.8172 0.0195211L13.2778 1.17574C12.8592 1.24974 12.517 1.54342 12.3806 1.94578L5.92667 21.2616L2.84887 24.3395L2.03028 25.1581C0.721468 26.4669 0 28.2104 0 30.0627C0 31.915 0.721468 33.6585 2.0326 34.9674C3.34141 36.2785 5.08496 37 6.93719 37C8.78942 37 10.533 36.2785 11.8418 34.9674L12.6604 34.1488L15.7382 31.0709L35.0536 24.6169C35.4444 24.4851 35.7381 24.1544 35.8213 23.7497L36.9775 18.0288C37.1001 17.4137 36.7093 16.8101 36.0942 16.6714ZM21.3758 9.6902L26.7012 10.2937L27.3071 15.6216L12.7806 26.0969L10.9006 24.2169L21.3758 9.6902ZM14.3554 3.331L19.0056 2.51009L19.6346 8.15243L9.24496 22.5611L8.25988 21.576L14.3554 3.331ZM3.66746 33.3325C2.79338 32.4584 2.3124 31.2976 2.3124 30.0627C2.3124 28.8278 2.79338 27.667 3.66746 26.7929L10.2069 33.3325C8.45875 35.0807 5.41563 35.0807 3.66746 33.3325ZM11.8418 31.6976L5.30233 25.158L6.93719 23.5208L13.479 30.0627L11.8418 31.6976ZM33.6847 22.6375L15.4237 28.74L14.4386 27.7549L28.787 17.4067L34.4848 18.6809L33.6847 22.6375Z" fill="white" />
                                </svg>
                            </div>
                            <div className="bg-rose-600 p-1.5 lg:p-2 mx-2 rounded-full">
                                <svg className="w-5 lg:w-6" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.879276 36.1667C0.316276 35.6329 0 34.9091 0 34.1544C0 33.3996 0.316276 32.6758 0.879276 32.1421L15.8949 17.9108C16.4581 17.3772 17.2218 17.0775 18.0181 17.0775C18.8145 17.0775 19.5782 17.3772 20.1413 17.9108L35.157 32.1421C35.704 32.6789 36.0067 33.3978 35.9999 34.1441C35.993 34.8904 35.6772 35.6043 35.1204 36.132C34.5636 36.6597 33.8104 36.959 33.023 36.9655C32.2356 36.972 31.477 36.6851 30.9106 36.1667L18.0181 23.9477L5.1257 36.1667C4.56253 36.7002 3.79881 37 3.00249 37C2.20617 37 1.44245 36.7002 0.879276 36.1667ZM0.879276 19.0892C0.316276 18.5554 0 17.8316 0 17.0769C0 16.3222 0.316276 15.5983 0.879276 15.0646L15.8949 0.833342C16.4581 0.299753 17.2218 0 18.0181 0C18.8145 0 19.5782 0.299753 20.1413 0.833342L35.157 15.0646C35.704 15.6014 36.0067 16.3204 35.9999 17.0666C35.993 17.8129 35.6772 18.5268 35.1204 19.0545C34.5636 19.5822 33.8104 19.8816 33.023 19.888C32.2356 19.8945 31.477 19.6076 30.9106 19.0892L18.0181 6.87023L5.1257 19.0892C4.56253 19.6228 3.79881 19.9225 3.00249 19.9225C2.20617 19.9225 1.44245 19.6228 0.879276 19.0892Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-6 py-4 overflow-auto">
                    <div className="flex flex-col text-gray-500 font-Roboto text-xs lg:text-sm ">
                        <table className="table-auto">
                        <thead className="bg-gray-200">
                                <tr>
                                    <td className="text-gray-400 py-2 px-2 rounded-l-md">Pemesan</td>
                                    <td className="text-gray-400 py-2 px-2">Lapangan</td>
                                    <td className="text-gray-400 py-2 px-2">Waktu</td>
                                    <td className="text-gray-400 py-2 px-2 rounded-r-md">Status</td>
                                </tr>
                            </thead>
                            <tbody className="bg-scroll">
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                                <tr className="border-b border-gray-200">

                                    <td className="px-2 pb-2 pt-4">Wahyu</td>
                                    <td className="px-2 pb-2 pt-4">Basket</td>
                                    <td className="px-2 pb-2 pt-4">21.00 - 22.00</td>
                                    <td className="px-2 pb-2 pt-4">Dibooking</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="mt-16 w-full">
                <div className="bg-warmGray-700 px-2 py-5">
                    <div className="flex flex-col">
                        <div className="flex px-4 py-2 border-b-2 border-warmGray-600 justify-between pb-5 ">
                            <div className="font-Roboto text-white">
                                LOGO
                            </div>
                            <div className="">
                            </div>
                            <div className="flex flex-row ">
                                <NavLink className="mx-2" to="#">
                                    <svg className="w-6 h-6 text-warmGray-500 hover:text-red-500 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                                    </svg>
                                </NavLink>
                                <NavLink className="mx-2" to="#">
                                    <svg className="w-6 h-6 text-warmGray-500 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="-23 -21 682 682.66669">
                                        <path d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" fill-rule="evenodd"/>
                                    </svg>
                                </NavLink>
                                <NavLink className="mx-2" to="#">
                                    <svg className="w-6 h-6 text-warmGray-500 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                    </svg>
                                </NavLink>
                                <NavLink className="mx-2" to="#">
                                    <svg className="w-6 h-6 text-warmGray-500 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                    </svg>
                                </NavLink>
                                <NavLink className="mx-2" to="#">
                                    <svg className="w-6 h-6 text-warmGray-500 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                                    </svg>
                                </NavLink>
                            </div>
                        </div>
                        <div className="flex items-center justify-center text-white font-Roboto text-sm py-4 pt-8 text-center">
                            <td>
                                <tr>Sejak 2020</tr>
                                <tr>Bali-Indonesia</tr>
                            </td>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
