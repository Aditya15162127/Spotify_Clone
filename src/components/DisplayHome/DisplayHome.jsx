import React from 'react'
import { albumsData, songsData } from '../../assets/assets'
import AlbumItem from '../AlbumItem/AlbumItem'
import SongItem from '../SongItem/SongItem'
import DisplayNav from '../DisplayNav/DisplayNav'
<head>
    <h4>
        
    </h4>
</head>
const DisplayHome = () => {

    return (
        <>
            <DisplayNav />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))}
                </div>
            </div>
            <div className='mb-4'>
                <div class='flex justify-between items-center'>
                    <div>
                        <h1 className='my-5 font-bold text-2xl'><b>Recently Played</b></h1>
                    </div>
                    <div>
                        <button>Show all</button>
                    </div>                
                </div>
                <div className='flex overflow-auto'>
                    {songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
                
            </div>
        </>
    )
}

export default DisplayHome