import * as React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function ButtonAlertSuccess({name}) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar(name, { variant ,autoHideDuration: 1000, });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickVariant('success')}>Finish</Button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack({name}) {
  return (
    <SnackbarProvider maxSnack={3}>
      <ButtonAlertSuccess name={name}/>
    </SnackbarProvider>
  );
}
