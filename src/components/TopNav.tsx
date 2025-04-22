// import React, { JSX } from 'react';
// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';

// import ThemeModeToggler from 'components/ThemeModeToggler';

// interface Props {
//   colorInvert?: boolean;
// }

// const TopNav = ({ colorInvert = false }: Props): JSX.Element => {
//   return (

//     <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
//       </Box>
//     //   <Box marginRight={{ xs: 1, sm: 2 }}>
//     //     <Link
//     //       underline="none"
//     //       component="a"
//     //       href="/demos"
//     //       color={colorInvert ? 'common.white' : 'text.primary'}
//     //       sx={{ display: 'flex', alignItems: 'center' }}
//     //     >
//     //       Demos
//     //       <Box
//     //         padding={0.5}
//     //         display={'inline-flex'}
//     //         borderRadius={1}
//     //         bgcolor={'primary.main'}
//     //         marginLeft={1}
//     //       >
//     //         <Typography
//     //           variant={'caption'}
//     //           sx={{ color: 'common.white', lineHeight: 1 }}
//     //         >
//     //           new
//     //         </Typography>
//     //       </Box>
//     //     </Link>
//     //   </Box>
//     //   <Box marginRight={{ xs: 1, sm: 2 }}>
//     //     <Link
//     //       underline="none"
//     //       component="a"
//     //       href="/blocks"
//     //       color={colorInvert ? 'common.white' : 'text.primary'}
//     //       sx={{ display: 'flex', alignItems: 'center' }}
//     //     >
//     //       Components
//     //     </Link>
//     //   </Box>
//     //   <Box marginRight={{ xs: 1, sm: 2 }}>
//     //     <Link
//     //       underline="none"
//     //       component="a"
//     //       href="https://thefront.maccarianagency.com/docs/introduction"
//     //       target={'blank'}
//     //       color={colorInvert ? 'common.white' : 'text.primary'}
//     //     >
//     //       Docs
//     //     </Link>
//     //   </Box>
//     //   <Box>
//     //     <ThemeModeToggler />
//     //   </Box>
//     // </Box>
//   );
// };

// export default TopNav;
import React, { JSX } from 'react';
import Box from '@mui/material/Box';
import { ThemeModeToggler } from 'layouts/Fixed/components/Topbar/components';

interface Props {
  colorInvert?: boolean;
}

const TopNav = ({ colorInvert = false }: Props): JSX.Element => {
  return (
    // Main container with flex layout aligned to the right
    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
      
      {/* Container for the theme mode toggler component */}
      <Box>
        {/* ThemeModeToggler component that handles light/dark mode switching */}
        {/* <ThemeModeToggler /> */}
      </Box>
      
    </Box>
  );
};

export default TopNav;