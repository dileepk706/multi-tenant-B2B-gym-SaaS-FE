import { Tooltip, Typography } from '@mui/material';
import { Fragment, useCallback } from 'react';
import Iconify from '../iconify';

const Info = ({ title }: any) => {

  
const convertToMultiline = (text:string) => text.split('\n').map((line, index) => (
    <Fragment key={index}>
      {line}
      {index !== text.split('\n').length - 1 && <br />}
    </Fragment>
  ));
  return (
    <Tooltip
        // title={convertToMultiline(title)}
        title={title}
        arrow
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: 'whitesmoke',
              p: 1,
              fontWeight: 100,
              fontSize: 15,
              color: 'black',
              boxShadow: `4px 4px 8px 0 black`,
              '& .MuiTooltip-arrow': {
                color: 'gray',
              },
              typography:'caption',
            },
          },
          
        }}
      >
        <Iconify position="absolute" top={5} right={5} icon="ph:info-light" width={10} />
      </Tooltip>
  );
};

export default Info;
