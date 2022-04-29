import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//MUI imports
import { ThemeProvider } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import PaidIcon from '@mui/icons-material/Paid';

//Local component imports
import Header from './components/Header';
import Footer from './components/Footer';
import main from './components/Theme';

//Local page imports
import About from './pages/About';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Comics from './pages/Comics';
import NaturalSelection from './pages/NaturalSelection';
import FosterMonsters from './pages/FosterMonsters';

//Import Amplify
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);

// const comicurl = './assets/comics/fostermonsters/episode-1';

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

const comicpages =[
  { url: '/naturalselection',
    title: 'Natural Selection',
    import: NaturalSelection,
    type: 'comic'
  },
  { url: '/fostermonsters',
    title: 'Foster Monsters',
    import: FosterMonsters,
    type: 'comic'
  }
]

const pages = mainpages.concat(comicpages);

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

function App() {      
  return (
    <BrowserRouter>
      <ThemeProvider theme={main}>
        <React.Fragment>
            <Header title={ title } pages={ mainpages }/>
          </React.Fragment>
      
        <Routes>
          {pages.map( (page) => (
            <Route path={page.url} element={ <page.import/> } />
          ))}
        </Routes>

        <Footer socials={ socials } website={ website }/>
      </ThemeProvider>
    </BrowserRouter>
      );
}

export default App;
