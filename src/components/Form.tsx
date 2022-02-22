import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { IAddHouseFormData, TLabel } from 'appInterfaces';

interface IFormProps {
  onSubmit: (data: IAddHouseFormData) => Promise<void>;
  isMutating?: boolean;
}

const defaultValues: IAddHouseFormData = {
  address: '',
  floorsNumber: 1,
  label: 'available' as TLabel,
  description: '',
};

const Form = ({ onSubmit, isMutating = false }: IFormProps) => {
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    control,
    reset,
  } = useForm({ defaultValues });

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful,reset]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ p: 2, minWidth: '300px', display: 'flex', flexDirection: 'column' }}
    >
      <Controller
        name="address"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Adres"
            fullWidth
            autoFocus
            sx={{ mb: 2 }}
            value={field.value || ''}
            error={!!errors.address}
            helperText={
              errors.address?.type === 'required' && 'To pole jest wymagane'
            }
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Opis"
            fullWidth
            multiline
            minRows={3}
            sx={{ mb: 2 }}
            value={field.value || ''}
            error={!!errors.description}
            helperText={
              errors.description?.type === 'required' && 'To pole jest wymagane'
            }
          />
        )}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="floorsNumber"
            control={control}
            rules={{ required: true, min: 1 }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Liczba pięter"
                fullWidth
                type="number"
                inputProps={{ min: 1 }}
                value={field.value || ''}
                error={!!errors.floorsNumber}
                helperText={
                  errors.floorsNumber?.type === 'min' &&
                  'Liczba pięter musi być większa niż 0'
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="status-select-label">Status</InputLabel>
            <Controller
              name="label"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="status-select-label"
                  id="status-select"
                  label="Status"
                  value={field.value || ''}
                >
                  <MenuItem value={'available'}>available</MenuItem>
                  <MenuItem value={'reserved'}>reserved</MenuItem>
                  <MenuItem value={'sold'}>sold</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Box sx={{ mt: 3, mb: 2, ml: 'auto' }}>
        <Button
          type="reset"
          variant="outlined"
          sx={{ mr: 1 }}
          onClick={() => reset()}
        >
          Resetuj
        </Button>
        <Button type="submit" variant="contained" disabled={isMutating}>
          Dodaj
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
