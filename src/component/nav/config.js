import home_ic1 from './home-ic-choose.png'
import home_ic0 from './home-ic.png'
import mine_ic1 from './mine-ic-choose.png'
import mine_ic0 from './mine-ic.png'
import music_ic1 from './music-ic-choose.png'
import music_ic0 from './music-ic.png'


const itemList = [
    {
        "url": "/index/newest",
        "character": "主页",
        "src1": home_ic1,
        "src0": home_ic0,
        "color1": "#afd776",
        "color0": "#9f9f9f",
        "index": 1
    },
    {
        "url": "/music",
        "character": "点歌",
        "src0": music_ic0,
        "src1": music_ic1,
        "color1": "#afd776",
        "color0": "#9f9f9f",
        "index": 2
    },
    {
        "url": "/selfInfor/published",
        "character": "我的",
        "color1": "#afd776",
        "color0": "#9f9f9f",
        "src0": mine_ic0,
        "src1": mine_ic1,
        "index": 3
    },
]

export { itemList } 