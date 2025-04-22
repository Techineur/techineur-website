import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { NavItem } from './components';
import Link from 'next/link';
import { ThemeModeToggler } from 'layouts/Fixed/components/Topbar/components';

interface Props {
  onSidebarOpen: () => void;
  pages: {
    landings: Array<PageItem>;
    company: Array<PageItem>;
    account: Array<PageItem>;
    secondary: Array<PageItem>;
    blog: Array<PageItem>;
    portfolio: Array<PageItem>;
  };
  colorInvert?: boolean;
  noUnderline?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Techineur"
        sx={{
          width: { xs: 100, sm: 120, md: 140, lg: 160 },
          height: { xs: 40, sm: 50, md: 60, lg: 70 },
        }}
      >
        <Box
          component={'img'}
          src={'https://www.techineur.com/assets/img/Techineur.svg'}
          alt="Techineur Logo"
          sx={{
            height: 1,
            width: 1,
            objectFit: 'contain',
          }}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
        <Link href="aboutUs" passHref>
  <Button
    component="a"
    sx={{
      color: colorInvert ? 'common.white' : 'text.primary',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
        backgroundColor: 'transparent',
        '&::before': {
          transform: 'scaleX(1)',
          transformOrigin: 'left'
        },
        '& .button-text': {
          color: theme.palette.primary.main,
          fontWeight: 600
        }
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: theme.palette.primary.main,
        transform: 'scaleX(0)',
        transformOrigin: 'right',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut
        })
      },
      textTransform: 'none',
      textDecoration: 'none',
      fontWeight: 'medium',
      fontSize: '1rem',
      padding: '6px 8px',
      borderRadius: 0, // Sharp corners for modern look
      minWidth: 'auto' // Remove extra button padding
    }}
  >
    <Box 
      component="span" 
      className="button-text"
      sx={{
        transition: theme.transitions.create(['color', 'font-weight'], {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        display: 'inline-block',
        position: 'relative',
        zIndex: 1,
        whiteSpace: 'nowrap',
      }}
    >
      WHO WE ARE
    </Box>
  </Button>
</Link>
        </Box>
        <Box marginLeft={4}>
        <Link href="Products" passHref>
  <Button
    component="a"
    sx={{
      color: colorInvert ? 'common.white' : 'text.primary',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
        backgroundColor: 'transparent',
        '&::before': {
          transform: 'scaleX(1)',
          transformOrigin: 'left'
        },
        '& .button-text': {
          color: theme.palette.primary.main,
          fontWeight: 600
        }
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: theme.palette.primary.main,
        transform: 'scaleX(0)',
        transformOrigin: 'right',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut
        })
      },
      textTransform: 'none',
      textDecoration: 'none',
      fontWeight: 'medium',
      fontSize: '1rem',
      padding: '6px 8px',
      borderRadius: 0, // Sharp corners for modern look
      minWidth: 'auto' // Remove extra button padding
    }}
  >
    <Box 
      component="span" 
      className="button-text"
      sx={{
        transition: theme.transitions.create(['color', 'font-weight'], {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        display: 'inline-block',
        position: 'relative',
        zIndex: 1
      }}
    >
      PRODUCTS
    </Box>
  </Button>
</Link>
        </Box>
        <Box marginLeft={4}>
        <Link href="Clients" passHref>
  <Button
    component="a"
    sx={{
      color: colorInvert ? 'common.white' : 'text.primary',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
        backgroundColor: 'transparent',
        '&::before': {
          transform: 'scaleX(1)',
          transformOrigin: 'left'
        },
        '& .button-text': {
          color: theme.palette.primary.main,
          fontWeight: 600
        }
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: theme.palette.primary.main,
        transform: 'scaleX(0)',
        transformOrigin: 'right',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut
        })
      },
      textTransform: 'none',
      textDecoration: 'none',
      fontWeight: 'medium',
      fontSize: '1rem',
      padding: '6px 8px',
      borderRadius: 0, // Sharp corners for modern look
      minWidth: 'auto' // Remove extra button padding
    }}
  >
    <Box 
      component="span" 
      className="button-text"
      sx={{
        transition: theme.transitions.create(['color', 'font-weight'], {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        display: 'inline-block',
        position: 'relative',
        zIndex: 1
      }}
    >
      CLIENTS
    </Box>
  </Button>
</Link>
        </Box>
        <Box 
  marginLeft={4}
  sx={{
    '& .NavItem-root .MuiTypography-root': {
      color: colorInvert ? 'common.white' : 'text.primary',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
        color: theme.palette.primary.main,
        fontWeight: 600,
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: theme.palette.primary.main,
        transform: 'scaleX(0)',
        transformOrigin: 'right',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut
        })
      },
      '&:hover::before': {
        transform: 'scaleX(1)',
        transformOrigin: 'left'
      },
      textTransform: 'none',
      fontWeight: 'medium',
      fontSize: '1rem',
      padding: '6px 8px',
    }
  }}
>
  <NavItem
    title={'SERVICES'}
    id={'services-menu'}
    items={[
      { title: 'OUR SERVICES', href: '/Services' },
      { title: 'SALESFORCE', href: '/Salesforce' },
      { title: 'AI', href: '/Ai' },
      ...secondaryPages
    ]}
    colorInvert={colorInvert}
    hoverMenu={true}
  />
</Box>
        <Box marginLeft={4}>
        <Link href="ContactUs" passHref>
  <Button
    component="a"
    sx={{
      color: colorInvert ? 'common.white' : 'text.primary',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
        backgroundColor: 'transparent',
        '&::before': {
          transform: 'scaleX(1)',
          transformOrigin: 'left'
        },
        '& .button-text': {
          color: theme.palette.primary.main,
          fontWeight: 600
        }
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: theme.palette.primary.main,
        transform: 'scaleX(0)',
        transformOrigin: 'right',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut
        })
      },
      textTransform: 'none',
      textDecoration: 'none',
      fontWeight: 'medium',
      fontSize: '1rem',
      padding: '6px 8px',
      borderRadius: 0, // Sharp corners for modern look
      minWidth: 'auto' // Remove extra button padding
    }}
  >
    <Box 
      component="span" 
      className="button-text"
      sx={{
        transition: theme.transitions.create(['color', 'font-weight'], {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        display: 'inline-block',
        position: 'relative',
        zIndex: 1,
        whiteSpace: 'nowrap',
      }}
    >
      CONTACT US
    </Box>
  </Button>
</Link>
        </Box>
        {/* <Box marginLeft={4}>
        <Link href="Salesforce" passHref>
  <Button
    component="a"
    sx={{
      color: colorInvert ? 'common.white' : 'text.primary',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
        backgroundColor: 'transparent',
        '&::before': {
          transform: 'scaleX(1)',
          transformOrigin: 'left'
        },
        '& .button-text': {
          color: theme.palette.primary.main,
          fontWeight: 600
        }
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: theme.palette.primary.main,
        transform: 'scaleX(0)',
        transformOrigin: 'right',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut
        })
      },
      textTransform: 'none',
      textDecoration: 'none',
      fontWeight: 'medium',
      fontSize: '1rem',
      padding: '6px 8px',
      borderRadius: 0, // Sharp corners for modern look
      minWidth: 'auto' // Remove extra button padding
    }}
  >
    <Box 
      component="span" 
      className="button-text"
      sx={{
        transition: theme.transitions.create(['color', 'font-weight'], {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        display: 'inline-block',
        position: 'relative',
        zIndex: 1
      }}
    >
      SALESFORCE
    </Box>
  </Button>
</Link>
        </Box> */}
        {/* <Box marginLeft={4}>
        <Link href="Ai" passHref>
  <Button
    component="a"
    sx={{
      color: colorInvert ? 'common.white' : 'text.primary',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
        backgroundColor: 'transparent',
        '&::before': {
          transform: 'scaleX(1)',
          transformOrigin: 'left'
        },
        '& .button-text': {
          color: theme.palette.primary.main,
          fontWeight: 600
        }
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: theme.palette.primary.main,
        transform: 'scaleX(0)',
        transformOrigin: 'right',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut
        })
      },
      textTransform: 'none',
      textDecoration: 'none',
      fontWeight: 'medium',
      fontSize: '1rem',
      padding: '6px 8px',
      borderRadius: 0, // Sharp corners for modern look
      minWidth: 'auto' // Remove extra button padding
    }}
  >
    <Box 
      component="span" 
      className="button-text"
      sx={{
        transition: theme.transitions.create(['color', 'font-weight'], {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        display: 'inline-block',
        position: 'relative',
        zIndex: 1
      }}
    >
      AI
    </Box>
  </Button>
</Link>           
        </Box> */}
        <Box marginLeft={4}>
        <Link href="https://techineur.com/Techineur%20Solutions.pdf" passHref>
  <Button
    component="a"
    sx={{
      color: colorInvert ? 'common.white' : 'text.primary',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
        backgroundColor: 'transparent',
        '&::before': {
          transform: 'scaleX(1)',
          transformOrigin: 'left'
        },
        '& .button-text': {
          color: theme.palette.primary.main,
          fontWeight: 600
        }
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: theme.palette.primary.main,
        transform: 'scaleX(0)',
        transformOrigin: 'right',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut
        })
      },
      textTransform: 'none',
      textDecoration: 'none',
      fontWeight: 'medium',
      fontSize: '1rem',
      padding: '6px 8px',
      borderRadius: 0, // Sharp corners for modern look
      minWidth: 'auto' // Remove extra button padding
    }}
  >
    <Box 
      component="span" 
      className="button-text"
      sx={{
        transition: theme.transitions.create(['color', 'font-weight'], {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        display: 'inline-block',
        position: 'relative',
        zIndex: 1
      }}
    >
      PORTFOLIO
    </Box>
  </Button>
</Link>
        </Box>
        <ThemeModeToggler/>

        {/* <Box marginLeft={4}>
          <NavItem
            title={'PORTFOLIO'}
            id={'portfolio-pages'}
            items={portfolioPages}
            colorInvert={colorInvert}
          />
        </Box>
        
        {/* <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
            size="large"
          >
            Buy now
          </Button>
        </Box> */}
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
      <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
            
            
          </Box>
    </Box>
    
  );
};

export default Topbar;

