import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListarProdutos from '../listaProdutos/ListarProdutos'
import './TabProduto.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListarProdutos />
          </Box>
      
    
    </>
  );
}
export default TabPostagem;