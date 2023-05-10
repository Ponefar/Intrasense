import { InputAdornment, OutlinedInput } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface IProps {
  value: string
  onChange: (val: string) => void
}
export function InputText(props: IProps): JSX.Element {
  const { value, onChange } = props
  return (
    <OutlinedInput
      size="small"
      onChange={(
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ): void => onChange(e.target.value)}
      placeholder="Search by body content ..."
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
      inputProps={{
        'aria-label': 'weight',
      }}
      value={value}
      sx={{
        width: '400px',
        '.MuiOutlinedInput-input': { color: 'black' },
      }}
    />
  )
}
