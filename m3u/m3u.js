import download from 'download'
import fs from 'fs'
const link = 'https://hot-box-gen.mushroomtrack.com/hls/Upo_U0FCuMsee5hv4fE4Lw/1659455013/25000/25669/25669.m3u8'

const down = async()=> {
    await download(link, 'dist');
};

down()



