
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';

import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';
import { useEffect, useState } from 'react';
import { getUsersFromFirestore } from '@/utils/user';

const TablaUsuarios = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsersFromFirestore();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return (
        <DashboardCard title="Usuarios Activos">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Id
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Nombre
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Apellido
                                </Typography>
                            </TableCell>
                           
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Email
                                </Typography>
                            </TableCell>
                             <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Activo
                                </Typography>
                            </TableCell>
                            <TableCell >
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Teléfono
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    Cargando usuarios...
                                </TableCell>
                            </TableRow>
                        ) : users.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    No hay usuarios.
                                </TableCell>
                            </TableRow>
                        ) : (
                            users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                                            {user.id}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Box>
                                                <Typography variant="subtitle2" fontWeight={600}>
                                                    {user.firstName || "-"}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                            {user.lastName || "-"}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                            {user.email || "-"}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            sx={{
                                                px: "4px",
                                                backgroundColor: user.isActive ? user.pbg || "primary.main" : "error.main",
                                                color: "#fff",
                                            }}
                                            size="small"
                                            label={user.isActive ? "Activo" : "Inactivo"}
                                        ></Chip>
                                    </TableCell>
                                    <TableCell >
                                        <Typography variant="h6">
                                            {user.phone}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default TablaUsuarios;
