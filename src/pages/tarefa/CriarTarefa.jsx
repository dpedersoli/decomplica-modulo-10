import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, MenuItem, Select, Grid, Card, CardHeader, CardContent, Button } from '@mui/material';
import CardActions from '@mui/material/CardActions';

const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    let proximoId = Math.max(...tarefas.map(tarefa => tarefa.idTarefa), 0) + 1;
    setIdTarefa(proximoId);

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const nextDay = currentDate.toISOString().split('T')[0];
    setInicioTarefa(new Date().toISOString().split('T')[0])
    setFimTarefa(nextDay)
  }, []);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleSalvar = () => {
    setTarefas([...tarefas, { idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, recursoTarefa, statusTarefa }]);
    handleClose();
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <Card sx={style}>
          <CardHeader
            title="Cadastro de Tarefas"
            subheader="Criar Nova Tarefa"
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="tituloTarefa">Título da Tarefa</InputLabel>
                  <Input id="tituloTarefa" value={tituloTarefa} onChange={(e) => setTituloTarefa(e.target.value)} />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="descricaoTarefa">Descrição da Tarefa</InputLabel>
                  <Input id="descricaoTarefa" value={descricaoTarefa} onChange={(e) => setDescricaoTarefa(e.target.value)} />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="inicioTarefa">Data de Início</InputLabel>
                  <Input id="inicioTarefa" type="date" value={inicioTarefa} onChange={(e) => setInicioTarefa(e.target.value)} />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="fimTarefa">Data de Fim</InputLabel>
                  <Input id="fimTarefa" type="date" value={fimTarefa} onChange={(e) => setFimTarefa(e.target.value)} />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="recurso_tarefa">Recurso</InputLabel>
                  <Select
                    id="recurso_tarefa"
                    value={recursoTarefa}
                    label="Recurso"
                    onChange={handleRecurso}
                    labelId="recurso_tarefa"
                  >
                    <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                    <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                    <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="status_tarefa">Status</InputLabel>
                  <Select
                    id="status_tarefa"
                    value={statusTarefa}
                    label="Status"
                    onChange={handleStatus}
                    labelId="status_tarefa"
                  >
                    <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                    <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                    <MenuItem value={'Concluída'}>Concluída</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={handleSalvar}>Salvar</Button>
            <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default CriarTarefa;