import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

type Props = {
  items: any[];
  onSelectIte?: (value: any) => void;
};
export default function RenderSelectedItems({ items, onSelectIte }: Props) {
  return (
    <Stack direction="row" spacing={1} sx={{ flexGrow: 1, flexWrap: 'wrap', gap: 0.5 }}>
      {items.map((e, i) => (
          <>
            {e.image ? (
              <Chip
                key={i}
                avatar={<Avatar alt="Natacha" src={e.image} />}
                label={e.name}
                variant="outlined"
              />
            ) : (
              <Chip
                key={i}
                label={e.name}
                variant="outlined"
                onClick={() => {
                  onSelectIte && onSelectIte(e.name);
                }}
              />
            )}
          </>
        ))}
    </Stack>
  );
}
