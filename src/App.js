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
import ComicDashboard from './pages/ComicDashboard';

//Import ComicsList
import ComicsList from './queries/ComicsList';

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
      {mainpages.map( (page) => (
        <Route key={page.title} path={page.url} element={ <page.import/> } />
      ))}

      { comics.map((comic) => (
      <Route key={comic.id} path={'/comics/' + comic.id} element= { <ComicDashboard comic={comic}/>}
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

          <ComicsList>
            <PageRoutes />
          </ComicsList>

        <Footer socials={ socials } website={ website }/>
      </ThemeProvider>
    </BrowserRouter>
      );
}

export default App;
