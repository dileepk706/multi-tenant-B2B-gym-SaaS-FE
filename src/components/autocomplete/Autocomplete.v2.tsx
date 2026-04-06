import { memo, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  Divider,
  InputAdornment,
  TextField,
  TextFieldProps,
  ClickAwayListener,
} from '@mui/material';
import Scrollbar from '../scrollbar/scrollbar';
import Iconify from '../iconify';

type AutoCompleteProps = TextFieldProps & {
  selectOneItemForSearch: (name: string) => void;
  data?: { name: string }[];
};

function AutoComplete({ selectOneItemForSearch, data = [], ...other }: AutoCompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputHeight, setInputHeight] = useState(0);
  const textFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textFieldRef.current) {
      setInputHeight(textFieldRef.current.clientHeight);
    }
  }, []);

  const handleSelect = (name: string) => {
    selectOneItemForSearch(name);
    setIsOpen(false);
  };

  const handleFocus = () => setIsOpen(true);

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          width: '100%',
        }}
      >
        <TextField
          fullWidth
          ref={textFieldRef}
          onFocus={handleFocus}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
          {...other}
        />
        {data.length > 0 && isOpen && (
          <Stack
            sx={{
              position: 'absolute',
              zIndex: 999,
              width: '100%',
              top: inputHeight,
              p: 2,
              bgcolor: 'white',
              boxShadow: (theme) => theme.customShadows.dropdown,
            }}
          >
            <Scrollbar sx={{ maxHeight: 300 }}>
              {data.map((item, index) => (
                <Stack
                  key={index}
                  spacing={0.8}
                  onClick={() => handleSelect(item.name)}
                  sx={{
                    cursor: 'pointer',
                    transition: '0.3s',
                    '&:hover': { backgroundColor: '#e0dede' },
                    '&:active': { backgroundColor: 'wheat' },
                  }}
                >
                  <Typography variant="body1">{item.name}</Typography>
                  {index < data.length - 1 && <Divider sx={{ borderStyle: 'dashed' }} />}
                </Stack>
              ))}
            </Scrollbar>
          </Stack>
        )}
      </Box>
    </ClickAwayListener>
  );
}

export default memo(AutoComplete);
