import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UploadForm from './components/Upload';
import Home from './components/Home';
import Electronics from './components/Electronics';
import Clothing from './components/Clothing';
import Sports from './components/Sports';
import Food from './components/Food';
import Education from './components/Education';
import Cardinfo from './components/Cardinfo';
import Aboutus from './components/Aboutus';
import LoginNav from './components/LoginNav';
import Login from './components/Login'
import Signup from './components/Signup';
import ItemState from '../src/ItemContext/ItemState';
import Myitems from './components/Myitems';

const App = () => {
  const [home, sethome] = useState([
    {
      name: 'CHARGER',
      itemcategory: 'ELECTRONICS',
      imageitem: "https://images-na.ssl-images-amazon.com/images/I/61DMGqWEK8L._AC_SL1500_.jpg",
      description: 'Sharing enriches lives!',
      email: 'james@example.com',
      personname: 'SAMUEL',
      contact: 778778,
      address: '123 Main St'
    },
    {
      name: 'SWEATER',
      itemcategory: 'clothing',
      imageitem: "https://th.bing.com/th/id/R.b69c2cff3b3870538176c8e8bfc3e865?rik=dAt2xzEd8%2bSNMQ&riu=http%3a%2f%2fimage.sportsmansguide.com%2fadimgs%2fl%2f1%2f173035r_ts.jpg&ehk=L523WBniLocWj03dHvFpOK%2bvb78%2fTkz5xovi4j3PHGo%3d&risl=&pid=ImgRaw&r=0",
      description: 'Together we can make a difference!',
      email: 'grace@example.com',
      personname: 'MICHAEL',
      contact: 251358,
      address: '789 Oak St'
    },
    {
      name: 'DC PANDEY PHYSICS',
      itemcategory: 'education',
      imageitem: "https://m.media-amazon.com/images/I/61W5rsaDnEL._SX698_BO1,204,203,200_.jpg",
      description: 'Sharing brings joy!',
      email: 'william@example.com',
      personname: 'OLIVIA',
      contact: 438775,
      address: '123 Main St'
    },
  ]);
  const [cloth, setcloth] = useState([
    {
      name: "SafariJacket",
      itemcategory: "clothing",
      imageitem: "https://store.explorers.org/cdn/shop/files/SafariJacket_Khaki_1_1800x1800.jpg?v=1683127581" ,
      description: "Revolutionizing the way you live!",
      email: "info@innovatetech.com",
      personname: "Sophia",
      contact: 111222333,
      address: "101 Innovation Blvd"
    },
    {
      name: "Raincoat",
      itemcategory: "clothing",
      imageitem:" https://content.jdmagicbox.com/rep/b2b/plastic-raincoat/plastic-raincoat-4.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit",
      description: "Sustainable solutions for a greener tomorrow!",
      email: "sales@ecogadgets.com",
      personname: "David",
      contact: 444555666,
      address: "202 Eco Street"
    },
    {
      name: "Gloves",
      itemcategory: "clothing",
      imageitem: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc2%2F8b%2Fc28bc31599c65ce3b5ad5d2485b1aa8d8b3d5c90.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_gloves%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D ",
      description: "Turning your digital dreams into reality!",
      email: "info@digitaldreams.com",
      personname: "Olivia",
      contact: 777888999,
      address: "303 Dream Ave"
    },
  ]);
  const [electronics, setelectronics] = useState([
    {
        name: 'OppoEarBuds',
      itemcategory: 'electronics',
      imageitem:" https://media.karousell.com/media/photos/products/2021/7/10/oppo_wireless_earbuds_t508_1625892317_e3108ed9_progressive.jpg",
      description: 'Explore the world of gadgets!',
      email: 'info@techhaven.com',
      personname: 'Sarah',
      contact: 123456789,
      address: '789 Oak St'
    },
    {
        name: 'PhilipsSpeaker',
      itemcategory: 'electronics',
      imageitem:" https://www.philips.co.in/c-dam/b2c/category-pages/sound-and-vision/portable-audio/in/wireless-speakers/TAS1505B-hero-product-image.jpg",
      description: 'Innovative solutions for modern life!',
      email: 'sales@gizmogalaxy.com',
      personname: 'Michael',
      contact: 987654321,
      address: '321 Pine St'
    },
    {
        name: 'DigitalWatch',
      itemcategory: 'electronics',
      imageitem:" https://image.made-in-china.com/2f0j00IMVlyUWaYYfd/Wholesale-Original-Used-Smart-Watches-for-Apple-Watch-Series-8-S7-40mm-42mm-S8-Second-Hand-Watch-for-iWatch.webp",
      description: 'Powering your passions with technology!',
      email: 'support@electrocraft.com',
      personname: 'Emily',
      contact: 555555555,
      address: '456 Maple St'
    },
    {
        name: 'TimexAnalogWatch',
      itemcategory: 'electronics',
      imageitem:" https://preview.redd.it/timex-second-hand-alignment-off-v0-u14zh0hq6qu81.jpg?auto=webp&s=db4371451ae5acfc5c0d11c9d28fab5ed760c695" ,
      description: 'Empowering your lifestyle with smart choices!',
      email: 'info@smarttechsolutions.com',
      personname: 'John',
      contact: 777777777,
      address: '789 Elm St'
    }
  ])


  const [sports, setsports] = useState([
    {
      name: "Shuttle",
      itemcategory: "sports",
      imageitem: "https://syncoshop.com/cdn/shop/products/1_1_10a380cd-8fbc-44c9-a284-8116dc266ee3.png?v=1682153963",
      description: "Discover the wonders of technology!",
      email: "support@techwonders.com",
      personname: "Ethan",
      contact: 222333444,
      address: "404 Tech Lane"
    },
    {
      name: "CrickeBat",
      itemcategory: "sports",
      imageitem: "https://cricketerpro.com/wp-content/uploads/2021/09/DSC_4561-scaled.jpg" ,
      description: "Bringing tomorrow's technology to you today!",
      email: "info@futuregizmos.com",
      personname: "Isabella",
      contact: 555666777,
      address: "505 Futuristic Blvd"
    },
    {
      name: "BackPack",
      itemcategory: "sports",
      imageitem:" https://5.imimg.com/data5/FZ/QU/NC/SELLER-38061751/best-small-gym-bags.jpg",
      description: "Empowering your digital journey!",
      email: "sales@cybertechsolutions.com",
      personname: "Noah",
      contact: 888999000,
      address: "606 Cyber Street"
    },
  ])

  const [others, setothers] = useState([
    
    {
      name: "TVRemote",
      itemcategory: "others",
      imageitem:"https://retailonline.in/wp-content/uploads/2022/09/voice-bluetooth-remote-smart-tv-remote-control-compatible-for-mi-original-imagbmpcpbqmbcfs.webp",
      description: "Where innovation meets expertise!",
      email: "info@techgenius.com",
      personname: "Emma",
      contact: 111222333,
      address: "111 Innovation Blvd"
    },
    {
      name: "StudyTable",
      itemcategory: "others",
      imageitem: "https://www.evok.in/media/catalog/product/f/o/foocsdpbmtwn71469d_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=600&canvas=600:500",
      description: "Pioneering the future of technology!",
      email: "sales@futuretechinnovations.com",
      personname: "Daniel",
      contact: 444555666,
      address: "222 Future Ave"
    },
    {
      name: "Drafter",
      itemcategory: "others",
      imageitem: "https://isomarsshop.in/cdn/shop/products/414zQF71b6L_600x.jpg?v=1539771341" ,
      description: "Experience the joy of digital living!",
      email: "info@digitaldelight.com",
      personname: "Sophie",
      contact: 777888999,
      address: "333 Digital Lane"
    },
    {
      name: "CarBodyCover",
      itemcategory: "others",
      imageitem: "https://cdn.media.halfords.com/i/washford/268806a?w=620&h=480&qlt=default&fmt=auto&v=1",
      description: "Embark on a journey of technological exploration!",
      email: "support@techtrek.com",
      personname: "Alexander",
      contact: 222333444,
      address: "444 Trek Blvd"
    },
    {
      name: "ChargerCable",
      itemcategory: "others",
      imageitem: "https://images-cdn.ubuy.co.in/6521486bce0db92e7c628c73-90w-laptop-charger-for-dell-latitude.jpg",
      description: "Driving innovation forward into the future!",
      email: "info@futureforwardtech.com",
      personname: "Charlotte",
      contact: 555666777,
      address: "555 Forward St"
    }
  
    ])

    const [education, seteducation] = useState([
      {
        name: "TableMate",
        itemcategory: "education",
        imageitem: "https://www.tablemate.in/wp-content/uploads/2019/10/img_8.jpg" ,
        description: "Enhancing your life with smart technology!",
        email: "info@smartlifeinnovations.com",
        personname: "Ava",
        contact: 123123123,
        address: "707 Smart Ave"
      },
      {
        name: "DrawingBoard",
        itemcategory: "education",
        imageitem: "https://m.media-amazon.com/images/I/619cNPlkmZL.AC_UF894,1000_QL80.jpg" ,
        description: "Your partner in navigating the tech world!",
        email: "support@techsavvysolutions.com",
        personname: "William",
        contact: 456456456,
        address: "808 Tech Blvd"
      },
      {
        name: "WhiteBoard",
        itemcategory: "education",
        imageitem: "https://media.istockphoto.com/id/1306350466/vector/empty-white-marker-board-on-transparent-background-realistic-office-whiteboard-vector.jpg?s=612x612&w=0&k=20&c=hCNSRq-L3jpjEVeu0nU4mfhJLRD3Y4u5cSlOEUQ_IRY=" ,
        description: "The one-stop shop for all your",
        email: "info@smartgadgetemporium.com",
        personname: "Mia",
        contact: 789789789,
        address: "909 Gadget Lane"
      },
  
    ])

  return (
    <>
    <ItemState>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/upload' element={<UploadForm  
            setelectronics={setelectronics}
            electronics={electronics}
            cloth={cloth} setcloth={setcloth}
            sports={sports} setsports={setsports}
            others={others} setothers={setothers}
            education={education} seteducation={seteducation}
            arr={home} sethome={sethome}
        />} />
        <Route path='/electronics' element={<Electronics electronics={electronics}  />} />
        <Route path='/clothing' element={<Clothing  cloth={cloth}  />} />
        <Route path='/sports' element={<Sports sports={sports}  />} />
        <Route path='/others' element={<Food others={others} />} />
        <Route path='/education' element={<Education education={education}  />} />
        <Route path='/home' element={<Home arr={home} />} />
        <Route path='/cardinfo' element={<Cardinfo />} />
        <Route path='/aboutus' element={<Aboutus/>}/>
        
        <Route path='/myitems' element={<Myitems education={education}/>}/>
      </Routes>
    </Router>
    </ItemState>
    </>
  );
};

export default App;