import React, { JSX } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { SidebarNav } from './components';

interface Props {
  onClose: () => void;
  open: boolean;
  variant: 'permanent' | 'persistent' | 'temporary' | undefined;
  pages: Array<{
    groupTitle: string;
    pages: Array<PageItem>;
  }>;
}

const Sidebar = ({ pages, open, variant, onClose }: Props): JSX.Element => {
  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 256,
          top: { xs: 0, md: 71 },
          height: { xs: '100%', md: 'calc(100% - 71px)' },
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          padding: 1,
          paddingTop: { xs: 2, sm: 3 },
        }}
      >
        <SidebarNav pages={pages} onClose={onClose} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
