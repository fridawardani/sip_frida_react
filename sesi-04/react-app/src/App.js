import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (

    <>
    <section >
      <div>
        <Navbar/>
      </div>
      
      {/* Isi Konten */}
      <div className="container content-center my-20 mx-10 mr-20">
        <div className="flex flex-row pl-10 pt-10 pr-10 mb-20 justify-center">
          <div className="card mx-auto w-3/4 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)]">
            <div className="container mx-auto h-full grid content-center">
                <div className="flex flex-col justify-center">
                  <h1 className="ml-10 mt-5 mb-5 font-bold text-xl  font-bold">Hactiv8 Meetup</h1>
                  <table className="ml-10">
                    <tr >
                      <td className="font-normal text-md">Location</td>
                      <td className="font-normal text-md">Jakarta, Indonesia</td>
                    </tr>
                    <tr>
                      <td className="font-normal text-md">Members</td>
                      <td className="font-normal text-md">1,078</td>
                    </tr>
                    <tr>
                      <td className="font-normal text-md">Organizers</td>
                      <td className="font-normal text-md">Frida Eka</td>
                    </tr>
                  </table>
                </div>
                <div className="flex row ml-60 mt-10">
                  <button className="ml-10 mb-5 btn btn-md  md:btn-md bg-red-500 text-white">Join Us</button>
                </div>
            </div>
          
        </div>
        </div>

        <div className="pl-20">
          <h1 className="ml-10 mt-5 mb-5 font-bold text-2xl  font-bold">Next Meetup</h1>
        </div>

        <div className="card mx-auto w-3/4 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)]">
          <div className="mx-10 pt-10 pb-10 card-body justify-center">
            <span className="px-3 pr-3 my-20 font-normal text-md"> Awesome meetup and event<br/></span>
            <br/>
            <span className="px-3 font-normal text-md">2 September 2022 <br/></span>
            <br/>
            <span className="px-3 font-normal text-md">Hello, JavaScript & Node.js Ninjas!<br/></span>
            <span className="px-3 font-normal text-md">Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2022!<br/></span>
            <span className="px-3 font-normal text-md">The meetup format will contain some short stories and technical talks. <br/></span>
            <span className="px-3 pr-3 font-normal text-md">If you have a short announcement you'd like to share with the audience, you may do so during open mic announcement.<br/></span>
            <br/>
            <span className="px-3 font-normal text-md">Remember to bring photo ID to get through building security.<br/></span>
            <span className="px-3 font-normal text-md">. . . . . <br/></span>
            <span className="px-3 font-normal text-md">See You there!<br/></span>
            <span className="px-3 font-normal text-md">Best, Hengki, Giovanni, Sofian, Riza, Agung, The JakartaJS Organizers</span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="h-full grid mx-auto content-center">
        <div className="container mx-auto mt-2 mb-20 ml-20">
          <div className="mx-2">
            <h1 className="ml-10 font-bold text-2xl font-bold">About Meetup</h1>
          </div>
          <div className="mt-10 ml-10 flex flex-row gap-x-8">
              <span className="px-3 font-normal text-md">Come and meet other member developers interested in the JavaScript and it's library in the Greater Jakarta areas</span>
          </div>
          <div className="mt-5 ml-10 flex flex-row gap-x-8">
              <span className="px-3 font-normal text-md">Twitter: @JakartaJS and we use the hashtag #jakartajs</span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="flex flex-col lg:flex-row mb-10">
        <div className="flex items-center justify-between px-20 lg:py-0">
          <div>
            <h1 className="ml-10 font-bold text-2xl font-bold">Members</h1>
          </div>
        </div>
        {/* <div className="flex justify-between bg-blue-400 w-full">
          <div className="flex">
            <a className="block px-4 py-3 lg:py-4">See all</a>
          </div>
        </div> */}
      </div>

      <div className="card mx-auto mb-10 w-3/4 justify-center bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.30)]">
        <div className="flex flex-row pl-10 pt-5 pr-10 mb-20">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg" className="w-24 rounded-full" />
          <div className="flex flex-col ">
            <h2 className="ml-10 mt-5 mb-5 font-bold text-xl  font-bold">Organizers</h2>
              <table className="ml-10 mb-10">
                <tr >
                  <td className="font-normal text-md">Sarah</td>
                  <td className="pl-5 font-normal text-md">4 others</td>
                </tr>
              </table>
          </div>
        </div>
      </div>
    </section>

    <section className="col-span-8">
        <div className="flex flex-col lg:flex-row mb-10">
            <div className="flex items-center justify-between px-20 lg:py-0">
              <div>
                <h1 className="ml-10 font-bold text-2xl font-bold">Past Meetup</h1>
              </div>
            </div>
            {/* <div className="flex justify-between bg-blue-400 w-full">
              <div className="flex">
                <a className="block px-4 py-3 lg:py-4">See all</a>
              </div>
            </div> */}
        </div>

        <div className="grid grid-cols-3 gap-x-10 mx-20 mt-12 justify-center">
          <div  className="card p-8 mb-10 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
              <p className="text-xl font-medium text-[#3F427B] ml-4 mt-2">27 November 2017</p>
              <p className="text-sm font-regular text-[#3F427B] mt-6">#39 JakartaJS April Meetup with Kumparan</p>
              <div className="flex flex-row justify-between mt-10">
                <p className="text-sm font-regular text-[#3F427B] mt-6">139 went</p>
                <button className="btn btn-primary">VIEW</button>
              </div>
          </div>

          <div  className="card p-8 mb-10 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
            <p className="text-xl font-medium text-[#3F427B] ml-4 mt-2">27 October 2017</p>
            <p className="text-sm font-regular text-[#3F427B] mt-6">#38 JakartaJS April Meetup with BliBli</p>
            <div className="flex flex-row justify-between mt-10">
              <p className="text-sm font-regular text-[#3F427B] mt-6">113 went</p>
              <button className="btn btn-primary">VIEW</button>
            </div>
          </div>

          <div  className="card p-8 mb-10 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
            <p className="text-xl font-mediurm text-[#3F427B] ml-4 mt-2">27 September 2017</p>
            <p className="text-sm font-regular text-[#3F427B] mt-6">#37 JakartaJS April Meetup with Hacktiv8</p>
            <div className="flex flex-row justify-between mt-10">
              <p className="text-sm font-regular text-[#3F427B] mt-6">110 went</p>
              <button className="btn btn-primary">VIEW</button>
            </div>
          </div>
        </div>
    </section>

    <section>
      <div>
        <Footer/>
      </div>
    </section>

    </>
  );
}

export default App;
