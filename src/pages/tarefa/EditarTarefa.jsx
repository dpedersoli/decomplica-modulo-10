import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, MenuItem, Select, Grid, Card, CardHeader, CardContent, Button } from '@mui/material';
import CardActions from '@mui/material/CardActions';

const EditarTarefa = ({ handleCloseEditar, idTarefaSelecionada, tarefas, tarefa, setTarefas }) => {
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    if (tarefa) {
      setTituloTarefa(tarefa.tituloTarefa);
      setDescricaoTarefa(tarefa.descricaoTarefa);
      setInicioTarefa(tarefa.inicioTarefa);
      setFimTarefa(tarefa.fimTarefa);
      setRecursoTarefa(tarefa.recursoTarefa);
      setStatusTarefa(tarefa.statusTarefa);
    }
  }, [tarefa]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleEditar = () => {
    const updatedTarefas = tarefas.map(obj => {
      if (obj.idTarefa === idTarefaSelecionada) {
        return {
          ...obj,
          tituloTarefa,
          descricaoTarefa,
          inicioTarefa,
          fimTarefa,
          recursoTarefa,
          statusTarefa
        };
      }
      return obj;
    });

    setTarefas(updatedTarefas);
    handleCloseEditar();
  };

  return (
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader
          title="Editar Tarefa"
          subheader="Edição de Tarefas"
        />
        <CardContent>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="tarefa_titulo">Título da Tarefa</InputLabel>
              <Input id="tarefa_titulo" value={tituloTarefa} onChange={e => setTituloTarefa(e.target.value)} />
            </FormControl>
          </Grid>
          <Grid item xs={12} mt={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="tarefa_descricao">Descrição da Tarefa</InputLabel>
              <Input id="tarefa_descricao" value={descricaoTarefa} onChange={e => setDescricaoTarefa(e.target.value)} />
            </FormControl>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_inicio">Data de Início</InputLabel>
                <Input id="tarefa_inicio" type="date" value={inicioTarefa} onChange={e => setInicioTarefa(e.target.value)} />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_fim">Data de Fim</InputLabel>
                <Input id="tarefa_fim" type="date" value={fimTarefa} onChange={e => setFimTarefa(e.target.value)} />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="tarefa_recurso">Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  label="Recurso"
                  onChange={handleRecurso}
                  labelId="tarefa_recurso"
                >
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="tarefa_status">Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  label="Status"
                  onChange={handleStatus}
                  labelId="tarefa_status"
                >
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid mt={2}>
              <CardActions>
                <Button variant="contained" onClick={handleEditar}>Salvar</Button>
                <Button variant="outlined" onClick={handleCloseEditar}>Cancelar</Button>
              </CardActions>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
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

export default EditarTarefa;