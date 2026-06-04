


import dealimg1 from "../assets/c22c23_0fa2a9bb97f443658acb747221ff337b~mv2.avif";
import dealimg2 from "../assets/comp7.avif";
import dealimg3 from "../assets/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.avif";
import dealimg4 from "../assets/c22c23_9a6d29ecf9c640b28cc79f695e9fb3c2~mv2.avif";
import dealimg5 from "../assets/c22c23_c25f748ee2264db6a3767d99717a2b84~mv2.avif";
import dealimg7 from "../assets/dealimgairpods.avif";
import dealimg8 from "../assets/dealimgtab.avif";
import dealimg9 from "../assets/dealmobile.avif";
import dealimg10 from "../assets/dealtv2.avif";
import dealimg11 from "../assets/dealwtch.avif";
import dealimg12 from "../assets/dealdb.avif";
import os1 from "../assets/onsalemobile.avif";
import os2 from "../assets/onsalewatch.avif";
import os3 from "../assets/oscamera.avif";
import os4 from "../assets/osglass.avif";
import os5 from "../assets/oslap.avif";
import os6 from "../assets/osspeaker.avif";
import comp1 from "../assets/comp1.avif";
import comp2 from "../assets/comp2.avif";
import comp3 from "../assets/comp3.avif";
import comp4 from "../assets/comp4.avif";
import comp5 from "../assets/comp5.avif";
import dc1 from "../assets/dc1.avif";
import dc2 from "../assets/dc2.avif";
import dc3 from "../assets/dc3.avif";
import dc4 from "../assets/dc4.avif";
import dc5 from "../assets/dc5.avif";
import hp1 from "../assets/hp1.avif";
import hp2 from "../assets/hp2.avif";
import hp3 from "../assets/hp3.avif";
import hp4 from "../assets/hp4.avif";
import hp5 from "../assets/hp5.avif";
import hp6 from "../assets/hp6.avif";
import hp7 from "../assets/hh1.png";
import hp8 from "../assets/hh2.png";
import hp9 from "../assets/hp10.png";
import hp10 from "../assets/hp11.png";
import hp11 from "../assets/hp13.png";
import hp12 from "../assets/hp14.png";
import hp13 from "../assets/hp15.png";
import m1 from "../assets/m1.avif";
import m2 from "../assets/m2.avif";
import m4 from "../assets/m4.avif";
import s1 from "../assets/s1.avif";
import s2 from "../assets/s2.avif";
import s3 from "../assets/s3.avif";
import s4 from "../assets/s4.avif";
import s6 from "../assets/s6.avif";
import t1 from "../assets/t1.avif";
import t2 from "../assets/t2.avif";
import t3 from "../assets/t3.avif";
import t4 from "../assets/t4.avif";
import tv1 from "../assets/tv1.avif";
import tv2 from "../assets/tv2.avif";
import tv3 from "../assets/tv3.avif";
import hc1 from "../assets/hc1.avif";
import hc2 from "../assets/hc2.avif";
import w1 from "../assets/w1.avif";
import w2 from "../assets/w2.avif";
import w3 from "../assets/w3.avif";
import w4 from "../assets/w4.avif";
import gaming from '../assets/gaming.png'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.png'
import kb1 from '../assets/kb1.png'
import monitor from '../assets/monitor.png'
import monitor2 from '../assets/monitor2.png'
import mouse1 from '../assets/mouse1.png'
import mouse2 from '../assets/mouse2.png'
import mouse3 from '../assets/mou3.png'

    const Productlist = [
    {
      id: 1,
      image: hp7,
      content: "In-ear Noise Cancelling HeadPhones",
      delete: "$95.00",
      price: "$85.00",
      sale: true,
      category: "Headphones",
    },
    {
      id: 2,
      image: dealimg2,
      content: "JP Gaming Laptop 15.6 Laptop 256GB",
      price: "$70.00",
      category: "Computers",
    },
    {
      id: 3,
      image: dealimg3,
      content: "HKI Tech Quadcopter Drone With 360 Camera",
      delete: "$95.00",
      price: "$75.00",
      sale: true,
      category: "Drones&Cameras",
    },
    {
      id: 4,
      image: dealimg4,
      content: "JP - Space Tablet 10.4 Wi-Fi 32GB",
      delete: "$70.00",
      price: "$60.00",
      sale: true,
      category: "Tablets",
    },
    {
      id: 5,
      image: dealimg5,
      content: "Megapixel Waterproof Mini Digital Camera",
      delete: "$115.00",
      price: "$100.00",
      sale: true,
      category: "Drones&Cameras",
    },
    {
      id: 6,
      image: hp10,
      content: "AeroWave 250",
      delete: "$115.00",
      price: "$100.00",
       sale: true,
      category: "Headphones",
    },
    {
      id: 7,
      image: dealimg8,
      content: "Ocean Pro 11 - 12.3 Touch Screen",
      delete: "$55.00",
      price: "$45.50",
      sale: true,
      category: "Tablets",
    },
    {
      id: 8,
      image: dealimg9,
      content: "Smartphone Z Pixel Max 128GB Unlocked",
      price: "$50.00",
      category: "Mobile",
    },
    {
      id: 9,
      image: dealimg10,
      content: "Shel 50 Class LED 4K UHD Smart TV",
      delete: "$59.99",
      price: "$49.99",
      sale: true,
      category: "TV&HomeCinema",
    },
    {
      id: 10,
      image: dealimg11,
      content: "Fitboot Inspire Fitness Tracker",
      price: "$29.00",
      category: "Wearable",
    },
    {
      id: 11,
      image: dealimg12,
      content: "SDK Portable Bluetooth Speaker",
      price: "$10.50",
      category: "Speakers",
    },
    {
      id: 12,
      image: os1,
      content: "OVE Light Space 5G, 128GB",
      delete: "$95.00",
      price: "$ 85.00",
      sale: true,
      category: "Mobile",
    },
    {
      id: 13,
      image: os2,
      content: 
        "Space Moon Smartwatch With Charge " ,

      delete: "$80.00",
      price: "$ 70.00",
      sale: true,
      category: "Wearable",
    },
    {
      id: 14,
      image: os3,
      content: 
        " H1C Indoor Wireless 1080p  Network Security Camera",
        
      
      delete: "$95.00",
      price: "$ 85.00",
      sale: true,
      category: "Drones&Cameras",
    },
    {
      id: 15,
      image: os4,
      content: 
        "Journey Glass XD  Virtual Reality Headset "
      ,
      delete: "$70.00",
      price: "$ 60.00",
      sale: true,
      category: "Wearable",
    },
    {
      id: 16,
      image: os5,
      content: "Pilates 16 Touch Screen Laptop 24GB Memory",
      delete: "$100.00",
      price: "$ 90.00",
      sale: true,
      category: "Computers",
    },

    {
      id: 17,
      image: os6,
      content: "Turn5 Portable Bluetooth Speaker",
      delete: "$30.00",
      price: "$ 20.00",
      sale: true,
      category: "Speakers",
    },
    {
      id: 18,
      image: comp1,
      content: "Pilates 14 Touch Screen Laptop 12GB Memory",
      price: "$ 70.00",
      category: "Computers",
    },
    {
      id: 19,
      image: comp2,
      content: "Corr Desktop 12GB Memory, 8GB RAM",
      category: "Computers",
      price: "$ 80.00",
    },
    {
      id: 20,
      image: comp3,
      content: "MSP 14 Laptop 16GB Memory, Carbon Gray",
      category: "Computers",
      price: "$ 20.00",
    },
    {
      id: 21,
      image: comp4,
      content: "Corr Desktop 24GB Memory + 29 Screen Keyboard & Mouse",
      category: "Computers",
      price: "$ 85.00",
    },
    {
      id: 22,
      image: comp5,
      content: "Pilates 16 Touch Screen Laptop 12GB Memory",
      price: "$ 60.00",
      category: "Computers",
    },
    {
      id: 23,
      image: dc1,
      content: "Pantony 180 20.0 Megapixel Digital Camera",
      price: "$ 60.00",
      category: "Drones&Cameras",
    },
    {
      id: 24,
      image: dc2,
      content: "EXE Mini Drone With Sky Controller",
      price: "$60.00",
      category: "Drones&Cameras",
    },
    {
      id: 25,
      image: dc3,
      content: "Pantony DSLR Old School Camera With 18-55mm Lens",
      delete: " $75.00",
      price: "$60.00",
      sale: true,
      category: "Drones&Cameras",
    },
    {
      id: 26,
      image: dc4,
      content: "Wave Mini 4 Quadcopter With Remote Controller",
      price: "$60.00",
      category: "Drones&Cameras",
    },
    {
      id: 27,
      image: dc5,
      content: "Shak Outdoor Spotlight Security Camera",
      price: "$70.00",
      category: "Drones&Cameras",
    },
    {
      id: 28,
      image: hp1,
      content: "Space Buds True Wireless Earbud Headphones",
      price: "$85.00",
      category: "Headphones",
    },
    {
      id: 29,
      image: hp2,
      content: "Drums Pro Wireless On-Ear Headphones",
      price: "$65.00",
      category: "Headphones",
    },
    {
      id: 30,
      image: hp3,
      content: "MX50 Wired Earbud Headphones",
      price: "$60.00",
      category: "Headphones",
    },
    {
      id: 31,
      image: hp4,
      content: " Pantony Buds Wireless Earbud Headphones",
      price: "$60.00",
      category: "Headphones",
    },
    {
      id: 32,
      image: hp5,
      content: "Balo Headphones 700 Wireless Noise Cancelling",
      price: "$70.00",
      delete: "$85.00",
      sale: true,
      category: "Headphones",
    },
    {
      id: 33,
      image: hp6,
      content: "Surround Sound 10.2 Gaming Headset",
      price: "$70.00",
      delete: "$85.00",
      sale: true,
      category: "Headphones",
    },

    {
      id: 34,
      image: m1,
      content: "Pantony X21 5G, 128GB With Z Pen",
      price: "$80.00",
      category: "Mobile",
    },
    {
      id: 35,
      image: m2,
      content: "JP Exmax Phantom, 5G, 16GB",
      price: "$80.00",
      category: "Mobile",
    },

    {
      id: 36,
      image: m4,
      content: "Go XPD Protector 5G, 16GB",
      price: "$65.00",
      delete: "$85.00",
      sale: true,
      category: "Mobile",
    },
    {
      id: 37,
      image: s1,
      content: "TV Bluetooth Soundbar With HDMI-ARC Connectivity",
      price: "$60.00",
      delete: "$75.00",
      sale: true,
      category: "Speakers",
    },
    {
      id: 38,
      image: s2,
      content: "Pill Shape Silver Portable Bluetooth Speaker",
      price: "$80.00",
      category: "Speakers",
    },
    {
      id: 39,
      image: s3,
      content: "Round Mini Portable Bluetooth Speaker",
      price: "$70.00",
      delete: "$85.00",
      sale: true,
      category: "Speakers",
    },
    {
      id: 40,
      image: s4,
      content: "SXD Mini Portable Bluetooth Speaker",
      price: "$80.00",
      category: "Speakers",
    },
    {
      id: 41,
      image: s6,
      content: "Studio 8 Portable Bluetooth Speaker",
      price: "$85.00",
      category: "Speakers",
    },
    {
      id: 42,
      image: t1,

      content: "Sheer Pro 7.9-Inch Mini Tablet",
      price: "$60.00",
      delete: "$75.00",
      sale: true,
      category: "Tablets",
    },
    {
      id: 43,
      image: t2,
      content: "Corr Playtime 10.3 32GB With Wi-Fi",
      price: "$85.00",
      category: "Tablets",
    },
    {
      id: 44,
      image: t3,
      content: "Ove Tablet FD Plus - 10.3, 32GB",
      price: "$85.00",
      delete: "70.00",
      sale: true,
      category: "Tablets",
    },
    {
      id: 45,
      image: t4,
      content: "Pilates Go 10.5 Touch-Screen, 64GB With Cover",
      price: "$80.00",
      category: "Tablets",
    },
    {
      id: 46,
      image: tv1,
      content: "Shel 50 Class LED 4K UHD Smart TV",
      price: "$85.00",
      category: "TV&HomeCinema",
    },
    {
      id: 47,
      image: tv2,
      content: " 42 Class Full HD Smart Streamer TV",
      price: "$60.00",
      category: "TV&HomeCinema",
    },
    {
      id: 48,
      image: tv3,
      content: " Shel 40 Class LED Full HD Smart TV",
      price: "$60.00",
      category: "TV&HomeCinema",
    },
    {
      id: 49,
      image: hc1,
      content: "JP 470 Wireless Mini Projector",
      price: "$80.00",
      category: "TV&HomeCinema",
    },
    {
      id: 50,
      image: hc2,
      content: "Wilsom Home Cinema 4K PRO-UHD 3LCD Projector",
      price: "$85.00",
      category: "TV&HomeCinema",
    },
    {
      id: 51,
      image: w1,
      content: "FitWatch XDH Fitness Smart Watch",
      price: "$85.00",
      category: "Wearable",
    },
    {
      id: 52,
      image: w2,
      content: "Pantony 6P Activity Tracker",
      price: "$85.00",
      category: "Wearable",
    },
    {
      id: 53,
      image: w3,
      content: "Safay GEN 2 256GB VR headset With Touch Controllers",
      price: "$85.00",
      category: "Wearable",   
    },
    {
      id: 54,
      image: w4,
      content: "HV Virtual Reality System for PC ",
      price: "$85.00",
      category: "Wearable",
    },
  {
      id: 55,
      image: dealimg1,
      content: "Wireless Earpods",
      delete: "$95.00",
      price: "$85.00",
      sale: true,
      category: "Headphones",
    },
    {
      id: 56,
      image: hp8,
      content: "In-ear Noise Cancelling HeadPhones",
      price: "$85.00",
      category: "Headphones",
    },
    {
      id: 57,
      image: gaming,
      content: "NovaStick Elite N5",
     delete: "$95.00",
      price: "$85.00",  
      sale: true,
      category: "Gaming",
    },
     {
      id: 58,
      image: g2,
      content: "TitanJoy Pro X1",
      price: "$49.99",
      category: "Gaming",
    },
     {
      id: 59,
      image: g3,
      content: "HyperStick H7 Pro",
      price: "$39.99",
      category: "Gaming",
    },
     {
      id: 60,
      image: dealimg7,
      content: "White Buds Wireless Earbud Headphones",
      price: "$10.50",
      category: "Headphones",
    },
     {
      id: 61,
      image: hp9,
      content: "Nova SoundPro Gaming 3000",
      delete: "$95.00",
      price: "$85.00",  
      sale: true,
      category: "Gaming",
    },
     {
      id: 62,
      image: hp11,
      content: "AeroBeats 500",
      delete: "$95.00",
      price: "$85.00",  
      sale: true,
      category: "Headphones",
    },
     {
      id: 63,
      image: hp12,
      content: "NeuroSound 700",
      delete: "$95.00",
      price: "$85.00",  
      sale: true,
      category: "Headphones",
    },
     {
      id: 64,
      image: hp13,
      content: "QuantumPulse X1(0000)",
      delete: "$85.00",
      price: "$75.00",  
      sale: true,
      category: "Gaming",
    },
     {
      id: 65,
      image: kb1,
      content: "QuantumBoard X2(0000)",
      delete: "$35.00",
      price: "$30.00",  
      sale: true,
      category: "Gaming",
    },
     {
      id: 66,
      image: monitor,
      content: "NovaScreen Ultra",
      delete: "$65.00",
      price: "$55.00",  
      sale: true,
      category: "Gaming",
    },
     {
      id: 67,
      image: monitor2,
      content: "LumiVision",
      delete: "$75.00",
      price: "$65.00",  
      sale: true,
      category: "Gaming",
    },
     {
      id: 68,
      image: mouse1,
      content: "Grip X5",
      delete: "$75.00",
      price: "$65.00",  
      sale: true,
      category: "Gaming",
    },
     {
      id: 69,
      image: mouse2,
      content: "AeroTrack 300",
      delete: "$75.00",
      price: "$45.00",  
      sale: true,
      category: "Gaming",
    },
     {
      id: 70,
      image: mouse3,
      content: "SyncroMouse Pro",
     
      price: "$40.00",  
      
      category: "Gaming",
    },

    
  ]







export default Productlist;
