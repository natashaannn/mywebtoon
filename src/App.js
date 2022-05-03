//React imports
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//MUI imports
import { ThemeProvider } from '@mui/material/styles';

//MUI Icon imports
import InstagramIcon from '@mui/icons-material/Instagram';
import PaidIcon from '@mui/icons-material/Paid';

//Local component imports
import Header from './components/Header';
import Footer from './components/Footer';
import main from './components/Theme';

//Local page imports
import About from './pages/public/About';
import Gallery from './pages/public/Gallery';
import Home from './pages/public/Home';
import Comics from './pages/public/Comics';
import ComicDashboard from './pages/public/ComicDashboard';
import AdminHome from './pages/admin/AdminHome';
import AdminComicDashboard from './pages/admin/AdminComicDashboard';
import AdminNewEpisode from './pages/admin/AdminNewEpisode';

//Import apis
import GetComicsList from './api/GetComicsList';

//Import Amplify
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);

const mainpages = [
  { url: '/',
    title: 'Home',
    import: Home
  },
  { url: '/comics',
    title: 'Comics',
    import: Comics
  },
  { url: '/gallery',
    title: 'Gallery',
    import: Gallery
  },
  { url: '/about',
    title: 'About',
    import: About
  }
]

const adminpages = [
  { url: '/admin',
    title: 'Admin Home',
    import: AdminHome
  },
  { url: '/admin/new-episode',
    title: 'New Episode',
    import: AdminNewEpisode
  },
]

const pages = mainpages.concat(adminpages);

const title = "Momonoko";
const website = "www.momonoko.com"

const socials = [
  { url: 'https://www.instagram.com/momonokoa/',
    title: 'Instagram',
    icon: InstagramIcon
  },
  { url: 'https://www.patreon.com/momonoko',
    title: 'Patreon',
    icon: PaidIcon
  }
]

function PageRoutes(props) {
  const { comics } = props;
  console.log(props);

  return (
    <Routes>
      {/* Routes for main pages */}
      {pages.map( (page) => (
        <Route key={page.title} path={page.url} element={ <page.import/> } />
      ))}

      {/* Public routes for comics */}
      { comics.map((comic) => (
      <Route key={comic.id} path={'/comics/' + comic.title.toLowerCase().replace(/\s/g, '-')} element= { <ComicDashboard comic={comic}/>}
      />
      ))}

      {/* Admin routes for comics */}
      { comics.map((comic) => (
      <Route key={comic.id} path={'/admin/' + comic.title.toLowerCase().replace(/\s/g, '-')} element= { <AdminComicDashboard comic={comic}/>}
      />
      ))}

      {/* Admin new episode routes for comics */}
      { comics.map((comic) => (
      <Route key={comic.id} path={'/admin/new-episode/' + comic.title.toLowerCase().replace(/\s/g, '-')} element= { <AdminNewEpisode comic={comic}/>}
      />
      ))}
    </Routes>
  );
};

function App() {     
  return (
    <BrowserRouter>
      <ThemeProvider theme={main}>
        <React.Fragment>
            <Header title={ title } pages={ mainpages }/>
          </React.Fragment>

          <GetComicsList>
            <PageRoutes />
          </GetComicsList>

        <Footer socials={ socials } website={ website }/>
      </ThemeProvider>
    </BrowserRouter>
      );
}

export default App;
