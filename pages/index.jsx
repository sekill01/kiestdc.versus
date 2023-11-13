import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="500" src="/img/bck.png" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          Kiest Bot
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
       Discord Sunucunuzu eğlenceli hale getirmek için aradığınız bot tam karşına hemen sunucuna ekle ve hem siz ve sunucunuzun kullanıcıları eğlensin... 
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://bit.ly/47fJeDt"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Kiest Botu Ekle
              </a>
            </Link>
  <div className="py-10"></div>
  <Link href={"Top.gg Link Ekle"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Oy ver (YAKINDA)</a>
  </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/gift-left.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/gift-right.png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"Kiest Bot" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "Botumuz  ile eğlenmeye hazırmısınmısın ? botumuzu sunucunuza ekleyerek eğlenebilirsiniz.
bot hakkındaki düşüncelerinizi discorddan yazabilirsiniz" }}/>
            <a href="https://bit.ly/47fJeDt" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Botu Ekle
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-amber-500`} /> Optimizasyon</p>
                  <p className="text-gray-500 line-clamp-4">Kiest, sunucunuza özel hızlı ve eğlenceli . Resmen üst bir seviye.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-amber-500`} /> Dil</p>
                  <p className="text-gray-500 line-clamp-4">Kiest Botumuz Tüm Dilleri Destekleyen Bir Bottur (Yakın Zamanda Diller Eklenecek)</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-amber-500`} /> Güvenlik</p>
                  <p className="text-gray-500 line-clamp-4">Sunucunuzu Patlatmak için bir sebep duymuyoruz yani bizde bu işi eğlence amaçlı yapıyoruz.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Destek</p>
                  <p className="text-gray-500 line-clamp-4">Bot'u tamamen bilen ve bot üzerinde bilgili olan yetkili ekibimiz'le sizlere daha kaliteli Destek ekibi sunuyoruz.</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://cdn.discordapp.com/attachments/1164545587283238963/1173632467379441755/Screenshot_77.png?ex=6564a969&is=65523469&hm=f47ead70e79dac2f07377844b2a3c596f5025939740ba119e618ecd102d64da9&"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold">En İyi Tr Ekonomi Botu</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">Bu bot ile ticaret yapıp arkadaşların ile vakit geçirmeye hazırmısın ? o zaman botu kendi sunucuna davet et ve eğlence başlasın !</p>
                </div>
                <img src="https://cdn.discordapp.com/attachments/1164545587283238963/1173632467379441755/Screenshot_77.png?ex=6564a969&is=65523469&hm=f47ead70e79dac2f07377844b2a3c596f5025939740ba119e618ecd102d64da9&" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>

      </>
  )
}
