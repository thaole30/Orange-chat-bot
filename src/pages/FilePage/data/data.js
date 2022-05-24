import * as icons from "../svg/index";

export const statics = [
    {
        amount: '1.5GB',
        desc: 'ドキュメント',
        icon: icons.static1,
        bgColor: '#5B93FF'
    }, 
    {
        amount: '2.5GB',
        desc: '写真',
        icon: icons.static2,
        bgColor: '#FFD66B'

    }, 
    {
        amount: '10.5GB',
        desc: 'ビデオ',
        icon: icons.static3,
        bgColor: '#FF8F6B'

    }, 
    {
        amount: '5.5GB',
        desc: 'その他',
        icon: icons.static4,
        bgColor: '#605BFF'

    }, 
  
]

export const filesData = [
    {
        name: "発注書.docx",
        type: "docx",
        createdDate: "2022/01/25",
        size: "35.5",
        icon: icons.static1,
        key: Math.floor(Math.random() * 5000),
    },
    {
        name: "イベント１.jpg",
        type: "jpg",
        createdDate: "2022/01/20",
        size: "5.5",
        icon: icons.static2,
        key: Math.floor(Math.random() * 5000),

    },
    {
        name: "イベント２.mp4",
        type: "mp4",
        createdDate: "2022/03/15",
        size: "12.1",
        icon: icons.static3,
        key: Math.floor(Math.random() * 5000),

    },
    {
        name: "申し込み.zip",
        type: "zip",
        createdDate: "2022/02/18",
        size: "35.5",
        icon: icons.static4,
        key: Math.floor(Math.random() * 5000),

    },
    {
        name: "案内書.docx",
        type: "docx",
        createdDate: "2021/09/10",
        size: "30",
        icon: icons.static1,
        key: Math.floor(Math.random() * 5000),

    },
    {
        name: "紹介.mp4",
        type: "mp4",
        createdDate: "2021/07/12",
        size: "45",
        icon: icons.static3,
        key: Math.floor(Math.random() * 5000),

    },
    {
        name: "紹介.jpg",
        type: "jpg",
        createdDate: "2020/05/26",
        size: "45",
        icon: icons.static2,
        key: Math.floor(Math.random() * 5000),

    },
    {
        name: "クーポン.zip",
        type: "zip",
        createdDate: "2021/07/05",
        size: "24",
        icon: icons.static4,
        key: Math.floor(Math.random() * 5000),
    }
]


export const postsData = [
    {
        id: 1,
        name: "テーマ①",
        status: "有効", 
        content: "<p><span style=\"background-color: rgb(224, 62, 45);\"><strong>alo </strong></span>12345</p>",
        date: "2022/01/25",
        valid: true,
    },

];