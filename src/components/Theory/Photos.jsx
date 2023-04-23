import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Photos = () => {
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    const handleAPI = async() => {
        try{
            const res = await axios.get(
                `https://picsum.photos/v2/list?page=${page}&limit=8`
                )
            return res.data;
        }catch(err) {
            console.error(err);
        }
    }

    const handleLoadingPhotos = async() => {
        try{
            const resPhotos = await handleAPI();
            setPage(page+1);
            setPhotos([...photos, ...resPhotos]);
        }catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        handleLoadingPhotos();
        console.log(1);
    },[]);

    return (
        <div className='py-[48px] px-[64px]'>
            <div className="listPhoto grid grid-cols-4 gap-5 ">
                {
                    photos.length > 0 && photos.map(photo => {
                        return (
                            <div key={photo.id} 
                                className='shadow-xl bg-[#f1f1f1] border 
                                    border-[#ccc] p-[8px] rounded-md h-max'
                                >
                                <img className='w-full' src={photo.download_url} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-center my-[48px]'>
                <button onClick={handleLoadingPhotos}  className='bg-purple-700 text-white text-[18px] 
                                    px-[28px] py-[14px] rounded-md hover:opacity-60'
                >Load more</button>
            </div>
        </div>
    );
};

export default Photos;