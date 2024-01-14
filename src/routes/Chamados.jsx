import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import empresa from '../assets/empresa.png'
import Chamado from '../components/Chamado'

const chamados = [
  {
    title: "Notebook Dell Inspiron 15",
    id: "#0000",
    date: "13:45",
    resumo: "Estou com um problema com a ativação do Windows",
    status: 0,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ticket: "111-111"
  },
  {
    title: "Notebook",
    id: "0XC000",
    date: "13:45",
    resumo: "Lorem Ipsum",
    status: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ticket: "222-222"
  },
  {
    title: "Notebook Dell Inspiron 15",
    id: "#0000",
    date: "13:45",
    resumo: "Estou com um problema com a ativação do Windows",
    status: 0,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ticket: "111-111"
  },
  {
    title: "Notebook",
    id: "0XC000",
    date: "13:45",
    resumo: "Lorem Ipsum",
    status: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ticket: "222-222"
  },
  {
    title: "Notebook Dell Inspiron 15",
    id: "#0000",
    date: "13:45",
    resumo: "Estou com um problema com a ativação do Windows",
    status: 0,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ticket: "111-111"
  },
  {
    title: "Notebook",
    id: "0XC000",
    date: "13:45",
    resumo: "Lorem Ipsum",
    status: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ticket: "222-222"
  }

]

const Chamados = () => {
  return (
    <div className='contentFrame contentChamados'>
      <div className='companySidebar'>
        <div className='companyFrame'>
          <img className='companyLogo' src={empresa} alt="company logo" />
          <div className='companyDesc'>
            <h4>Cotech Sistemas</h4>
            <p>XX.XXX.XXX/0001-XX.</p>
          </div>
        </div>
        <h1>Explore chamados</h1>
        <p>Experimente pesquisar por empresas</p>
        <div className='companySearch'>
          <input type="search" placeholder='Empresa, Ticket, Usuário...'/>
        </div>
        <h2>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.25 1.5H6.75C5.92275 1.5 5.25 2.17275 5.25 3V7.5H3.75C2.92275 7.5 2.25 8.17275 2.25 9V15.75C2.25 15.9489 2.32902 16.1397 2.46967 16.2803C2.61032 16.421 2.80109 16.5 3 16.5H15C15.1989 16.5 15.3897 16.421 15.5303 16.2803C15.671 16.1397 15.75 15.9489 15.75 15.75V3C15.75 2.17275 15.0773 1.5 14.25 1.5ZM3.75 9H8.25V15H3.75V9ZM14.25 15H9.75V9C9.75 8.17275 9.07725 7.5 8.25 7.5H6.75V3H14.25V15Z" fill="#8E8BA7"/>
          <path d="M8.25 4.5H9.75V6H8.25V4.5ZM11.25 4.5H12.75V6H11.25V4.5ZM11.25 7.52325H12.75V9H11.25V7.52325ZM11.25 10.5H12.75V12H11.25V10.5ZM5.25 10.5008H6.75V12.0007H5.25V10.5008Z" fill="#8E8BA7"/>
        </svg>

          Navegue por empresas
        </h2>
        <div className='companyList'>
          <div className='company selected'>Cotech Sistemas</div>
          <div className='company'>NeoBrasil</div>
          <div className='company'>Samsung</div>
          <div className='company'>KeepSafe</div>
          <div className='company'>Inovari</div>
          <div className='company'>Inovari</div>
          <div className='company'>Inovari</div>
          <div className='company'>Inovari</div>
          <div className='company'>Inovari</div>
          <div className='company'>Inovari</div>
          <div className='company'>Inovari</div>
          <div className='company'>Inovari</div>
        </div>
      </div>
      <div className='chamadosContent'>
        <div className='filterBar'>
        <NavLink to='/chamados'end className={({ isActive }) => (isActive ? 'filterTab active' : 'filterTab')}>
          <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7143 8.66667H7.14286V6.93333H10.7143V8.66667ZM16.0714 10.4H7.14286V12.1333H16.0714V10.4ZM25 9.568V24.2667C25 25.22 24.1964 26 23.2143 26H1.78571C0.803571 26 0 25.22 0 24.2667V9.568C0 8.996 0.285714 8.476 0.75 8.164L3.57143 6.20533V5.2C3.57143 4.24667 4.375 3.46667 5.35714 3.46667H7.5L12.5 0L17.5 3.46667H19.6429C20.625 3.46667 21.4286 4.24667 21.4286 5.2V6.20533L24.25 8.164C24.7321 8.49333 25 8.996 25 9.568ZM5.35714 13L12.5 17.3333L19.6429 13V5.2H5.35714V13ZM1.78571 23.4L9.82143 18.2L1.78571 13V23.4ZM21.4286 24.2667L12.5 19.0667L3.57143 24.2667H21.4286ZM23.2143 13L15.1786 18.2L23.2143 23.4V13Z" fill="#006B1E"/>
          </svg>
          Todos os chamados
        </NavLink>
        <NavLink to="iniciados" className={({ isActive }) => (isActive ? 'filterTab active' : 'filterTab')}>Iniciados</NavLink>
        <NavLink to="espera" className={({ isActive }) => (isActive ? 'filterTab active' : 'filterTab')}>Em espera</NavLink>
        <NavLink to="finalizados" className={({ isActive }) => (isActive ? 'filterTab active' : 'filterTab')}>Finalizados</NavLink>
        <NavLink to="arquivados" className={({ isActive }) => (isActive ? 'filterTab active' : 'filterTab')}>Arquivados</NavLink>
        </div>
        <div className='chamadosButtonBar'>
          <button className='chamadosButton'>
            <div className='svgContainer'>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1234 0.596271L10.2351 0.484521C10.3192 0.400459 10.4191 0.333786 10.5289 0.288311C10.6388 0.242836 10.7566 0.219448 10.8755 0.219482C10.9944 0.219517 11.1122 0.242974 11.222 0.288514C11.3319 0.334054 11.4317 0.400784 11.5157 0.484896C11.5998 0.569008 11.6665 0.668853 11.7119 0.778731C11.7574 0.88861 11.7808 1.00637 11.7808 1.12529C11.7807 1.2442 11.7573 1.36195 11.7117 1.4718C11.6662 1.58165 11.5995 1.68146 11.5154 1.76552L11.4036 1.87652C11.5948 2.09092 11.6967 2.37032 11.6885 2.65744C11.6802 2.94457 11.5625 3.21767 11.3594 3.42077L3.64036 11.1405C3.59211 11.1885 3.5317 11.2225 3.46561 11.2388L0.465612 11.9888C0.402831 12.0044 0.337074 12.0035 0.274732 11.9862C0.212389 11.9689 0.155583 11.9358 0.109835 11.89C0.0640867 11.8443 0.0309526 11.7875 0.0136536 11.7252C-0.0036455 11.6628 -0.00452105 11.5971 0.011112 11.5343L0.761112 8.53427C0.777522 8.46845 0.811477 8.40832 0.859362 8.36027L8.09086 1.12877C8.01854 1.07787 7.93055 1.05417 7.84244 1.06185C7.75434 1.06954 7.67178 1.10812 7.60936 1.17077L5.14036 3.64052C5.1055 3.67539 5.0641 3.70304 5.01855 3.72191C4.97299 3.74078 4.92417 3.7505 4.87486 3.7505C4.82555 3.7505 4.77673 3.74078 4.73117 3.72191C4.68562 3.70304 4.64423 3.67539 4.60936 3.64052C4.5745 3.60566 4.54684 3.56426 4.52797 3.51871C4.5091 3.47315 4.49939 3.42433 4.49939 3.37502C4.49939 3.32571 4.5091 3.27689 4.52797 3.23133C4.54684 3.18578 4.5745 3.14439 4.60936 3.10952L7.07986 0.640521C7.28309 0.437283 7.5564 0.319537 7.84371 0.311448C8.13101 0.303358 8.41052 0.40554 8.62486 0.597021C8.83093 0.41285 9.09759 0.31098 9.37397 0.310842C9.65035 0.310703 9.9171 0.412307 10.1234 0.596271Z" fill="#006B1E"/>
              </svg>
            </div>
            Nova Ordem de Serviço
          </button>
        </div>
        <div className='chamadosList'>
          {chamados.map((chamado) => <Chamado props={chamado} key={chamado.ticket}/>)}
        </div>
      </div>
    </div>
  )
}

export default Chamados