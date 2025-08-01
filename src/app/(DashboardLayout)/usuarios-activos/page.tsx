'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import TablaUsuarios from './_components/TablaUsuarios';


const UsuariosActivos = () => {
  return (
    <PageContainer title="Usuarios Activos" description="Lista de Usuarios Activos">
      
        <TablaUsuarios />
      
    </PageContainer>
  );
};

export default UsuariosActivos;

