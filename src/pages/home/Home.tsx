import React from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import Footer from '../../components/footer/Footer';



function Home() {
    return (
        <>
        <div className=" bg-[#612a52] flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindxs!</h2>
              <p className='text-xl'>Expresse os seus sentimentos!</p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className='rounded bg-white text-[#fe79b9] py-2 px-4'>Ver postagens</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaPostagens />
        < Footer />
      </>
    );
}

export default Home;