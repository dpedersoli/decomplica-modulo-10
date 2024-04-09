import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardActions, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Modal } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

import CriarTarefa from './CriarTarefa';
import EditarTarefa from './EditarTarefa';

function createData(idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa) {
  return { idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa };
}

const initialRows = [
  createData(1, 'Tarefa 1', 'Descrição da Tarefa 1', '2022-01-01', '2022-01-02', 'Concluída', 'Recurso 1'),
  createData(2, 'Tarefa 2', 'Descrição da Tarefa 2', '2022-01-03', '2022-01-04', 'Em Andamento', 'Recurso 2'),
  createData(3, 'Tarefa 3', 'Descrição da Tarefa 3', '2022-01-04', '2022-01-05', 'Em Andamento', 'Recurso 3'),
];

const ListarTarefa = () => {
  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState();
  const [idTarefaSelecionada, setIdTarefaSelecionada] = useState([]);

  useEffect(() => {
    setTarefas(initialRows);
  }, []);

  const handleEditar = (id) => {
    setIdTarefaSelecionada(id);
    let tarefaParaEditar = tarefas.find(tarefa => tarefa.idTarefa === id);
    setTarefa(tarefaParaEditar);
    setOpenEditar(true);
  };

  const handleDeletar = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.idTarefa !== id));
  };

  return (
    <>
      <Card>
        <CardHeader
          title="Tarefas"
          subheader="Listagem de Tarefas"
        />
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Título</TableCell>
                  <TableCell>Descrição</TableCell>
                  <TableCell>Data de Início</TableCell>
                  <TableCell>Data de Finalização</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Recurso</TableCell>
                  <TableCell align="center">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tarefas.map((row) => (
                  <TableRow key={row.idTarefa}>
                    <TableCell>{row.idTarefa}</TableCell>
                    <TableCell>{row.tituloTarefa}</TableCell>
                    <TableCell>{row.descricaoTarefa}</TableCell>
                    <TableCell>{row.inicioTarefa}</TableCell>
                    <TableCell>{row.fimTarefa}</TableCell>
                    <TableCell>{row.statusTarefa}</TableCell>
                    <TableCell>{row.recursoTarefa}</TableCell>
                    <TableCell align="center">
                      <Button color="primary" onClick={() => handleEditar(row.idTarefa)} startIcon={<EditIcon />} size="small">Editar</Button>
                      <Button color="error" onClick={() => handleDeletar(row.idTarefa)} startIcon={<DeleteIcon />} size="small">Excluir</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={() => setOpen(true)}>Criar Tarefa</Button>
          <Button variant="outlined">Cancelar</Button>
        </CardActions>
      </Card>
      <Modal open={open} onClose={() => setOpen(false)}>
        <CriarTarefa handleClose={() => setOpen(false)} tarefas={tarefas} setTarefas={setTarefas} />
      </Modal>
      <Modal open={openEditar} onClose={() => setOpenEditar(false)}>
        <EditarTarefa handleCloseEditar={() => setOpenEditar(false)} idTarefaSelecionada={idTarefaSelecionada} tarefas={tarefas} tarefa={tarefa} setTarefas={setTarefas} />
      </Modal>
    </>
  );
};

export default ListarTarefa;
