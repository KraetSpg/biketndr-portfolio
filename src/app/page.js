'use client';

import Image from "next/image";
import SearchInput from "./SearchBar/Searchinput";
import SearchBar from "./SearchBar/SearchBar";
import Divider from "./divider";
import Card from "./cards/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Biker IMG: https://creator.nightcafe.studio/jobs/XAscUBRZahDQmDPvyIij/XAscUBRZahDQmDPvyIij--1--d3n1l.jpg
// Route IMG: https://roadtrippers.com/wp-content/uploads/2020/06/motorcycle-road-trips-2.jpg

export default function Home() {
  var settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 800,
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, 
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, 
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-white overflow-hidden">
      <div className="flex justify-center mt-10">
        <SearchBar />
      </div>
      <Divider />
      <h1 className="text-4xl ml-16">Biker in der Nähe</h1>
      <Slider {...settings} className="mr-8 ml-8">
        {bikerData.map((biker, index) => (
          <Card key={index} name={biker.name} region={biker.region} bike={biker.bike} level={biker.level} src={biker.src} />
        ))}
      </Slider>
      <Divider />
      <h1 className="text-4xl ml-16">Geplane Touren</h1>
      <Slider {...settings} className="mr-8 ml-8">
        {routeData.map((route, index) => (
          <Card key={index} name={route.name} region={route.region} bike={route.bike} level={route.level} src={route.src} />
        ))}
      </Slider>
    </div>
  );
}

const bikerData = [
  { name: "Hugo Boss", region: "Wien", bike: "Yamaha YZF 125", level: "Anfänger", src: "https://im.chip.de/ii/1/2/7/0/1/2/7/8/6/Screenshot_-_2024-11-08T105258.362-3522624b23f3acd1.png?im=AspectCrop%2Csize%3D%2816%2C9%29%2Cgravity%3DCenter%3BResize%3D%28936%2C526%29%2Caspect%3Dfit%3BBackgroundColor%2Ccolor%3Dffffff&hash=aaa056b75092d571295450056fb858834d76ca861e87456e918bedad4f5c0dcb" },
  { name: "Max Mustermann", region: "Graz", bike: "Honda CBR 500", level: "Fortgeschritten", src: "https://www.lokalmatador.de/fileadmin/_processed_/9/7/csm_Zweirad-Motorradfahrer-Kurvenlage-ampnet_photo_4c77bb61de.jpg" },
  { name: "Anna Schmidt", region: "Salzburg", bike: "Kawasaki Ninja 300", level: "Profi", src: "https://img.zeit.de/news/2020-05/14/motorradfahrer-muessen-auffallen-image.jpeg/standard__1120x840" },
  { name: "John Doe", region: "Linz", bike: "Suzuki GSX-R600", level: "Anfänger", src: "https://www.merkur.de/assets/images/34/475/34475534-ein-motorradfahrer-faehrt-zuegig-durch-die-komoedienstrasse-koeln-02-05-2018-motorcyclist-drives-3Aec.jpg" },
  { name: "Jane Roe", region: "Innsbruck", bike: "Ducati Monster 821", level: "Fortgeschritten", src: "https://cdn.pixabay.com/photo/2020/06/08/04/30/motorcycle-5272906_1280.jpg" },
  { name: "Peter Parker", region: "Klagenfurt", bike: "Harley Davidson Iron 883", level: "Anfänger", src: "https://cdn.pixabay.com/photo/2021/11/04/06/09/motorcycle-6767488_960_720.jpg" },
  { name: "Bruce Wayne", region: "Villach", bike: "Ducati Panigale V4", level: "Profi", src: "https://cruizador.com/wp-content/uploads/2023/09/Cruizador-Skilled-Biker-1140x760.jpg" },
  { name: "Clark Kent", region: "St. Pölten", bike: "BMW S1000RR", level: "Fortgeschritten", src: "https://bnn.de/img/786027/5qNRSeuZYbin9lbGPgSZYw/motorradfahrer?size=1920&format=jpeg&variant=LANDSCAPE_16x9" },
  { name: "Diana Prince", region: "Bregenz", bike: "Triumph Street Triple", level: "Anfänger", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5P3NRq_6HW432r1RSApauRmL-TjgJpG8x4A&s" }
];

const routeData = [
  { name: "Fahrt nach Mariazell", region: "NÖ", bike: "Yamaha YZF 125", level: "Anfänger", src: "https://roadtrippers.com/wp-content/uploads/2020/06/motorcycle-road-trips-2.jpg" },
  { name: "Tour durch die Alpen", region: "Tirol", bike: "BMW R1250GS", level: "Fortgeschritten", src: "https://www.helmexpress.com/magazin/wp-content/uploads/2021/04/motorrad-fahren-gebirge-750x500-1.jpg" },
  { name: "Küstenfahrt", region: "Kärnten", bike: "Ducati Multistrada", level: "Profi", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65db2932oVXLYsZ7K81Q8yum9CV7hHPWwqQ&s" },
  { name: "Stadtrundfahrt", region: "Wien", bike: "Honda CB500X", level: "Anfänger", src: "https://i.computer-bild.de/imgs/1/3/9/1/5/5/6/7/Zero-Aufmacher-baccc287addbe495.jpg?impolicy=full_content" },
  { name: "Wald und Wiesen Tour", region: "Steiermark", bike: "KTM 1290 Super Adventure", level: "Fortgeschritten", src: "https://assets.adac.de/image/upload/ar_16:9,c_fill,f_auto,g_auto,q_auto:eco,w_1256/v1/ADAC-eV/KOR/Bilder/ADAC-Prod/modtorrad-touren-oesterreich-postalm-kehre-2406_apmjro.jpeg" },
  { name: "Seen Rundfahrt", region: "Salzburg", bike: "Suzuki V-Strom 650", level: "Anfänger", src: "https://www.alpen-motorradhotels.com/fileadmin/user_upload/wallis-seentour.jpg" },
  { name: "Grenztour", region: "Burgenland", bike: "Harley Davidson Road King", level: "Profi", src: "https://www.gps-tour.info/redx/tools/mb_image.php/ct.VZO2zQ/gid.8/file.zY2Jj9KhVR-fnJ3ta2rpBFaZ07u3roZTqQoQQrh-ge4G4G5WHKn8AKLe4MSBNd63GDHDKvAYddnsB3VEJ5MguKln1N2NiYw/Grenzen_NRW_Karte_1.jpg" },
  { name: "Weinviertel Tour", region: "Niederösterreich", bike: "Triumph Tiger 900", level: "Fortgeschritten", src: "https://kurvenkoenig.de/assets/images/4/BurgenlandKellergasse_02-88b33649.jpg" }
];