import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

const Contratos = () => {
  const data = useLoaderData()
  return (
    <div className='contentFrame'>
      <div className='filterBar'>
        <NavLink to='/contratos'end className={({ isActive }) => (isActive ? 'filterTab active' : 'filterTab')}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_229_3189)">
            <path d="M13.7676 8.59375C13.7676 8.16227 13.4178 7.8125 12.9863 7.8125H4.93945C4.50797 7.8125 4.1582 8.16227 4.1582 8.59375C4.1582 9.02523 4.50797 9.375 4.93945 9.375H12.9863C13.4178 9.375 13.7676 9.02523 13.7676 8.59375Z" fill="#006B1E"/>
            <path d="M4.93945 10.9375C4.50797 10.9375 4.1582 11.2873 4.1582 11.7188C4.1582 12.1502 4.50797 12.5 4.93945 12.5H9.8266C10.2581 12.5 10.6079 12.1502 10.6079 11.7188C10.6079 11.2873 10.2581 10.9375 9.8266 10.9375H4.93945Z" fill="#006B1E"/>
            <path d="M6.77594 18.4375H4.16309C3.30152 18.4375 2.60059 17.7366 2.60059 16.875V3.125C2.60059 2.26344 3.30152 1.5625 4.16309 1.5625H13.7681C14.6297 1.5625 15.3306 2.26344 15.3306 3.125V7.92969C15.3306 8.36117 15.6804 8.71094 16.1119 8.71094C16.5434 8.71094 16.8931 8.36117 16.8931 7.92969V3.125C16.8931 1.40188 15.4913 0 13.7681 0H4.16309C2.43996 0 1.03809 1.40188 1.03809 3.125V16.875C1.03809 18.5981 2.43996 20 4.16309 20H6.77594C7.20742 20 7.55719 19.6502 7.55719 19.2188C7.55719 18.7873 7.20742 18.4375 6.77594 18.4375Z" fill="#006B1E"/>
            <path d="M18.2764 11.3114C17.3626 10.3976 15.8757 10.3976 14.9625 11.3108L10.6733 15.5905C10.5822 15.6814 10.515 15.7934 10.4776 15.9165L9.54351 18.9917C9.4607 19.2643 9.53285 19.5604 9.73183 19.7643C9.8809 19.9171 10.0834 20 10.2911 20C10.3606 20 10.4307 19.9907 10.4996 19.9716L13.6529 19.0982C13.7827 19.0622 13.901 18.9934 13.9963 18.8982L18.2765 14.626C19.1903 13.7122 19.1903 12.2253 18.2764 11.3114ZM13.0379 17.6472L11.4514 18.0867L11.9157 16.5582L14.8098 13.6705L15.9149 14.7756L13.0379 17.6472ZM17.1722 13.5207L17.0208 13.6718L15.9159 12.5669L16.0668 12.4164C16.3714 12.1118 16.867 12.1118 17.1716 12.4164C17.4762 12.721 17.4762 13.2166 17.1722 13.5207Z" fill="#006B1E"/>
            <path d="M12.9863 4.6875H4.93945C4.50797 4.6875 4.1582 5.03727 4.1582 5.46875C4.1582 5.90023 4.50797 6.25 4.93945 6.25H12.9863C13.4178 6.25 13.7676 5.90023 13.7676 5.46875C13.7676 5.03727 13.4178 4.6875 12.9863 4.6875Z" fill="#006B1E"/>
            </g>
            <defs>
            <clipPath id="clip0_229_3189">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          Todos os contratos
        </NavLink>
        <NavLink to="ativos" className={({ isActive }) => (isActive ? 'filterTab active' : 'filterTab')}>Ativos</NavLink>
        <NavLink to="pendentes" className={({ isActive }) => (isActive ? 'filterTab active' : 'filterTab')}>Pendentes</NavLink>
        <NavLink to="finalizados" className={({ isActive }) => (isActive ? 'filterTab active' : 'filterTab')}>Finalizados</NavLink>
        <NavLink to="arquivados" className={({ isActive }) => (isActive ? 'filterTab active' : 'filterTab')}>Arquivados</NavLink>
        <div className='searchBar'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_228_2946)">
          <path d="M17.5606 15.443L14.0769 11.9592C15.1376 10.3714 15.5698 8.44572 15.2894 6.55685C15.009 4.66798 14.036 2.95094 12.5597 1.73973C11.0834 0.52851 9.2094 -0.0902813 7.30214 0.00371638C5.39489 0.097714 3.59078 0.89778 2.24075 2.24829C0.890719 3.5988 0.091291 5.40319 -0.00203232 7.31047C-0.0953556 9.21776 0.524098 11.0916 1.73584 12.5674C2.94757 14.0433 4.66495 15.0157 6.55392 15.2954C8.44289 15.5752 10.3684 15.1423 11.9559 14.081L15.4396 17.564C15.7233 17.8407 16.1038 17.9955 16.5001 17.9955C16.8964 17.9955 17.2769 17.8407 17.5606 17.564C17.8418 17.2827 17.9998 16.9012 17.9998 16.5035C17.9998 16.1057 17.8418 15.7243 17.5606 15.443ZM7.68761 2.25346C8.76305 2.25346 9.81433 2.57237 10.7085 3.16985C11.6027 3.76733 12.2997 4.61655 12.7112 5.61012C13.1228 6.6037 13.2304 7.697 13.0206 8.75177C12.8108 9.80654 12.293 10.7754 11.5325 11.5359C10.7721 12.2963 9.80318 12.8142 8.74841 13.024C7.69364 13.2338 6.60034 13.1261 5.60677 12.7146C4.61319 12.303 3.76397 11.6061 3.16649 10.7119C2.56901 9.81769 2.25011 8.7664 2.25011 7.69096C2.2517 6.24934 2.82508 4.86721 3.84447 3.84782C4.86385 2.82844 6.24598 2.25505 7.68761 2.25346Z" fill="#006B1E"/>
          </g>
          <defs>
          <clipPath id="clip0_228_2946">
          <rect width="18" height="18" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          <input type='search'></input>  
        </div>
      </div>
      <div className='contractButtonBar'>
        <button className='contractButton'>
          <div className='svgContainer'>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1234 0.596271L10.2351 0.484521C10.3192 0.400459 10.4191 0.333786 10.5289 0.288311C10.6388 0.242836 10.7566 0.219448 10.8755 0.219482C10.9944 0.219517 11.1122 0.242974 11.222 0.288514C11.3319 0.334054 11.4317 0.400784 11.5157 0.484896C11.5998 0.569008 11.6665 0.668853 11.7119 0.778731C11.7574 0.88861 11.7808 1.00637 11.7808 1.12529C11.7807 1.2442 11.7573 1.36195 11.7117 1.4718C11.6662 1.58165 11.5995 1.68146 11.5154 1.76552L11.4036 1.87652C11.5948 2.09092 11.6967 2.37032 11.6885 2.65744C11.6802 2.94457 11.5625 3.21767 11.3594 3.42077L3.64036 11.1405C3.59211 11.1885 3.5317 11.2225 3.46561 11.2388L0.465612 11.9888C0.402831 12.0044 0.337074 12.0035 0.274732 11.9862C0.212389 11.9689 0.155583 11.9358 0.109835 11.89C0.0640867 11.8443 0.0309526 11.7875 0.0136536 11.7252C-0.0036455 11.6628 -0.00452105 11.5971 0.011112 11.5343L0.761112 8.53427C0.777522 8.46845 0.811477 8.40832 0.859362 8.36027L8.09086 1.12877C8.01854 1.07787 7.93055 1.05417 7.84244 1.06185C7.75434 1.06954 7.67178 1.10812 7.60936 1.17077L5.14036 3.64052C5.1055 3.67539 5.0641 3.70304 5.01855 3.72191C4.97299 3.74078 4.92417 3.7505 4.87486 3.7505C4.82555 3.7505 4.77673 3.74078 4.73117 3.72191C4.68562 3.70304 4.64423 3.67539 4.60936 3.64052C4.5745 3.60566 4.54684 3.56426 4.52797 3.51871C4.5091 3.47315 4.49939 3.42433 4.49939 3.37502C4.49939 3.32571 4.5091 3.27689 4.52797 3.23133C4.54684 3.18578 4.5745 3.14439 4.60936 3.10952L7.07986 0.640521C7.28309 0.437283 7.5564 0.319537 7.84371 0.311448C8.13101 0.303358 8.41052 0.40554 8.62486 0.597021C8.83093 0.41285 9.09759 0.31098 9.37397 0.310842C9.65035 0.310703 9.9171 0.412307 10.1234 0.596271Z" fill="#006B1E"/>
            </svg>

          </div>
          Criar novo contrato
        </button>
        <button className='contractButton'>
          <div className='svgContainer'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0L12 0C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893 0.960859 14 1.46957 14 2V14C14 14.5304 13.7893 15.0391 13.4142 15.4142C13.0391 15.7893 12.5304 16 12 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V2ZM4 1C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2V6H13V2C13 1.73478 12.8946 1.48043 12.7071 1.29289C12.5196 1.10536 12.2652 1 12 1H4ZM13 7H10V9H13V7ZM13 10H10V12H13V10ZM13 13H10V15H12C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V13ZM9 15V13H6V15H9ZM5 15V13H3V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15H5ZM3 12H5V10H3V12ZM3 9H5V7H3V9ZM6 7V9H9V7H6ZM9 10H6V12H9V10Z" fill="#006B1E"/>
            </svg>

          </div>
          Exportar para CSV
        </button>
      </div>
      <div className='contractList'>
        <div className='contractSort'>
          <p>Nome do contratante</p>
          <p>Valor do contrato</p>
          <p>Modelo</p>
          <p>Data de emissão</p>
          <p>Status</p>
        </div>
        <div className='contractFrame'>
          <div className='contractId'>
            <img className='contractImg'/>
            <div>
              <h4>Marcelo Morais</h4>
              <p>#16122</p>
            </div>
          </div>
          <p>R$1.525</p>
          <p>Notebook</p>
          <p>15/03/2022</p>
          <p>Ativo</p>
        </div>
        <div className='contractFrame'>
          <div className='contractId'>
            <img className='contractImg'/>
            <div>
              <h4>Marcelo Morais</h4>
              <p>#16122</p>
            </div>
          </div>
          <p>R$1.525</p>
          <p>Notebook</p>
          <p>15/03/2022</p>
          <p>Ativo</p>
        </div>
        <div className='contractFrame'>
          <div className='contractId'>
            <img className='contractImg'/>
            <div>
              <h4>Marcelo Morais</h4>
              <p>#16122</p>
            </div>
          </div>
          <p>R$1.525</p>
          <p>Notebook</p>
          <p>15/03/2022</p>
          <p>Ativo</p>
        </div>
        <div className='contractFrame'>
          <div className='contractId'>
            <img className='contractImg'/>
            <div>
              <h4>Marcelo Morais</h4>
              <p>#16122</p>
            </div>
          </div>
          <p>R$1.525</p>
          <p>Notebook</p>
          <p>15/03/2022</p>
          <p>Ativo</p>
        </div>
        <div className='contractFrame'>
          <div className='contractId'>
            <img className='contractImg'/>
            <div>
              <h4>Marcelo Morais</h4>
              <p>#16122</p>
            </div>
          </div>
          <p>R$1.525</p>
          <p>Notebook</p>
          <p>15/03/2022</p>
          <p>Ativo</p>
        </div>
        <div className='contractFrame'>
          <div className='contractId'>
            <img className='contractImg'/>
            <div>
              <h4>Marcelo Morais</h4>
              <p>#16122</p>
            </div>
          </div>
          <p>R$1.525</p>
          <p>Notebook</p>
          <p>15/03/2022</p>
          <p>Ativo</p>
        </div>
        <div className='contractFrame'>
          <div className='contractId'>
            <img className='contractImg'/>
            <div>
              <h4>Marcelo Morais</h4>
              <p>#16122</p>
            </div>
          </div>
          <p>R$1.525</p>
          <p>Notebook</p>
          <p>15/03/2022</p>
          <p>Ativo</p>
        </div>
        <div className='contractFrame'>
          <div className='contractId'>
            <img className='contractImg'/>
            <div>
              <h4>Marcelo Morais</h4>
              <p>#16122</p>
            </div>
          </div>
          <p>R$1.525</p>
          <p>Notebook</p>
          <p>15/03/2022</p>
          <p>Ativo</p>
        </div>
        <div className='contractFrame'>
          <div className='contractId'>
            <img className='contractImg'/>
            <div>
              <h4>Marcelo Morais</h4>
              <p>#16122</p>
            </div>
          </div>
          <p>R$1.525</p>
          <p>Notebook</p>
          <p>15/03/2022</p>
          <p>Ativo</p>
        </div>
        <div className='contractFrame'>
          <div className='contractId'>
            <img className='contractImg'/>
            <div>
              <h4>Marcelo Morais</h4>
              <p>#16122</p>
            </div>
          </div>
          <p>R$1.525</p>
          <p>Notebook</p>
          <p>15/03/2022</p>
          <p>Ativo</p>
        </div>
        <div className='contractFrame'>
          <div className='contractId'>
            <img className='contractImg'/>
            <div>
              <h4>Marcelo Morais</h4>
              <p>#16122</p>
            </div>
          </div>
          <p>R$1.525</p>
          <p>Notebook</p>
          <p>15/03/2022</p>
          <p>Ativo</p>
        </div>
        <div className='contractFrame'>
          <div className='contractId'>
            <img className='contractImg'/>
            <div>
              <h4>Marcelo Morais</h4>
              <p>#16122</p>
            </div>
          </div>
          <p>R$1.525</p>
          <p>Notebook</p>
          <p>15/03/2022</p>
          <p>Ativo</p>
        </div>
        <div className='contractFrame'>
          <div className='contractId'>
            <img className='contractImg'/>
            <div>
              <h4>Marcelo Morais</h4>
              <p>#16122</p>
            </div>
          </div>
          <p>R$1.525</p>
          <p>Notebook</p>
          <p>15/03/2022</p>
          <p>Ativo</p>
        </div>
        <div className='contractFrame'>
          <div className='contractId'>
            <img className='contractImg'/>
            <div>
              <h4>Marcelo Morais</h4>
              <p>#16122</p>
            </div>
          </div>
          <p>R$1.525</p>
          <p>Notebook</p>
          <p>15/03/2022</p>
          <p>Ativo</p>
        </div>
        <div className='contractFrame'>
          <div className='contractId'>
            <img className='contractImg'/>
            <div>
              <h4>Marcelo Morais</h4>
              <p>#16122</p>
            </div>
          </div>
          <p>R$1.525</p>
          <p>Notebook</p>
          <p>15/03/2022</p>
          <p>Ativo</p>
        </div>
      </div>
    </div>
  )
}

export default Contratos