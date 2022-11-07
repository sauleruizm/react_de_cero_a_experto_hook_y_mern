import { Link, Link as RouterLink } from 'react-router-dom'
import { Button, Grid, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Google } from '@mui/icons-material'


export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear Cuenta'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt : 2}}>
            <TextField 
              label="Nombre Completo" 
              type="text" 
              placeholder="Saúl Ruíz"
              fullWidth/>
          </Grid>
          <Grid item xs={12} sx={{ mt : 2}}>
            <TextField 
              label="Correo" 
              type="email" 
              placeholder="coreo@gmail.com"
              fullWidth/>
          </Grid>
          <Grid item xs={12} sx={{ mt : 2}}>
            <TextField 
              label="Contraseña" 
              type="password" 
              placeholder="Contraseña"
              fullWidth/>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{mb :2, mt:1}}>
          <Grid item xs={12} >
            <Button variant='contained' fullWidth>
              Crear Cuenta
            </Button>
          </Grid>          

          <Grid container 
            direction="row"
            justifyContent="end"
          >
            <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
            <Link component={ RouterLink } color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
